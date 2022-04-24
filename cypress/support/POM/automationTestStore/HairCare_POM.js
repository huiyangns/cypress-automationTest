export default class HairCare_POM{
    addSomeProductsToBasket(){
        data.products.forEach((ele, index) => {
            cy.addProductToBasket(ele).then(() => {
                // debugger 
            })
       })
       cy.get('.dropdown-toggle > .fa').click()
    }
}