import { ControlsSection } from "../../../shared/components/controls-section/controls-section";
import { useBoolean } from "@fluentui/react-hooks";
import { AddEditForm } from "../../../shared/components/add-edit-form/add-edit-form";
import CustomTextbox from "../../../shared/components/custom-textbox/custom-textbox";
import { useState } from "react";
import { IPersonaProps } from "@fluentui/react";
import CustomComboBox, {
  customComboBoxDataSource,
  updateSelectedKeyState,
} from "../../../shared/components/custom-combobox/custom-combobox";
import CustomPeoplePicker from "../../../shared/components/custom-people-picker/custom-people-picker";

export const SectionCommandArea = () => {
  /**Download */
  const onDownloadSection = () => {
    alert("download section");
  };
  /**Add Section */
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const onAddNewSection = () => {
    showModal();
  };
  const [schoolYear, setschoolYear] = useState<string[]>([]);
  const [gradeLevel, setgradeLevel] = useState<string[]>([]);
  const [sectionStatuses, setSectionStatuses] = useState<string[]>([]);
  const [personas, setpersonas] = useState<IPersonaProps[]>();
  const [sectionName, setsectionName] = useState<string>();
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

  /**Return JSX Element */
  return (
    <div>
      <ControlsSection
        addNewButtonLabel="Add New Section"
        onAddNew={onAddNewSection}
        onDownload={onDownloadSection}
      />
      <AddEditForm
        isModalOpen={isModalOpen}
        onHideModal={hideModal}
        headerName={"Add New Section"}
        formContent={content}
      ></AddEditForm>
    </div>
  );
};
