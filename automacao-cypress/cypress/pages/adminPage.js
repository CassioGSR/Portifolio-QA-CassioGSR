class AdminPage {
  selectorsList() {
    const selectors = {
      inputGroup: ".oxd-input-group",
      searchButton: "[type='submit']",
      tableBody: ".oxd-table-body",
    };
    return selectors;
  }

  searchUser(username) {
    cy.contains("label", "Username")
      .closest(this.selectorsList().inputGroup)
      .find("input")
      .type(username);
    cy.get(this.selectorsList().searchButton).click();
  }

  checkUserFound(username) {
    cy.get(this.selectorsList().tableBody).should("contain", username);
  }

  checkNoRecords() {
    cy.contains("No Records Found").should("be.visible");
  }
}
export default AdminPage;
