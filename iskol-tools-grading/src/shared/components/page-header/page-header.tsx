import "./page-header.css";
type pageHeaderProps = {
  id: string;
  headerName: string;
  tabIndex?: number;
};
export const PageHeader = (props: pageHeaderProps) => {
  return (
    <div className={"page-header-container"} id={props.id}>
      <h4 tabIndex={props.tabIndex} aria-label={props.headerName}>
        {props.headerName}
      </h4>
    </div>
  );
};
