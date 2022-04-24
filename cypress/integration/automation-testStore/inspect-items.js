///<reference types="cypress"/>

describe("inspect some items in automation-test-store", () => {
    it("inspect first item by default selector",() => {
        cy.visit("https://www.automationteststore.com/") 
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname').click()
    }) 

    it("inspect first item by its header text",() => {
        cy.visit("https://www.automationteststore.com/") 
        cy.get('.prdocutname').contains("Skinsheen Bronzer Stick").click()
    }) 

    it.only("inspect first item by using index",() => {
        cy.visit("https://www.automationteststore.com/") 
        cy.get('.fixed_wrapper').find(".prdocutname").eq(0).click()
    }) 
})