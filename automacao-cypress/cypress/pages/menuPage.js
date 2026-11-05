class MenuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
      adminButton: "[href='/web/index.php/admin/viewAdminModule']",
      userDropdown: ".oxd-userdropdown-tab",
      mainMenuItem: ".oxd-main-menu-item",
    };
    return selectors;
  }
  accessMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click();
  }
  accessPerformance() {
    cy.get(this.selectorsList().performanceButton).click();
  }
  accessAdmin() {
    cy.get(this.selectorsList().adminButton).click();
  }
  logout() {
    cy.get(this.selectorsList().userDropdown).click();
    cy.contains("a", "Logout").click();
  }
  accessModule(moduleName) {
  cy.contains(this.selectorsList().mainMenuItem, moduleName).click()
  }
  checkModuleUrl(path) {
  cy.location('pathname').should('include', path)
  }
}
export default MenuPage;
