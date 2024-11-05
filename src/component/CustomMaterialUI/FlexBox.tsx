import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

// Styled Box as Flex
export const FlexBox = styled(Box)({
  display: 'flex',
});

// Styled Box as Flex with Flex as Row
export const FlexRowBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flex: 'grow',
  width: '100%',
});

// Styled Box as Flex with Flex as Column
export const FlexColumnBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  flex: 'grow',
  height: '100%',
});
