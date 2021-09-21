import { DefaultButton, PrimaryButton } from "@fluentui/react";

type AddEditButtonsProps = {
  formContent?: JSX.Element[];
  onSaveOrUpdate?: () => void;
  onCancel?: () => void;
  onHideModal?: () => void;
  isLoading?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  isEdit?: boolean;
};
export const AddEditButtons = (props: AddEditButtonsProps) => {
  return (
    <div>
      <div className={"buttons-container"}>
        <PrimaryButton
          text={props.isEdit ? "Updated" : "Save"}
          onClick={props.onSaveOrUpdate}
          disabled={props.isLoading || props.disabled}
          tabIndex={props.tabIndex}
        />
        <DefaultButton
          text={"Cancel"}
          className={"buttons"}
          onClick={props.onCancel}
          disabled={props.isLoading}
          tabIndex={props.tabIndex}
        ></DefaultButton>
      </div>
    </div>
  );
};
