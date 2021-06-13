import { INavLinkGroup } from "@fluentui/react";

export const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Adviser",
    expandAriaLabel: "Adviser",
    collapseAriaLabel: "Adviser",
    links: [
      {
        key: "DashboardItem",
        name: "Dashboard",
        title: "Adviser - Dashboard",
        url: "/#",
      },
      {
        key: "SectionsItem",
        name: "Sections",
        title: "Adviser - Sections",
        url: "Sections#",
      },
      {
        key: "StudentsItem",
        name: "Students",
        title: "Adviser - Students",
        url: "Students#",
      },
      {
        key: "ReportItem",
        name: "Report",
        title: "Adviser - Report",
        url: "Report#",
      },
      {
        key: "FAQItem",
        name: "FAQ",
        title: "Adviser - FAQ",
        url: "FAQ#",
      },
      {
        key: "HelpItem",
        name: "Help",
        title: "Adviser - Help",
        url: "Help#",
      },
    ],
  },
  {
    name: "Admin",
    expandAriaLabel: "Admin",
    collapseAriaLabel: "Admin",
    links: [
      {
        key: "StudentsMaintenanceItem",
        name: "Students Maintenance",
        title: "Admin - Students Maintenance",
        url: "StudentsMaintenance#",
      },
      {
        key: "SectionsMaintenanceItem",
        name: "Sections Maintenance",
        title: "Admin - Sections Maintenance",
        url: "SectionsMaintenance#",
      },
      {
        key: "SubjectsMaintenanceItem",
        name: "Subjects Maintenance",
        title: "Admin - Subjects Maintenance",
        url: "SubjectsMaintenance#",
      },
      {
        key: "SchoolYearsMaintenanceItem",
        name: "School Years Maintenance",
        title: "Admin - School Years Maintenance",
        url: "SchoolYearMaintenance#",
      },
    ],
  },
  {
    name: "Account",
    expandAriaLabel: "Account",
    collapseAriaLabel: "Account",
    links: [
      {
        key: "UsersMaintenanceItem",
        name: "Users Maintenance",
        title: "Account - Users Maintenance",
        url: "UsersMaintenance#",
      },
      {
        key: "SubscriptionItem",
        name: "Subscription",
        title: "Account - Subscription",
        url: "Subscription#",
      },
    ],
  },
];
