import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import { useState } from "react";
import { IPersonaProps } from "@fluentui/react";
import CustomPeoplePicker from "../../../shared/components/custom-people-picker/custom-people-picker";
import {
  CustomDropdown,
  dropdownDatasource,
} from "../../../shared/components/custom-dropdown/custom-dropdown";

export const AddNewSection = (): JSX.Element[] => {
  const [schoolYear, setschoolYear] = useState<string>();
  const [gradeLevel, setgradeLevel] = useState<string>();
  const [sectionStatuses, setSectionStatuses] = useState<string>();
  const [personas, setpersonas] = useState<IPersonaProps[]>();
  const [sectionName, setsectionName] = useState<string>();
  const [isPeoplePickerDisabled, setIsPeoplePickerDisabled] =
    useState<boolean>();
  const content: JSX.Element[] = [];
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
          <CustomDropdown
            value={schoolYear}
            dataSource={dropdownDatasource.SchoolYears}
            placeholder={"School Year"}
            label={"School Year"}
            className={"filter-component-style"}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomDropdown
            value={sectionStatuses}
            dataSource={dropdownDatasource.Status}
            placeholder={"Status"}
            className={"filter-component-style"}
            label={"Status"}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 col-s-4">
          <CustomDropdown
            value={gradeLevel}
            dataSource={dropdownDatasource.GradeLevels}
            placeholder={"Grade Level"}
            className={"filter-component-style"}
            label={"Grade Level"}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomPeoplePicker
            placeholder={"Adviser"}
            selectedItems={personas}
            label={"Adviser"}
            isPeoplePickerDisabled={isPeoplePickerDisabled}
            onChange={(items?: IPersonaProps[]) => {
              if ((items?.length ?? 0) <= 1) setpersonas(items);
            }}
          />
        </div>
      </div>
    </div>
  );
  return content;
};
