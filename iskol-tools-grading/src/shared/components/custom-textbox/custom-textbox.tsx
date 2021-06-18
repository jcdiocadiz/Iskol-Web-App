import { Label, TextField } from "@fluentui/react";
import "../../styles/filter-component.css";
type textboxProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  tabIndex?: number;
  icon?: string;
  value?: string;
  onChange?: (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    newValue?: string
  ) => void;
};
const CustomTextbox = (props: textboxProps) => {
  return (
    <>
      <Label tabIndex={props.tabIndex} className={props.className}>
        {props.label}
      </Label>
      <TextField
        placeholder={props.placeholder}
        tabIndex={props.tabIndex}
        iconProps={{ iconName: props.icon }}
        value={props.value}
        className={props.className}
        onChange={props.onChange}
      ></TextField>
    </>
  );
};
export default CustomTextbox;
