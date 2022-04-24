///<reference types="cypress"/>

describe("test upload file via webdriver-uni",() => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#file-upload").invoke("removeAttr", "target").click()
    })

    it("upload with a file",() => {
         cy.fixture("laptop.png", "base64").then((fileContent) => {
              cy.get("#myFile").attachFile(
                  {
                      fileContent,
                      fileName:"laptop.png",
                      mimeType:"image/png"
                  },
                  {
                      uploadType:"input"
                  }
              )
         })

         cy.get("#submit-button").click()
    }) 

    it("upload without a file",() => {
        const stub =  cy.stub()
        cy.on("window:alert", stub)

        cy.get("#submit-button").click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith("You need to select a file to upload!")
        })
   }) 
})