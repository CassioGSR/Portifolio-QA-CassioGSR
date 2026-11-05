class PimPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      inputGroup: ".oxd-input-group",
      submitButton: "[type='submit']",
      toastMessage: ".oxd-toast",
      tableCard: ".oxd-table-card",
    }
    return selectors
  }

  getFieldByLabel(labelText) {
    return cy.contains('label', labelText)
      .closest(this.selectorsList().inputGroup)
      .find('input')
  }

  accessAddEmployee() {
    cy.visit('/pim/addEmployee')
  }

  fillEmployeeName(firstName, lastName) {
    cy.get(this.selectorsList().firstNameField).type(firstName)
    cy.get(this.selectorsList().lastNameField).type(lastName)
  }

  fillEmployeeId(employeeId) {
    this.getFieldByLabel('Employee Id').clear().type(employeeId)
  }

  saveEmployee() {
    cy.get(this.selectorsList().submitButton).click()
    cy.get(this.selectorsList().toastMessage).should('contain', 'Successfully Saved')
  }

  addEmployee(firstName, lastName, employeeId) {
    this.accessAddEmployee()
    this.fillEmployeeName(firstName, lastName)
    this.fillEmployeeId(employeeId)
    this.saveEmployee()
  }

  checkEmployeeCreated() {
    cy.location('pathname').should('include', '/pim/viewPersonalDetails')
  }

  accessEmployeeList() {
    cy.visit('/pim/viewEmployeeList')
  }

  searchByEmployeeId(employeeId) {
    this.getFieldByLabel('Employee Id').type(employeeId)
    cy.get(this.selectorsList().submitButton).click()
  }

  checkEmployeeInList(firstName, lastName) {
    cy.get(this.selectorsList().tableCard)
      .should('have.length', 1)
      .and('contain', firstName)
      .and('contain', lastName)
  }
}
export default PimPage