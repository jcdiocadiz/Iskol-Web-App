import "./header.css";
import { Icon } from "@fluentui/react/lib/Icon";
import { Settings } from "../settings/settings";
import { IconButton } from "@fluentui/react/lib/Button";
import { useHistory } from "react-router";
import { HeaderLogo } from "../../shared/components/header-logo/header-logo";
type headerProps = {
  onThemeChange: () => void;
  onLogoClick: (title: string) => void;
};
export const Header = (props: headerProps) => {
  const history = useHistory();
  return (
    <div className={"header"}>
      <span
        className={"logo"}
        onClick={() => {
          history.push("/Dashboard/#Dashboard");
          props.onLogoClick("Adviser - Dashboard");
        }}
      >
        <HeaderLogo />
      </span>
      <div className="header-right">
        <IconButton
          iconProps={{ iconName: "Signin" }}
          title="Sign In"
          onClick={() => {
            history.push("/Login");
          }}
        ></IconButton>
        <Settings onThemeChange={props.onThemeChange} />
      </div>
    </div>
  );
};
