import * as React from "react";
import { IconButton } from "@fluentui/react/lib/Button";
import { Panel } from "@fluentui/react/lib/Panel";
import { useBoolean } from "@fluentui/react-hooks";
import { Theming } from "./theming";
type settingsProps = {
  onThemeChange: () => void;
};
export const Settings = (props: settingsProps) => {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);
  return (
    <>
      <IconButton
        iconProps={{ iconName: "Settings" }}
        onClick={openPanel}
        title={"Open Settings"}
      />
      <Panel
        isLightDismiss
        headerText="Settings"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <Theming onThemeChange={props.onThemeChange} />
      </Panel>
    </>
  );
};
