import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import { useState } from "react";
import { useBoolean } from "@fluentui/react-hooks";
import { IDropdownOption, IPersonaProps } from "@fluentui/react";
import CustomPeoplePicker from "../../../shared/components/custom-people-picker/custom-people-picker";
import {
  CustomDropdown,
  dropdownDatasource,
} from "../../../shared/components/custom-dropdown/custom-dropdown";
import { AddEditButtons } from "../../../shared/components/add-edit-buttons/add-edit-buttons";
import { AddEditForm } from "../../../shared/components/add-edit-form/add-edit-form";
type AddNewSectionProps = {
  isModalOpen: boolean;
  onAddNewSection: () => void;
  onHideModal: () => void;
};
export const AddNewSection = (props: AddNewSectionProps) => {
  /**Add Section */
  const [schoolYear, setschoolYear] = useState<string>();
  const [gradeLevel, setgradeLevel] = useState<string>();
  const [sectionStatus, setSectionStatus] = useState<string>();
  const [personas, setpersonas] = useState<IPersonaProps[]>();
  const [sectionName, setsectionName] = useState<string>();
  const [isPeoplePickerDisabled, setIsPeoplePickerDisabled] =
    useState<boolean>();
  const content: JSX.Element[] = [];
  /**Events */
  const onCancelAddSection = () => {
    alert("Cancel");
    props.onHideModal();
  };

  const onSaveNewSection = () => {
    alert(
      "Save the ff: Section name - " +
        sectionName +
        ", school year - " +
        schoolYear +
        ", grade level - " +
        gradeLevel +
        ", section status - " +
        sectionStatus
    );
    props.onHideModal();
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
          <CustomDropdown
            value={schoolYear}
            dataSource={dropdownDatasource.SchoolYears}
            placeholder={"School Year"}
            label={"School Year"}
            className={"filter-component-style"}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              setschoolYear(option?.text ?? "");
            }}
          />
        </div>
        <div className="col-4 col-s-4">
          <CustomDropdown
            value={sectionStatus}
            dataSource={dropdownDatasource.Status}
            placeholder={"Status"}
            className={"filter-component-style"}
            label={"Status"}
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              setSectionStatus(option?.text ?? "");
            }}
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
            onChange={(
              event: React.FormEvent<HTMLDivElement>,
              option?: IDropdownOption
            ) => {
              setgradeLevel(option?.text ?? "");
            }}
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
        <AddEditButtons
          onSaveOrUpdate={onSaveNewSection}
          onCancel={onCancelAddSection}
        ></AddEditButtons>
      </div>
    </div>
  );
  return (
    <div>
      <AddEditForm
        isModalOpen={props.isModalOpen}
        onHideModal={props.onHideModal}
        headerName={"Add New Section"}
        formContent={content}
      ></AddEditForm>
    </div>
  );
};
