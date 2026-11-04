class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameField: "[name='firstName']",
      lastNameField: "[name='lastName']",
      middleNameField: "[name='middleName']",
      myInfoGrid: ".orangehrm-edit-employee-content",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      genericCombobox: ".oxd-select-text--arrow",
      selectOption: ".oxd-select-option",
      inputGroup: ".oxd-input-group",
      toastMessage: ".oxd-toast",
    }
    return selectors
  }
  checkMyInfoPage() {
    cy.wait(1000)
    cy.location('pathname').should('equal', '/web/index.php/pim/viewMyDetails')
    cy.get(this.selectorsList().myInfoGrid).should('be.visible')
  }
  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameField).clear().type(firstName)
    cy.get(this.selectorsList().middleNameField).clear().type(middleName)
    cy.get(this.selectorsList().lastNameField).clear().type(lastName)
  }
  getFieldByLabel(labelText) {
  return cy.contains('label', labelText)
    .closest(this.selectorsList().inputGroup)
    .find('input')
  }
  fillEmployeeDetails(employeeId, otherId, driversLicense) {
    this.getFieldByLabel('Employee Id').clear().type(employeeId)
    this.getFieldByLabel('Other Id').clear().type(otherId)
    this.getFieldByLabel('License Number').clear().type(driversLicense)
  }
  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click()
    cy.get(this.selectorsList().toastMessage).should('contain', 'Successfully Updated')
  }
  fillStatus(nationality, maritalStatus) {
    cy.get(this.selectorsList().genericCombobox).eq(0).click()
    cy.contains(this.selectorsList().selectOption, nationality).click()
    cy.get(this.selectorsList().genericCombobox).eq(1).click()
    cy.contains(this.selectorsList().selectOption, maritalStatus).click()
  }
}
export default MyInfoPage