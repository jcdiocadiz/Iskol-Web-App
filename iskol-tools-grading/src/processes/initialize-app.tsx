import { LoadObjectToLocalStorage } from "../shared/helpers/local-storage-helper";
import {
  LocalStorageTheme,
  ThemeConstants,
  CurrentTheme,
} from "../shared/constants/theme-constants";
import { DefaultTheme } from "../shared/theme/theme";
const LoadTheme = () => {
  LoadObjectToLocalStorage(JSON.stringify(DefaultTheme), LocalStorageTheme);
};

const LoadCurrentTheme = () => {
  LoadObjectToLocalStorage(
    ThemeConstants.DefaultTheme.toString(),
    CurrentTheme
  );
};
export const InitializeApp = () => {
  LoadTheme();
  LoadCurrentTheme();
};
