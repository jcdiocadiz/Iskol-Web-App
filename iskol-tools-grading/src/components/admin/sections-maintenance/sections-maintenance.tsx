import "../../../shared/styles/content-page.css";
import SectionsFilter from "./sections-filter";
import SectionsGridview from "./sections-gridview";
export const SectionsMaintenance = () => {
  return (
    <div className={"content-page-container"}>
      <SectionsFilter></SectionsFilter>
      <SectionsGridview></SectionsGridview>
    </div>
  );
};
