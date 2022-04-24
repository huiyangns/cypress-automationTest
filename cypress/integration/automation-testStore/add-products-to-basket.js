import HomePage_POM from "../../support/POM/automationTestStore/HomePage_POM"
import HairCare_POM from "../../support/POM/automationTestStore/HairCare_POM"

///<reference types="cypress"/>

describe("add some products to the basket",() => {
    const homePage_PO = new HomePage_POM()
    const hairCare_PO = new HairCare_POM()

    before(() => {
        cy.fixture("products").then((data) => {
             globalThis.data = data
        }) 
    })
    beforeEach(() => {
        homePage_PO.visitHomePage()
        homePage_PO.click_HairCare_Link()
    })
    it("add 2th, 3th and 4th products to basket",() => {
         hairCare_PO.addSomeProductsToBasket()
    })
})