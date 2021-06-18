import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import CustomComboBox, {
  customComboBoxDataSource,
} from "../../../shared/components/custom-combobox/custom-combobox";
import FilterContainer from "../../../shared/components/filter-container/filter-container";
import "../../../App.css";
import "../../../shared/styles/filter-component.css";
import { IDropdownOption, IPersonaProps } from "@fluentui/react";
import React, { useState } from "react";
import CustomPeoplePicker from "../../../shared/components/custom-people-picker/custom-people-picker";
const SectionsFilter = () => {
  const [schoolYear, setschoolYear] = useState<string[]>([]);
  const [gradeLevel, setgradeLevel] = useState<string[]>([]);
  const [sectionStatuses, setSectionStatuses] = useState<string[]>([]);
  const [personas, setpersonas] = useState<IPersonaProps[]>();
  const [sectionName, setsectionName] = useState<string>();
  const onApplyFilter = () => {
    alert("Filter applied");
  };
  const onClearFilter = () => {
    setschoolYear([]);
    setgradeLevel([]);
    setSectionStatuses([]);
    setpersonas([]);
    setsectionName("");
  };
  let content: JSX.Element[] = [];
  const onCustomDropdownChange =
    (setObjectState: (value: React.SetStateAction<string[]>) => void) =>
    (event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption) => {
      if (option !== undefined && option?.key !== undefined)
        setObjectState((prevSelectedKeys: any) => {
          debugger;
          var options: string[] = option?.selected
            ? [...prevSelectedKeys, option.key]
            : prevSelectedKeys.filter((c: any) => c !== option!.key);
          return options;
        });
    };
  content.push(
    <div>
      <div className="row filter-row">
        <div className="col-4 col-s-4">
          <CustomTextbox
            placeholder={"section name"}
            label={"Section Name"}
            className={"filter-component-style"}
            value={sectionName}
            onChange={(
              event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
              newValue?: string
            ) => {
              setsectionName(newValue ?? "");
            }}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomComboBox
            selectedKeys={schoolYear}
            dataSource={customComboBoxDataSource.SchoolYears}
            placeholder={"School Year"}
            label={"School Year"}
            className={"filter-component-style"}
            onChange={onCustomDropdownChange(setschoolYear)}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomComboBox
            selectedKeys={sectionStatuses}
            dataSource={customComboBoxDataSource.SectionStatuses}
            placeholder={"Status"}
            className={"filter-component-style"}
            label={"Status"}
            onChange={onCustomDropdownChange(setSectionStatuses)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-s-4">
          <CustomComboBox
            selectedKeys={gradeLevel}
            dataSource={customComboBoxDataSource.GradeLevels}
            placeholder={"Grade Level"}
            className={"filter-component-style"}
            label={"Grade Level"}
            onChange={onCustomDropdownChange(setgradeLevel)}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomPeoplePicker
            placeholder={"Adviser"}
            selectedItems={personas}
            label={"Adviser"}
            onChange={(items?: IPersonaProps[]) => {
              setpersonas(items);
            }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <FilterContainer
        filterContent={content}
        onClearFilter={onClearFilter}
        onApplyFilter={onApplyFilter}
      />
    </div>
  );
};
export default SectionsFilter;
