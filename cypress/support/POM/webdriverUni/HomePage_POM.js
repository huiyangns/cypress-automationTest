export default class HomePage_POM{
    navToHomePage(){
        cy.visit(Cypress.env("webdriveruni_url"))
    }

    navToContactUsPage(){
        cy.visit(Cypress.env("webdriveruni_url") + "Contact-Us/contactus.html")
    }

    navToAutoCompletePage(){
        cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();
    }
}