import "./header.css";
import { Icon } from "@fluentui/react/lib/Icon";
import { Settings } from "../settings/settings";
import { IconButton } from "@fluentui/react/lib/Button";
import { useHistory } from "react-router";
type headerProps = {
  onThemeChange: () => void;
};
export const Header = (props: headerProps) => {
  const history = useHistory();
  return (
    <div className={"header"}>
      <span
        className={"logo"}
        onClick={() => {
          history.push("/");
        }}
      >
        <Icon
          style={{ fontSize: 30 }}
          iconName={"Education"}
          title="ISKOL"
        ></Icon>
        ISKOL
      </span>
      <div className="header-right">
        {" "}
        <IconButton
          iconProps={{ iconName: "Signin" }}
          title="Sign In"
        ></IconButton>
        <Settings onThemeChange={props.onThemeChange} />
      </div>
    </div>
  );
};
