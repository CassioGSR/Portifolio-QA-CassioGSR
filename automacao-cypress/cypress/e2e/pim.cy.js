import userData from '../fixtures/userData.json'
import DashboardPage from '../pages/dashboardPage.js'
import PimPage from '../pages/pimPage.js'

const Chance = require('chance')

const chance = new Chance()
const dashboardPage = new DashboardPage()
const pimPage = new PimPage()

describe('PIM Orange HRM Tests', () => {
  beforeEach(() => {
    cy.login(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    cy.intercept('GET', '**/api/v2/pim/employees/*/personal-details').as('personalDetails')
  })

  it('pim - add employee', () => {
    pimPage.addEmployee(chance.first(), chance.last(), chance.hash({ length: 8 }))
    cy.wait('@personalDetails')
    pimPage.checkEmployeeCreated()
  })

  it('pim - search employee by id', () => {
    const firstName = chance.first()
    const lastName = chance.last()
    const employeeId = chance.hash({ length: 8 })

    pimPage.addEmployee(firstName, lastName, employeeId)
    cy.wait('@personalDetails')
    pimPage.accessEmployeeList()
    pimPage.searchByEmployeeId(employeeId)
    pimPage.checkEmployeeInList(firstName, lastName)
  })
})