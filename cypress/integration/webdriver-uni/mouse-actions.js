///<reference types="cypress"/>

describe("test mouse actions via webdriver uni",() => {
    it("test scrolldown to view",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()

    }) 

    it("test drag and drop",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()

        cy.get("#draggable").trigger("mousedown", {which:1})
        cy.get("#droppable").trigger("mousemove").trigger("mouseup",{force:true})
    })

    it("perform dbclick on a element",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()

        cy.get("#double-click").dblclick()
    })

    it.only("perform dbclick on a element",() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#actions").scrollIntoView().invoke("removeAttr", "target").click()

        cy.get("#click-box").trigger("mousedown", {which:1}).then(($ele) => {
             expect($ele).to.have.css("background-color","rgb(0, 255, 0)")
        })
    })
})