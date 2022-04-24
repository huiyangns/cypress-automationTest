// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
Cypress.Commands.add("selectProduct",(pName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($ele, index, $list) => {
        if($ele.text().includes("Curls to straight Shampoo")){
            cy.wrap($ele).click()
        }
   })
})

Cypress.Commands.add("addProductToBasket",(pName) => {
    cy.get(".fixed_wrapper .prdocutname").each(($ele, index, $list) => {
        if($ele.text() === pName){
            cy.get(".productcart").eq(index).click()
        }
   })
})

Cypress.Commands.add("webdriverUni_contactUs",(first_name, last_name, email, message, selector, textVerified) => {
    cy.get("input[name='first_name']").type(first_name)
         cy.get("input[name='last_name']").type(last_name)
         email.trim() && cy.get("input[name='email']").type(email)
         cy.get("textarea[name='message']").type(message)
         cy.get("input[type='submit']").click()
         cy.get(selector).contains(textVerified) 
})

Cypress.Commands.add("nav_to_webdriveruni_contactUs",() => {
    cy.visit("/" + "/Dropdown-Checkboxes-RadioButtons/index.html") 
})
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';