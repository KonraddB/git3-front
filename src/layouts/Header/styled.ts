import { AppBar, styled } from "@mui/material";

export const CustomizedAppBar = styled(AppBar)(
  ({ theme }) => `
    padding:8px 16px;
    img {
        height: 60px;
    }
  `
);
