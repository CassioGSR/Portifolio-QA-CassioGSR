import userData from "../fixtures/userData.json";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";

const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();

const modules = [
  { id: 'CT-009', name: "Admin", path: "/admin" },
  { id: 'CT-010', name: "PIM", path: "/pim" },
  { id: 'CT-011', name: "Leave", path: "/leave" },
  { id: 'CT-012', name: "Time", path: "/time" },
  { id: 'CT-013', name: "Performance", path: "/performance" },
];

describe("Navigation Orange HRM Tests", () => {
  beforeEach(() => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
  });

  modules.forEach(({ id, name, path }) => {
    it(`${id}: navigation - ${name}`, () => {
      menuPage.accessModule(name);
      menuPage.checkModuleUrl(path);
    });
  });
});