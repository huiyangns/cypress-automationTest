///<reference types="cypress"/>

describe("test iframe in webdriver-uni",() => {
    it("iframe test via jQuery",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#iframe").invoke("removeAttr", "target").click()

        cy.get("#frame").then(($iframe) => {
             const body = $iframe.contents().find("body")
             cy.wrap(body).as("ibody")
        })

        cy.get("@ibody").find("#button-find-out-more").click()
        cy.get("@ibody").find("#myModal").as("modal")
        cy.get("@modal").contains("Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as")

        cy.get("@modal").contains("Close").click()

    }) 
})