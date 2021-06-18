import { Dropdown, IDropdownOption, Label } from "@fluentui/react";
import {
  schoolYearOptions,
  gradeLevelOptions,
  statusOptions,
} from "./custom-dropdown-dummy-data"; //Dummy data. Delete later

export enum dropdownDatasource {
  GradeLevels,
  SchoolYears,
  Status,
}
type dropdownProps = {
  className?: string;
  label?: string;
  placeholder?: string;
  tabIndex?: number;
  dataSource: dropdownDatasource;
  icon?: string;
  value?: string | number;
  onChange?: (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption
  ) => void;
};

const getDataSource = (props: dropdownDatasource) => {
  return props === dropdownDatasource.SchoolYears
    ? schoolYearOptions
    : props === dropdownDatasource.GradeLevels
    ? gradeLevelOptions
    : statusOptions;
};

export const CustomDropdown = (props: dropdownProps) => {
  return (
    <>
      <Label tabIndex={props.tabIndex} className={props.className}>
        {props.label}
      </Label>
      <Dropdown
        selectedKey={props.value}
        options={getDataSource(props.dataSource)}
        onChange={props.onChange}
        tabIndex={props.tabIndex}
        className={props.className}
        placeholder={props.placeholder}
      />
    </>
  );
};
