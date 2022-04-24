///<reference types="cypress"/>

describe("iterate over hair care products",() => {
    beforeEach(() => {
        cy.visit("https://automationteststore.com/") 
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("print out each product name",() => {
        cy.get(".fixed_wrapper .prdocutname").each(($ele, index, $list) => {
             cy.log($ele.text())
        })
    }) 

    it("click the specific product by its name",() => {
        /* cy.get(".fixed_wrapper .prdocutname").each(($ele, index, $list) => {
             if($ele.text().includes("Curls to straight Shampoo")){
                 cy.wrap($ele).click()
             }
        }) */
        cy.selectProduct("Curls to straight Shampoo")
    }) 
})