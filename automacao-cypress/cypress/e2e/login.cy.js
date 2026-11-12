import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()

describe('Login Orange HRM Tests', () => {
  it('CT-002: login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  it('CT-001: login - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })
  it('CT-003: login - fail with wrong password', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userWrongPassword.username, userData.userWrongPassword.password)
  loginPage.checkAccessInvalid()
})
it('CT-004: login - fail with empty fields', () => {
  loginPage.accessLoginPage()
  loginPage.submitEmptyForm()
  loginPage.checkRequiredFields()
})
it('CT-005: logout - success', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
  menuPage.logout()
  loginPage.checkLoginPage()
})
})