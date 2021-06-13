import { Label, TextField } from "@fluentui/react";
import "../../styles/filter-component.css";
type textboxProps = {
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
      <Label tabIndex={props.tabIndex} className={"filter-component-style"}>
        {props.label}
      </Label>
      <TextField
        placeholder={props.placeholder}
        tabIndex={props.tabIndex}
        iconProps={{ iconName: props.icon }}
        value={props.value}
        className={"filter-component-style"}
        onChange={props.onChange}
      ></TextField>
    </>
  );
};
export default CustomTextbox;
