import {
  DefaultButton,
  IIconProps,
  ITagItemSuggestionStyles,
} from "@fluentui/react";
import "./controls-section.css";

/*Property parameters */
type ContolsSectionProps = {
  isLoading?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  onAddNew?: () => void;
  addNewButtonLabel?: string;
  addNewClassName?: string;
  onAddNewIconProps?: IIconProps;
  onDownload?: () => void;
  onDownloadButtonLabel?: string;
  onDownloadIconProps?: IIconProps;
};

export const ControlsSection = (props: ContolsSectionProps) => {
  return (
    <div className={"controls-section-container"}>
      <DefaultButton
        text={props.addNewButtonLabel ?? "Add New"}
        className={props.addNewClassName ?? "control-buttons"}
        onClick={props.onAddNew}
        disabled={props.isLoading}
        tabIndex={props.tabIndex}
        iconProps={props.onAddNewIconProps}
      ></DefaultButton>
      <DefaultButton
        text={props.onDownloadButtonLabel ?? "Download as PDF"}
        className={props.onDownloadButtonLabel ?? "control-buttons"}
        onClick={props.onDownload}
        disabled={props.isLoading}
        tabIndex={props.tabIndex}
        iconProps={props.onDownloadIconProps}
      ></DefaultButton>
    </div>
  );
};
