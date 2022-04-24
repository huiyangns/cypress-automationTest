export default class Contact_Us_POM {
  submit_form(first_name, last_name, email, message, selector, textVerified) {
    cy.get("input[name='first_name']").type(first_name);
    cy.get("input[name='last_name']").type(last_name);
    email.trim() && cy.get("input[name='email']").type(email);
    cy.get("textarea[name='message']").type(message);
    cy.get("input[type='submit']").click();
    cy.get(selector).contains(textVerified, {timeout:60000});
  }
}
