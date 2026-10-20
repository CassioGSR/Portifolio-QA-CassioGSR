class MenuPage{
    selectorsList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            performanceButton: "[href='/web/index.php/performance/viewPerformanceModule']",
            adminButton: "[href='/web/index.php/admin/viewAdminModule']"

        }
        return selectors
    }
    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click();
    }
    accessPerformance(){
        cy.get(this.selectorsList().performanceButton).click()
    }
    accessAdmin(){
        cy.get(this.selectorsList().adminButton).click()
    }
}
export default MenuPage