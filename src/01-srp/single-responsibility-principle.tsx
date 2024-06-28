import { Typography } from '@mui/material';
import { PersonsList } from './before';

export function SingleResponsibilityPrinciple() {
  return <>
    <Typography variant="h2" component="h1" gutterBottom>
      Single Responsibility Principle
    </Typography>
    <PersonsList />
  </>
}