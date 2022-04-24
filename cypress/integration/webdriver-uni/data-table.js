///<reference types="cypress"/>

describe("testing the sum of ages",() => {
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#data-table").invoke("removeAttr", "target").click()
    })

    it("validate the sum of age is 322",() => {
        let sumOfAge = 0;
         cy.get("#thumbnail-1 td").each(($ele, index, $list) => {
              if(Number($ele.text())){
                  sumOfAge += Number($ele.text())
              }
         }).then(() => {
             expect(sumOfAge).to.eq(322) 
         })
    }) 

    it.only("validate the age of person with specific lastname",() => {
        const targetLastName = "Woods"
        cy.get("#thumbnail-1 td:nth-child(2)").each(($ele, index, $list) => {
             if($ele.text() === targetLastName){
                 cy.wrap($ele).next().then(($age) => {
                    expect($age.text()).to.eq("80")
                 })
                 
             }
        })
    })
})