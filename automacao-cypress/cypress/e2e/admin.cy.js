import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import AdminPage from '../pages/adminPage.js'

const Chance = require('chance')

const chance = new Chance()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const adminPage = new AdminPage()

describe('Admin Orange HRM Tests', () => {
  beforeEach(() => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    cy.intercept('GET', '**/api/v2/admin/users*').as('getUsers')
    menuPage.accessAdmin()
    cy.wait('@getUsers')
  })

  it('CT-014: admin - search existing user', () => {
    adminPage.searchUser(userData.userSuccess.username)
    cy.wait('@getUsers')
    adminPage.checkUserFound(userData.userSuccess.username)
  })

  it('CT-015: admin - search non-existent user', () => {
    adminPage.searchUser(chance.hash({ length: 12 }))
    cy.wait('@getUsers')
    adminPage.checkNoRecords()
  })
})