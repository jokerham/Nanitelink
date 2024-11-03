import React, { useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './index.css';
import { bool } from 'aws-sdk/clients/signer';

interface IMenuPopperProps {
  children: React.ReactNode;
  targetRef: HTMLButtonElement | null;
  open: boolean;
  onClose: () => void;
}

interface IEventHandler {
  eventName: string,
  eventHandler: (event: Event) => void
}

const MenuPopper: React.FC<IMenuPopperProps> = ({ children, targetRef, open, onClose }) => {
  const popperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const addEvent = (events: Set<IEventHandler>, addOrDelete: bool) => {
      if (addOrDelete) {
        events.forEach((event) => {
          document.addEventListener(event.eventName, event.eventHandler);
        });
      } else {
        events.forEach((event) => {
          document.removeEventListener(event.eventName, event.eventHandler);
        });
      }
    };

    const handleClickOutside = (event: Event) => {
      //console.log(event.type);
      if (
        popperRef.current &&
        !popperRef.current.contains(event.target as Node) &&
        targetRef &&
        !targetRef.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const events = new Set<IEventHandler>;
    events.add({ eventName: 'mousedown', eventHandler: handleClickOutside });
    //events.add({ eventName: 'mouseover', eventHandler: handleClickOutside });

    //document.addEventListener('mousedown', handleClickOutside);
    //return () => document.removeEventListener('mousedown', handleClickOutside);

    addEvent(events, true);
    return () => addEvent(events, false);
  }, [onClose, targetRef]);

  const getPopperPosition = () => {
    if (targetRef) {
      const { bottom, left } = targetRef.getBoundingClientRect();
      return {
        top: bottom + window.scrollY,
        left: left + window.scrollX,
      };
    }
    return { top: 0, left: 0 };
  };

  const popperPosition = getPopperPosition();

  return (
    <CSSTransition in={open} timeout={300} classNames="grow-from-top" unmountOnExit>
      <div
        ref={popperRef}
        className="custom-popper"
        style={{
          position: 'absolute',
          top: popperPosition.top,
          left: popperPosition.left,
          transformOrigin: 'top', // Set the origin to the top for growing from top
        }}
      >
        {children}
      </div>
    </CSSTransition>
  );
};

export default MenuPopper;