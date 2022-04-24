///<reference types="cypress"/>

describe("test checkbox secnario", () => {
    beforeEach(() => {
        // cy.visit("/") 
        // cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
        cy.nav_to_webdriveruni_contactUs()
    })
    it("check first checkbox",() => {
        cy.get("#checkboxes").find("input[value='option-1']").check().should("be.checked")
    }) 

    it("uncheck the third checkbox",() => {
        cy.get("#checkboxes").find("input[value='option-3']").uncheck().should("not.be.checked")
    }) 

    it("check all checkboxes",() => {
        cy.get("#checkboxes").find("input[type='checkbox']").check(["option-1","option-2","option-3"]).should("be.checked")
    }) 
})