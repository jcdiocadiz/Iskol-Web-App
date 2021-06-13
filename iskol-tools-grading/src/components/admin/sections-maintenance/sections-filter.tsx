import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import FilterContainer from "../../../shared/components/filter-container/filter-container";
import "../../../App.css";
import {
  CustomDropdown,
  dropdownDatasource,
} from "../../../shared/components/custom-dropdown/custom-dropdown";
import { IDropdownOption, IPersonaProps } from "@fluentui/react";
import { useState } from "react";
import CustomPeoplePicker from "../../../shared/components/custom-people-picker/custom-people-picker";
const SectionsFilter = () => {
  const [schoolYear, setschoolYear] = useState<string | number>();
  const [gradeLevel, setgradeLevel] = useState<string | number>();
  const [status, setstatus] = useState<string | number>();
  const [personas, setpersonas] = useState<IPersonaProps[]>();
  const [sectionName, setsectionName] = useState<string>();
  const onApplyFilter = () => {
    alert("Filter applied");
  };
  const onClearFilter = () => {
    setschoolYear("");
    setgradeLevel("");
    setstatus("");
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
          <CustomDropdown
            value={schoolYear}
            datasource={dropdownDatasource.SchoolYears}
            placeholder={"School Year"}
            label={"School Year"}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              if (option !== undefined && option?.key !== undefined)
                setschoolYear(option?.key !== undefined ? option.key : "none");
            }}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomDropdown
            value={status}
            datasource={dropdownDatasource.Status}
            placeholder={"Status"}
            label={"Status"}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              if (option !== undefined && option?.key !== undefined)
                setstatus(option?.key !== undefined ? option.key : "none");
            }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-s-4">
          <CustomDropdown
            value={gradeLevel}
            datasource={dropdownDatasource.GradeLevels}
            placeholder={"Grade Level"}
            label={"Grade Level"}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              if (option !== undefined && option?.key !== undefined)
                setgradeLevel(option?.key !== undefined ? option.key : "none");
            }}
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
