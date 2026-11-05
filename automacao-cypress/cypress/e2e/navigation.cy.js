import userData from "../fixtures/userData.json";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";

const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

const modules = [
  { name: "Admin", path: "/admin" },
  { name: "PIM", path: "/pim" },
  { name: "Leave", path: "/leave" },
  { name: "Time", path: "/time" },
  { name: "Performance", path: "/performance" },
];

describe("Navigation Orange HRM Tests", () => {
  beforeEach(() => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
  });

  modules.forEach(({ name, path }) => {
    it(`navigation - ${name}`, () => {
      menuPage.accessModule(name);
      menuPage.checkModuleUrl(path);
    });
  });
});