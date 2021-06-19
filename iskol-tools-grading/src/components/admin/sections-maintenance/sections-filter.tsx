import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import CustomComboBox, {
  updateSelectedKeyState,
  customComboBoxDataSource,
} from "../../../shared/components/custom-combobox/custom-combobox";
import FilterContainer from "../../../shared/components/filter-container/filter-container";
import "../../../App.css";
import "../../../shared/styles/filter-component.css";
import { IPersonaProps } from "@fluentui/react";
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
            onChange={updateSelectedKeyState(setschoolYear)}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomComboBox
            selectedKeys={sectionStatuses}
            dataSource={customComboBoxDataSource.SectionStatuses}
            placeholder={"Status"}
            className={"filter-component-style"}
            label={"Status"}
            onChange={updateSelectedKeyState(setSectionStatuses)}
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
            onChange={updateSelectedKeyState(setgradeLevel)}
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
