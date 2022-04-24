///<reference types="cypress"/>

describe("test dropdown list",() => {
    it("select specific value via dropdown list",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()

        cy.get("#dropdowm-menu-1").select('c#')
        cy.get("#dropdowm-menu-2").select('maven').should("have.value", "maven")
        cy.get("#dropdowm-menu-2").select('TestNG').contains("TestNG")
        // cy.get("#dropdowm-menu-2").select('TestNG').should("have.value", "testng")

    }) 
})