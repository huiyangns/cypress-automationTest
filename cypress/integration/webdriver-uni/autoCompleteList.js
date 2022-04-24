///<reference types="cypress"/>

describe("validate autoComplete list via webdriver-uni", () => {
  it("select a specific product in the autoComplete list", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#autocomplete-textfield").invoke("removeAttr", "target").click();

    cy.get("#myInput").type("A");
    cy.get("#myInputautocomplete-list > div")
      .each(($ele, index, $list) => {
        const proName = $ele.text();
        const target = "Apple";
        if (proName === target) {
          cy.wrap($ele)
            .click()
            .then(() => {
              cy.get("#submit-button").click();
              cy.url().should("contain", target);
            });
        }
      })
      .then(() => {
        cy.get("#myInput").type("G");
        cy.get("#myInputautocomplete-list > div").each(($ele, index, $list) => {
          const proName = $ele.text();
          const target = "Grapes";
          if (proName === target) {
            cy.wrap($ele)
              .click()
              .then(() => {
                cy.get("#submit-button").click();
                cy.url().should("contain", target);
              });
          }
        });
      });
  });
});
