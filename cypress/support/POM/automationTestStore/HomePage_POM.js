export default class HomePage_POM{
    visitHomePage(){
        cy.visit("https://www.automationteststore.com/") 
    }

    click_HairCare_Link(){
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()
    }
}