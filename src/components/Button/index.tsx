import * as React from "react";
import { CustomizedButton } from "./styled";

interface ButtonProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { label } = props;
  return (
    <CustomizedButton variant="contained" color="secondary" size="large">
      {label}
    </CustomizedButton>
  );
};
