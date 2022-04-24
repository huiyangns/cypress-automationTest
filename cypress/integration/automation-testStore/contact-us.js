///<reference types="cypress"/>
describe("test contact-us form via automation-test-store",() => {
    before(() => {
        cy.fixture("example").as("data")
    })

    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
        //output the text of the component we click 
        cy.get("a[href$='contact']").click().then(($ele) => {
             cy.log("click item text is " + $ele.text());
        })
    })

    it("should be able to submit the form successfully",() => {
        cy.get("@data").then((data) => {
            cy.get("#ContactUsFrm_first_name").type(data.first_name)
            cy.get("#ContactUsFrm_email").type(data.email)
        })
        
        cy.get("#ContactUsFrm_enquiry").type("how should I learn cypress?")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should("have.text","Your enquiry has been successfully sent to the store owner!")
    }) 

    it("validate first field in the form has the correct name",() => {
        //using chain command to verify
        cy.contains("#ContactUsFrm", "Contact Us Form").find("#field_11").contains("First name")
        //using jQuery to verify
        cy.contains("#ContactUsFrm", "Contact Us Form").then(($ele) => {
             const first_name = $ele.find("#field_11").text()
             expect(first_name).contains("First name")
        })
    }) 
})