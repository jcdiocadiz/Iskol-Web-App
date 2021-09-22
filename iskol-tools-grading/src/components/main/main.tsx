import { Switch, Route } from "react-router-dom";
import { Students } from "../adviser/students/students";
import { Dashboard } from "../adviser/dashboard/dashboard";
import { Sections } from "../adviser/sections/section";
import { Report } from "../adviser/report/report";
import { Faq } from "../adviser/faq/faq";
import { Help } from "../adviser/help/help";
import { StudentsMaintenance } from "../admin/students-maintenance/students-maintenance";
import { SectionsMaintenance } from "../admin/sections-maintenance/sections-maintenance";
import { SubjectsMaintenance } from "../admin/subjects-maintenance/subjects-maintenance";
import { SchoolYearMaintenance } from "../admin/school-year-maintenance/school-year-maintenance";
import { UsersMaintenance } from "../account/user-maintenance/user-maintenance";
import { Subscription } from "../account/subscription/subscription";
interface IRoutes {
  path: string;
  component: any;
}
const Main = () => {
  const routes: IRoutes[] = [
    {
      path: "/",
      component: Dashboard,
    },
    {
      path: "/sections",
      component: Sections,
    },
    {
      path: "/Students",
      component: Students,
    },
    {
      path: "/Report",
      component: Report,
    },
    {
      path: "/Faq",
      component: Faq,
    },
    {
      path: "/Help",
      component: Help,
    },
    {
      path: "/StudentsMaintenance",
      component: StudentsMaintenance,
    },
    {
      path: "/SectionsMaintenance",
      component: SectionsMaintenance,
    },
    {
      path: "/SubjectsMaintenance",
      component: SubjectsMaintenance,
    },
    {
      path: "/SchoolYearMaintenance",
      component: SchoolYearMaintenance,
    },
    {
      path: "/UsersMaintenance",
      component: UsersMaintenance,
    },
    {
      path: "/Subscription",
      component: Subscription,
    },
  ];
  let content: JSX.Element[] = [];
  {
    routes.map((route) => {
      content.push(
        <Route exact path={route.path} component={route.component}></Route>
      );
    });
  }
  return <Switch> {content} </Switch>;
};
export default Main;
