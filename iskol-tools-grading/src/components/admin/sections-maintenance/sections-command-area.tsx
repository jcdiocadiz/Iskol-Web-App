import { useState } from "react";
import { ControlsSection } from "../../../shared/components/controls-section/controls-section";
import { AddNewSection } from "./sections-add-new";

export const SectionCommandArea = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  /**Download */
  const onDownloadSection = () => {
    alert("download section");
  };

  const onAddNewSection = () => {
    alert("new section");
    setIsShowModal(true);
  };

  const onHideModal = () => {
    alert("hide section");
    setIsShowModal(false);
  };
  /**Return JSX Element */
  return (
    <div>
      <ControlsSection
        addNewButtonLabel="Add New Section"
        onAddNew={onAddNewSection}
        onDownload={onDownloadSection}
      />
      <AddNewSection
        isModalOpen={isShowModal}
        onAddNewSection={onAddNewSection}
        onHideModal={onHideModal}
      ></AddNewSection>
    </div>
  );
};
