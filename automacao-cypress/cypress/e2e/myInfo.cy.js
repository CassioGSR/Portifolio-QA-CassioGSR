import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')
const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance()

describe('Orange HRM Tests', () => {

  it('User info update - success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails( chance.first(), chance.name({ middle: true }),chance.last(), )
    myInfoPage.fillEmployeeDetails('employeeId', 'otherId', 'driversLicense')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
})