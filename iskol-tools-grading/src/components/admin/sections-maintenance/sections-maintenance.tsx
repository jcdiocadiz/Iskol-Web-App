import "../../../shared/styles/content-page.css";
import { SectionCommandArea } from "./section-command-area";
import SectionsFilter from "./sections-filter";
import SectionsGridview from "./sections-gridview";
export const SectionsMaintenance = () => {
  return (
    <div className={"content-page-container"}>
      <SectionsFilter></SectionsFilter>
      <SectionCommandArea></SectionCommandArea>
      <SectionsGridview></SectionsGridview>
    </div>
  );
};
