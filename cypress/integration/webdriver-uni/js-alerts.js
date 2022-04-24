///<reference types="cypress"/>

describe("test alerts and confirm via webdriver-uni", () => {
  it("validate the text in the alert box", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.on("window:alert", (str) => {
      expect(str).to.contain("I am an alert box!");
    });
    cy.get("#button1").click();
  });

  it("validate text when click on OK button on confirm box", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.on("window:confirm", (str) => {
      return true;
    });
    cy.get("#button4").click();
    cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
  });

  it("validate text when click on Cancel button on confirm box", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    cy.on("window:confirm", (str) => {
      return false;
    });
    cy.get("#button4").click();
    cy.get("#confirm-alert-text").should("contain", "You pressed Cancel!");
  });

  it("validate text when click on OK button on confirm box via stub", () => {
    cy.visit("http://www.webdriveruniversity.com/");
    cy.get("#popup-alerts").invoke("removeAttr", "target").click();

    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        return true;
      })
      .then(() => {
        cy.get("#confirm-alert-text").should("contain", "You pressed OK!");
      });
  });
});
