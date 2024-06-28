import { Typography } from "@mui/material";
import { ButtonsExample } from "./buttons-example";

export function LiskovSubstitutionPrinciple() {
  return <>
    <Typography variant="h2" component="h1" gutterBottom>
      Liskov Substitution Principle
    </Typography>
    <ButtonsExample />
  </>;
}