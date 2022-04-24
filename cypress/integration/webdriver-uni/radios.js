///<reference types="cypress"/>

describe("test radio buttons in webdriver-uni",() => {
    before(() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click()
    })
    it("select specific radio button",() => {
        cy.get("#radio-buttons").find("input[type='radio']").eq(1).check()
    }) 

    it("check the state of  specific radio buttons",() => {
        cy.get("#radio-buttons-selected-disabled").as("radiogroup")
        cy.get("@radiogroup").find("input[value='lettuce']").should("not.be.checked")
        cy.get("@radiogroup").find("input[value='pumpkin']").should("be.checked")
        cy.get("@radiogroup").find("input[value='cabbage']").should("be.disabled")
    }) 
})