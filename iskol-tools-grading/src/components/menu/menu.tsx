import "./menu.css";
import {
  Nav,
  INavLinkGroup,
  INavLink,
  INavStyles,
} from "@fluentui/react/lib/Nav";
import { useHistory } from "react-router";
import { withRouter } from "react-router-dom";
import { useState } from "react";
import { navLinkGroups } from "./menu-items";

const navStyles: Partial<INavStyles> = {
  root: {
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

export interface ILinkDetails {
  headerName: string;
  url: string;
}
type menuProps = {
  onMenuClick: (link: ILinkDetails) => void;
};
const Menu = (props: menuProps) => {
  const history = useHistory();
  const [selectedKey, setselectedKey] = useState("DashboardItem");

  const handleClick = (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
    setselectedKey(item?.key ?? "");
    history.push(item?.url ?? "");
    let linkDetails: ILinkDetails = {
      headerName: item?.title ?? "",
      url: item?.url ?? "",
    };
    props.onMenuClick(linkDetails);
  };

  return (
    <div className="vertical-menu">
      <Nav
        ariaLabel="Nav example similar to one found in this demo page"
        groups={navLinkGroups}
        styles={navStyles}
        selectedKey={selectedKey}
        onLinkClick={handleClick}
      />
    </div>
  );
};

export default Menu;
