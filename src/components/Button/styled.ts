import { Button, styled } from "@mui/material";

export const CustomizedButton = styled(Button)(
  ({ theme }) => `
    font-size: 16px;
    font-weight:600;
    border-radius: 7px;
    text-transform: none;
  `
);
