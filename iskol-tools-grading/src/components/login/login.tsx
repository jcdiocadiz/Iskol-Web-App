import "./login.css";
import { Label, Link, PrimaryButton, TextField } from "@fluentui/react";
import { HeaderLogo } from "../../shared/components/header-logo/header-logo";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  return (
    <div className={"login-form"}>
      <div className={"header-logo"}>
        <HeaderLogo />
      </div>
      <div>
        <TextField label="Username" />
      </div>
      <div>
        <TextField label="Password" />
      </div>
      <div className={"login-buttons"}>
        <PrimaryButton
          text="Login"
          onClick={() => {
            sessionStorage.setItem("isAuthenticated", "true");
            history.push("/");
          }}
        />
        <Link className={"sign-up"} onClick={() => {}}>
          Sign-up
        </Link>
      </div>
    </div>
  );
};
