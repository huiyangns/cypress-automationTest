///<reference types="cypress"/>

describe("test navigation between diff links",() => {
    it("switch pages by click",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#contact-us").invoke("removeAttr", "target").click()
        cy.url().should("contain","contactus")

        //switch between home page and contactus page
        cy.go("back")
        cy.reload()
        cy.url().should("contain","http://www.webdriveruniversity.com/")
        cy.go("forward")
        cy.url().should("contain","contactus")

        //open login page
        cy.go("back")
        cy.get("#login-portal").invoke("removeAttr", "target").click()
        cy.url().should("contain","Login-Portal")

    }) 
})