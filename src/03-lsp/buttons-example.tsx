import styled from '@emotion/styled';
import { Box, Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

export function ButtonsExample() {

  const onButtonClicked = (buttonType: string) => {
    console.log(`Button ${buttonType} clicked!`);
  }

  return <>
    <Box display='flex'>
      <Button variant="contained" onClick={() => onButtonClicked('normal')}>Normal</Button>
      <SquareButton variant="contained" onClick={() => onButtonClicked('squared')}>Squared</SquareButton>
    </Box>
    <ContainedButton variant="contained" onClick={() => onButtonClicked('contained')}>Contained</ContainedButton>
  </>;
}

const SquareButton = styled(Button)({
  borderRadius: 0,
  marginLeft: '1rem',
});

const ContainedButton: FC<ButtonProps> = (props) => {
  return <Box marginY={2}>
    <Button fullWidth={true} {...props}>{props.children}</Button>
  </Box>;
}
