import { Dropdown, IDropdownOption, Label } from "@fluentui/react";
import "../../styles/filter-component.css";
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
  label?: string;
  placeholder?: string;
  tabIndex?: number;
  datasource: dropdownDatasource;
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
      <Label tabIndex={props.tabIndex}>{props.label}</Label>
      <Dropdown
        selectedKey={props.value}
        options={getDataSource(props.datasource)}
        onChange={props.onChange}
        tabIndex={props.tabIndex}
        placeholder={props.placeholder}
        className={"filter-component-style"}
      />
    </>
  );
};
