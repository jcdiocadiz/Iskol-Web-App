import * as React from "react";
import { useId, useBoolean } from "@fluentui/react-hooks";
import { AddEditButtons } from "../add-edit-buttons/add-edit-buttons";
import "./add-edit-form.css";
import {
  getTheme,
  mergeStyleSets,
  FontWeights,
  ContextualMenu,
  Toggle,
  Modal,
  IDragOptions,
  IIconProps,
  Stack,
  IStackProps,
} from "@fluentui/react";
import {
  DefaultButton,
  IconButton,
  IButtonStyles,
  PrimaryButton,
} from "@fluentui/react/lib/Button";
type AddEditFormProps = {
  formContent?: JSX.Element[];
  onHideModal?: () => void;
  isLoading?: boolean;
  tabIndex?: number;
  disabled?: boolean;
  titleAriaId?: string;
  isModalOpen?: boolean;
  containerClassName?: string;
  headerName?: string;
};
const cancelIcon: IIconProps = { iconName: "Cancel" };
const theme = getTheme();
const contentStyles = mergeStyleSets({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "stretch",
  },
  header: [
    theme.fonts.xLargePlus,
    {
      flex: "1 1 auto",
      borderTop: `4px solid`,
      display: "flex",
      alignItems: "center",
      fontWeight: FontWeights.semibold,
      padding: "12px 12px 14px 24px",
    },
  ],
  body: {
    flex: "4 4 auto",
    padding: "0 24px 24px 24px",
    overflowY: "hidden",
    selectors: {
      p: { margin: "14px 0" },
      "p:first-child": { marginTop: 0 },
      "p:last-child": { marginBottom: 0 },
    },
  },
});
const stackProps: Partial<IStackProps> = {
  horizontal: true,
  tokens: { childrenGap: 40 },
  styles: { root: { marginBottom: 20 } },
};
const iconButtonStyles: Partial<IButtonStyles> = {
  root: {
    color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    color: theme.palette.neutralDark,
  },
};
export const AddEditForm = (props: AddEditFormProps) => {
  return (
    <Modal
      titleAriaId={props.titleAriaId}
      isOpen={props.isModalOpen}
      onDismiss={props.onHideModal}
      isBlocking={false}
      containerClassName={props.containerClassName ?? "modal-container"}
    >
      <div className={contentStyles.header}>
        <span id={props.titleAriaId}>{props.headerName ?? "Header"}</span>
        <IconButton
          styles={iconButtonStyles}
          iconProps={cancelIcon}
          ariaLabel="Close popup modal"
          onClick={props.onHideModal}
        />
      </div>
      <div className={contentStyles.body}>
        {/* Content of the Edit Form */}
        {props.formContent ?? <>No content</>}
      </div>
    </Modal>
  );
};
