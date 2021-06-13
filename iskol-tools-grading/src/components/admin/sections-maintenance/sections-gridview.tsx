import {
  DetailsList,
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
} from "@fluentui/react";
import { useState } from "react";
export interface ISection {
  key: number;
  sectionName: string;
  schoolYear: string;
  adviser: string;
  gradeLevel: string;
  status: string;
}
const SectionsGridview = () => {
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "Section Name",
      fieldName: "sectionName",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column2",
      name: "School Year",
      fieldName: "schoolYear",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column3",
      name: "Adviser",
      fieldName: "adviser",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column4",
      name: "Grade Level",
      fieldName: "gradeLevel",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column5",
      name: "Subjects",
      onRender: (item) => {
        <a href="/sampleEdit#">Edit</a>;
      },
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
    {
      key: "column6",
      name: "statues",
      fieldName: "status",
      minWidth: 100,
      maxWidth: 200,
      isResizable: true,
    },
  ];
  let sections: ISection[] = [
    {
      key: 1,
      sectionName: "Section 1",
      schoolYear: "2018-2019",
      adviser: "Nora Grace Canaria",
      gradeLevel: "6",
      status: "New",
    },
    {
      key: 2,
      sectionName: "Section 2",
      schoolYear: "2020-2021",
      adviser: "Aida Diocadiz",
      gradeLevel: "4",
      status: "Active",
    },
  ];

  const [items] = useState<ISection[]>(sections);
  return (
    <div>
      <DetailsList
        items={items}
        columns={columns}
        selectionMode={SelectionMode.none}
        layoutMode={DetailsListLayoutMode.justified}
        checkButtonAriaLabel="select row"
      />
    </div>
  );
};
export default SectionsGridview;
