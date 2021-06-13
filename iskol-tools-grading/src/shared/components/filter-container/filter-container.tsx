import {
  PrimaryButton,
  DefaultButton,
  IconButton,
  TooltipHost,
} from "@fluentui/react";
import { useState } from "react";
import "./filter-container.css";
type FilterContainerProps = {
  filterContent: JSX.Element[];
  onApplyFilter?: () => void;
  onClearFilter?: () => void;
  isLoading?: boolean;
  tabIndex?: number;
  disabled?: boolean;
};

const FilterContainer = (props: FilterContainerProps) => {
  const [isCollapsed, setisCollapsed] = useState(false);

  return (
    <div className={"filter-container"}>
      <div className={"filter-header"}>
        Filter
        <span
          className={"collapse-style"}
          onClick={() => {
            setisCollapsed(!isCollapsed);
          }}
        >
          <TooltipHost
            content={isCollapsed ? "Show filter " : "Hide filter "}
            // This id is used on the tooltip itself, not the host
            // (so an element with this id only exists when the tooltip is shown)
          >
            <IconButton
              iconProps={{
                iconName: isCollapsed ? "DoubleChevronDown" : "DoubleChevronUp",
              }}
            ></IconButton>
          </TooltipHost>
        </span>
      </div>
      <div hidden={isCollapsed}>
        {props.filterContent}
        <div className={"filter-buttons"}>
          <PrimaryButton
            text={"Apply Filters"}
            onClick={props.onApplyFilter}
            disabled={props.isLoading || props.disabled}
            tabIndex={props.tabIndex}
          />
          <DefaultButton
            text={"Clear"}
            className={"buttons"}
            onClick={props.onClearFilter}
            disabled={props.isLoading}
            tabIndex={props.tabIndex}
          ></DefaultButton>
        </div>
      </div>
    </div>
  );
};
export default FilterContainer;
