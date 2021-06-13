import "./page-header.css";
type pageHeaderProps = {
  headerName: string;
  tabIndex?: number;
};
export const PageHeader = (props: pageHeaderProps) => {
  return (
    <div className={"page-header-container"}>
      <h4 tabIndex={props.tabIndex} aria-label={props.headerName}>
        {props.headerName}
      </h4>
    </div>
  );
};
