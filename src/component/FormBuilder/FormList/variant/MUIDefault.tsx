import React, { useRef, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { TFormFieldProps, IListField } from 'component/FormBuilder';
import { FlexRowBox } from 'component/CustomMaterialUI';
import List from './List'; // Assuming your List component is imported here

export const MUIDefault: React.FC<TFormFieldProps> = ({ field, formik }) => {
  const listField = field as IListField;
  const { name, options } = listField;
  const { data } = options;
  const { values, setFieldValue } = formik;

  const [availableOptions, setAvailableOptions] = useState(
    data.filter((item) => !values[name]?.includes(item.value))
  );

  const [selectedOptions, setSelectedOptions] = useState(
    data.filter((item) => values[name]?.includes(item.value))
  );

  const leftListRef = useRef<HTMLDivElement>(null);
  const rightListRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useRef<'left' | 'right' | null>(null);

  const handleItemClick = (item: { value: string; label: string }, sourceList: string) => {
    if (sourceList === 'available') {
      // Move item from Available Options to Selected Options
      setAvailableOptions(availableOptions.filter((opt) => opt.value !== item.value));
      setSelectedOptions([...selectedOptions, item]);
      setFieldValue(name, [...values[name], item.value]);
      scrollDirection.current = 'right'; // Indicate right list should scroll
    } else {
      // Move item from Selected Options to Available Options
      setSelectedOptions(selectedOptions.filter((opt) => opt.value !== item.value));
      setAvailableOptions([...availableOptions, item]);
      setFieldValue(
        name,
        values[name].filter((val: string) => val !== item.value)
      );
      scrollDirection.current = 'left'; // Indicate left list should scroll
    }
  };

  const handleReorder = (newOrder: { value: string; label: string }[], sourceList: string) => {
    if (sourceList === 'available') {
      setAvailableOptions(newOrder);
    } else {
      setSelectedOptions(newOrder);
      setFieldValue(name, newOrder.map((item) => item.value));
    }
  };

  // Scroll the appropriate list after the state has updated
  useEffect(() => {
    if (scrollDirection.current === 'right' && rightListRef.current) {
      const lastChild = rightListRef.current.lastElementChild as HTMLElement;
      const newItemHeight = lastChild ? lastChild.offsetHeight : 0;

      rightListRef.current.scrollTo({
        top: rightListRef.current.scrollHeight - rightListRef.current.clientHeight + newItemHeight,
        behavior: 'smooth',
      });

      scrollDirection.current = null; // Reset scroll direction
    } else if (scrollDirection.current === 'left' && leftListRef.current) {
      const lastChild = leftListRef.current.lastElementChild as HTMLElement;
      const newItemHeight = lastChild ? lastChild.offsetHeight : 0;

      leftListRef.current.scrollTo({
        top: leftListRef.current.scrollHeight - leftListRef.current.clientHeight + newItemHeight,
        behavior: 'smooth',
      });

      scrollDirection.current = null; // Reset scroll direction
    }
  }, [availableOptions, selectedOptions]);

  return (
    <FlexRowBox sx={{ gap: 2 }}>
      {/* Available Options List */}
      <Box sx={{ flex: 1 }}>
        <List
          ref={leftListRef}
          options={availableOptions}
          droppableId="availableOptions"
          onReorder={(newOrder) => handleReorder(newOrder, 'available')} // Handle reordering
          onItemClick={(item) => handleItemClick(item, 'available')} // Click handler
        />
      </Box>

      {/* Selected Options List */}
      <Box sx={{ flex: 1 }}>
        <List
          ref={rightListRef}
          options={selectedOptions}
          droppableId="selectedOptions"
          onReorder={(newOrder) => handleReorder(newOrder, 'selected')} // Handle reordering
          onItemClick={(item) => handleItemClick(item, 'selected')} // Click handler
        />
      </Box>
    </FlexRowBox>
  );
};