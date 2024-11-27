import React, { useState } from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface Option {
  value: string;
  label: string;
}

const DraggableItem: React.FC<{ item: Option; onClick: () => void }> = ({ item, onClick }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: item.value,
  });

  const [isDragging, setIsDragging] = useState(false);

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition: transition || 'transform 200ms ease',
    padding: '8px 12px',
    height: '40px',
    boxSizing: 'border-box',
    cursor: isDragging ? 'grabbing' : 'pointer',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    alignItems: 'center',
  };

  const handleDragStart = () => {
    setIsDragging(true); // Mark as dragging
  };

  const handleDragEnd = () => {
    setIsDragging(false); // Reset dragging state
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!e.defaultPrevented) {
      onClick(); // Trigger click only if not prevented by drag
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onDragStart={handleDragStart} // Detect drag start
      onDragEnd={handleDragEnd} // Detect drag end
      onClick={handleClick} // Handle clicks
    >
      {item.label}
    </div>
  );
};

export default DraggableItem;