import React, { forwardRef } from 'react';
import { Box, Paper } from '@mui/material';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import DraggableItem from './DraggableItem';
import { CustomPointerSensor } from './CustomPointerSensor'; // Import the custom sensor

// Define the structure of an individual option
interface Option {
  value: string;
  label: string;
}

// Props for the List component
interface ListProps {
  options: Option[]; // List of options to display
  droppableId: string; // Unique ID for the droppable area
  onReorder: (newOrder: Option[]) => void; // Callback to update the parent with reordered items
  onItemClick: (item: Option) => void; // Callback when an item is clicked
}

const List = forwardRef<HTMLDivElement, ListProps>((props, ref) => {
  const { options, onReorder, onItemClick } = props;
  const sensors = useSensors(
    useSensor(CustomPointerSensor, {
      activationConstraint: {
        distance: 5, // Minimum drag distance before activation
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = options.findIndex((item) => item.value === active.id);
    const newIndex = options.findIndex((item) => item.value === over.id);

    const newOrder = arrayMove(options, oldIndex, newIndex);
    onReorder(newOrder); // Notify parent with the new order for this specific list
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={options.map((item) => item.value)} strategy={verticalListSortingStrategy}>
        <Box>
          <Paper
            ref={ref}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '8px 0',
              backgroundColor: '#f9f9f9',
              height: '300px', // Fixed height for the list
              overflowY: 'auto', // Scrollable if content overflows
            }}
          >
            {options.map((item) => (
              <DraggableItem
                key={item.value}
                item={item}
                onClick={() => onItemClick(item)} // Pass the clicked item to parent
              />
            ))}
          </Paper>
        </Box>
      </SortableContext>
    </DndContext>
  );
});

// Add a displayName for better debugging and error tracking
List.displayName = 'List';

export default List;