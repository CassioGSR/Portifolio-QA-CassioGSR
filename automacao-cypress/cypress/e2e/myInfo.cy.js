import userData from "../fixtures/userData.json";
import DashboardPage from "../pages/dashboardPage.js";
import MenuPage from "../pages/menuPage.js";
import MyInfoPage from "../pages/myInfoPage.js";

const Chance = require("chance");
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();
const chance = new Chance();

describe("Orange HRM Tests", () => {
  beforeEach(() => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password);
    dashboardPage.checkDashboardPage();
    cy.intercept("GET", "**/api/v2/pim/employees/*/personal-details").as(
      "personalDetails",
    );
    menuPage.accessMyInfo();
    myInfoPage.checkMyInfoPage();
  });
  it("CT-006: User info update - success", () => {
    myInfoPage.fillPersonalDetails(
      chance.first(),
      chance.first(),
      chance.last(),
    );
    myInfoPage.fillEmployeeDetails(
      chance.hash({ length: 8 }),
      chance.hash({ length: 10 }),
      chance.hash({ length: 12 }),
    );
    myInfoPage.fillStatus("Brazilian", "Single");
    myInfoPage.saveForm();
  });
  it("CT-007: User info update - first name required", () => {
    myInfoPage.clearFirstName();
    myInfoPage.submitForm();
    myInfoPage.checkRequiredError();
  });
  it("CT-008: User info update - data persists after reload", () => {
    const firstName = chance.first();
    myInfoPage.fillPersonalDetails(firstName, chance.first(), chance.last());
    myInfoPage.saveForm();
    cy.reload();
    cy.wait("@personalDetails");
    myInfoPage.checkFirstName(firstName);
  });
});