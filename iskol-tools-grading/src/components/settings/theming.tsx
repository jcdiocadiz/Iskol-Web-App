import {
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from "@fluentui/react/lib/Dropdown";
import {
  GetStringFromLocalStorage,
  LoadObjectToLocalStorage,
} from "../../shared/helpers/local-storage-helper";
import {
  DefaultTheme,
  DarkModeTheme,
  HighContrastTheme,
  MSWordTheme,
  PowerpointTheme,
  PurpleTheme,
  BlackYellowTheme,
} from "../../shared/theme/theme";
import {
  ThemeConstants,
  LocalStorageTheme,
  CurrentTheme,
} from "../../shared/constants/theme-constants";
import { useEffect, useState } from "react";
type themingProps = {
  onThemeChange: () => void;
};
/**Export theming */
export const Theming = (props: themingProps) => {
  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
  };
  /**Options */
  const options: IDropdownOption[] = [
    { key: "DefaultTheme", text: "Default" },
    { key: "DarkModeTheme", text: "Dark Mode" },
    { key: "HighContrastTheme", text: "High Contrast" },
    { key: "MSWordTheme", text: "MS Word Theme" },
    { key: "PowerpointTheme", text: "Powerpoint Theme" },
    { key: "PurpleTheme", text: "Purple Theme" },
    { key: "BlackYellowTheme", text: "Black Yellow Theme" },
  ];
  /**Default selected them */
  let defaultThemeSelected = options.find(
    (c) => c.key === GetStringFromLocalStorage(CurrentTheme)
  );

  const defaultThemeDropdownValue: IDropdownOption = {
    key: "DefaultTheme",
    text: "Default",
  };

  defaultThemeSelected = defaultThemeSelected ?? defaultThemeDropdownValue;

  const [selectedItem, setSelectedItem] =
    useState<IDropdownOption>(defaultThemeSelected);

  const onChangeSelection = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption,
    index?: number
  ) => {
    setSelectedItem(option ?? defaultThemeDropdownValue);
    props.onThemeChange();
  };

  const GetTheme = (selectedTheme: IDropdownOption) => {
    var theme =
      selectedTheme.key === ThemeConstants[ThemeConstants.DefaultTheme]
        ? DefaultTheme
        : selectedTheme.key === ThemeConstants[ThemeConstants.DarkModeTheme]
        ? DarkModeTheme
        : selectedTheme.key === ThemeConstants[ThemeConstants.MSWordTheme]
        ? MSWordTheme
        : selectedTheme.key === ThemeConstants[ThemeConstants.PowerpointTheme]
        ? PowerpointTheme
        : selectedTheme.key === ThemeConstants[ThemeConstants.PurpleTheme]
        ? PurpleTheme
        : selectedTheme.key === ThemeConstants[ThemeConstants.BlackYellowTheme]
        ? BlackYellowTheme
        : HighContrastTheme;
    return theme;
  };

  useEffect(() => {
    LoadObjectToLocalStorage(
      JSON.stringify(GetTheme(selectedItem)),
      LocalStorageTheme
    );
    LoadObjectToLocalStorage(selectedItem.key, CurrentTheme);
  }, [selectedItem]);

  return (
    <div>
      <Dropdown
        label="Select Theme"
        defaultSelectedKey={selectedItem.key}
        options={options}
        disabled={false}
        onChange={onChangeSelection}
        styles={dropdownStyles}
      />
    </div>
  );
};
