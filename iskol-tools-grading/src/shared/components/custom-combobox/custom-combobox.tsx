import { Dropdown, IDropdownOption, Label } from "@fluentui/react";
import React from "react";
import {
  schoolYearOptions,
  gradeLevelOptions,
  sectionStatusOptions,
} from "./custom-combobox-dummy-data"; //Dummy data. Delete later

export enum customComboBoxDataSource {
  SectionNames,
  SchoolYears,
  SectionStatuses,
  GradeLevels,
  Subjects,
}

type customComboBoxProps = {
  className?: string;
  label: string;
  onChange?: (
    items: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption,
    index?: number
  ) => void;
  dataSource: customComboBoxDataSource;
  selectedKeys: string[] | number[] | null;
  tabIndex?: number;
  placeholder?: string;
  multiSelect?: boolean;
};

const getDataSource = (props: customComboBoxDataSource) => {
  return props === customComboBoxDataSource.SchoolYears
    ? schoolYearOptions
    : props === customComboBoxDataSource.GradeLevels
    ? gradeLevelOptions
    : sectionStatusOptions;
};
export const updateSelectedKeyState =
  (setObjectState: (value: React.SetStateAction<string[]>) => void) =>
  (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
    if (option !== undefined && option?.key !== undefined)
      setObjectState((prevSelectedKeys: any) => {
        var options: string[] = option?.selected
          ? [...prevSelectedKeys, option.key]
          : prevSelectedKeys.filter((c: any) => c !== option!.key);
        return options;
      });
  };

const CustomComboBox = (props: customComboBoxProps) => {
  return (
    <>
      <Label tabIndex={props.tabIndex} className={props.className}>
        {props.label}
      </Label>
      <Dropdown
        selectedKeys={props.selectedKeys}
        options={getDataSource(props.dataSource)}
        multiSelect
        onChange={props.onChange}
        tabIndex={props.tabIndex}
        className={props.className}
        placeholder={props.placeholder}
      />
    </>
  );
};
export default CustomComboBox;
