import { ControlsSection } from "../../../shared/components/controls-section/controls-section";
import { AddNewSection } from "./sections-add-new";
import { useBoolean } from "@fluentui/react-hooks";
import { AddEditForm } from "../../../shared/components/add-edit-form/add-edit-form";

export const SectionCommandArea = () => {
  /**Download */
  const onDownloadSection = () => {
    alert("download section");
  };
  /**Events */
  const onCancelAddSection = () => {
    alert("Cancel");
  };

  const onSaveNewSection = () => {
    alert("Save");
  };

  /**Add Section */
  const [isModalOpen, { setTrue: showModal, setFalse: hideModal }] =
    useBoolean(false);
  const onAddNewSection = () => {
    showModal();
  };
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
        formContent={AddNewSection()}
        onCancel={onCancelAddSection}
        onSaveOrUpdate={onSaveNewSection}
      ></AddEditForm>
    </div>
  );
};
