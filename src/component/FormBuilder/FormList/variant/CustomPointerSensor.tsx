import { PointerSensor, PointerSensorProps } from '@dnd-kit/core';

class CustomPointerSensor extends PointerSensor {
  constructor(props: PointerSensorProps) {
    super(props);
  }

  // Override `activators` to customize activation behavior
  static activators = [
    {
      eventName: 'onPointerDown' as const,
      handler: ({ nativeEvent }: React.PointerEvent): boolean => {
        return !nativeEvent.defaultPrevented; // Activate only if default is not prevented
      },
    },
  ];
}

export { CustomPointerSensor };