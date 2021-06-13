import { IconButton } from "@fluentui/react";
import { Icon } from "@fluentui/react/lib/Icon";
import { useEffect, useState } from "react";
import "./right-panel.css";
export const RightPanel = () => {
  return (
    <div className={"right-container"}>
      <span className={"right-panel-header"}>
        <Icon iconName={"AnalyticsReport"}></Icon>
        <span className={"right-panel-header-label "}>Grading Status</span>
      </span>
      <div className={"right-panel-content"}>
        <div>
          <span className={"right-item"}>Current Section:</span> 1
        </div>
        <div>
          <span className={"right-item"}>Students:</span> 34
        </div>
        <div>
          <span className={"right-item"}>Graded:</span> 24
        </div>
        <div>
          <span className={"right-item"}>Non-Graded:</span> 10
        </div>
        <div>
          <span className={"right-item"}>Passed:</span> 20
        </div>
        <div>
          <span className={"right-item"}>Failed: </span>4
        </div>
        <div>
          <span className={"right-item"}>Dropped: </span>0
        </div>
        <div>
          <span className={"right-item"}>Transferred: </span>0
        </div>
      </div>
    </div>
  );
};
