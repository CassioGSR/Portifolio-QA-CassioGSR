class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
      requiredMessage: ".oxd-input-field-error-message",
    };
    return selectors;
  }

  accessLoginPage() {
    cy.visit("/auth/login");
  }

  loginWithUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().loginButton).click();
  }

  checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialAlert).should(
      "contain",
      "Invalid credentials",
    );
  }
  submitEmptyForm() {
    cy.get(this.selectorsList().loginButton).click();
  }

  checkRequiredFields() {
    cy.get(this.selectorsList().requiredMessage)
      .should("have.length", 2)
      .and("contain", "Required");
  }

  checkLoginPage() {
    cy.location("pathname").should("include", "/auth/login");
  }
}
export default LoginPage;
