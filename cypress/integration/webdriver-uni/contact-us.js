import HomePage_POM from "../../support/POM/webdriverUni/HomePage_POM"
import Contact_Us_POM from "../../support/POM/webdriverUni/Contact_Us_POM"
///<reference types="cypress"/>

describe("test contact-us page in webdriver-uni",() => {
    const homePage_PO = new HomePage_POM()
    const contact_Us_PO = new Contact_Us_POM()

    before(() => {
        cy.fixture("example").then((data) => {
             globalThis.data = data
        })
    })
    beforeEach(() => {
        homePage_PO.navToContactUsPage()
    })
    it("should be able to submit form successfully",() => {
        //validate whether charset present in document
        cy.document().should("have.property","charset").and("eq","UTF-8")
        //validate page title
        cy.title().should("include","WebDriver | Contact Us")
        //validate url of the page
        cy.url().should("include","contactus")

        contact_Us_PO.submit_form(Cypress.env("first_name"), data.last_name, data.email, "hello world", '#contact_reply > h1', "Thank You for your Message!2")
    }) 

    it("should not be able to submit form as all fields required",() => {
        contact_Us_PO.submit_form(data.first_name, data.last_name, " ", "hello world", "body", "Error: all fields are required")
    }) 
})