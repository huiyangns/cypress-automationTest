///<reference types="cypress"/>

describe('test datepicker', () => { 
    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/") 
        cy.get("#datepicker").invoke("removeAttr", "target").click()
    })

    it("set correct year, month and date on datePicker",() => {
         let date = new Date()
         date.setDate(date.getDate() - 364)

         const futureYear = date.getFullYear()
         const futureMonth = date.toLocaleString("en-GB", {month:"long"})
         const futureDay = date.getDate()

         cy.get("#datepicker").click()
         let flag = true
         function setYearAndMonth(){
             cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(($ele) => {
                 
                 if (Number($ele.text().split(" ")[1]) > Number(futureYear)){
                     flag = false
                    if(!$ele.text().includes(futureYear)){
                        cy.get(".datepicker-dropdown").find(".prev").first().click()
                        setYearAndMonth()
                      }
                 }else if (Number($ele.text().split(" ")[1]) < Number(futureYear)) {
                    if(!$ele.text().includes(futureYear)){
                        cy.get(".datepicker-dropdown").find(".next").first().click()
                        setYearAndMonth()
                      }
                 }
                  
             }).then(() => {
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(($ele) => {
                    if(flag &&!$ele.text().includes(futureMonth)){
                      cy.get(".datepicker-dropdown").find(".next").first().click()
                      setYearAndMonth()
                    }else if (!flag &&!$ele.text().includes(futureMonth)){
                        cy.get(".datepicker-dropdown").find(".prev").first().click()
                        setYearAndMonth()
                    }
             })
         })
        }

        function setDate(){
            cy.get("td[class='day']").contains(futureDay).click()
        }

        setYearAndMonth()
        setDate()
    })
 })