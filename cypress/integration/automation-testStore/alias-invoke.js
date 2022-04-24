///<reference types="cypress"/>
describe('using alias and invoke to count', () => { 
    //verify thumbnail num
    it('using alias to count number',() => {
        cy.visit("https://automationteststore.com/") 
        cy.get(".thumbnail").as("thumbnails")
        cy.get("@thumbnails").its("length").should("eq",16)
    })
    //verify title attr on product cart
    it('using invoke to verify title',() => {
        cy.visit("https://automationteststore.com/") 
        cy.get(".productcart").as("carts")
        cy.get("@carts").invoke("attr","title").should("contain","Cart")
    })

    it.only("calculate the sum price of sale and non-sale products",() => {
        cy.visit("https://automationteststore.com/") 
        cy.get(".thumbnail").find(".oneprice").invoke("text").as("nonSalePrices")
        cy.get(".thumbnail").find(".pricenew").invoke("text").as("SalePrices")

        let total = 0
        cy.get("@nonSalePrices").then(($prices) => {
            let nons = 0
             const priceArr = $prices.split("$")
             for(let i of priceArr){
                nons += Number(i)
             }
             cy.log("non: " + nons)
             total += nons
        })

        cy.get("@SalePrices").then(($prices) => {
            let s = 0
            const priceArr = $prices.split("$")
            for(let i of priceArr){
               s += Number(i)
            }
            cy.log("s: " + s)
            total += s
       }).then(() => {
           
           expect(total).to.eq(648.5) 
       })
    })
 })