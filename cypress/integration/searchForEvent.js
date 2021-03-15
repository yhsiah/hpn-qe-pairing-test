const getText = require('./helper');
describe("Search for an Event", () => {
  it("Finds a matching event shown in the results and can open it", () => {
    cy.visit('/');
    cy.get('.autocomplete-input-styles__Input-j5kozr-1').type('Impact');
    cy.get('.autocomplete-input-styles__Button-j5kozr-2').click();

    cy.get(':nth-child(1) > .sc-fzokOt > .cPQfFV').should('contain','Impact');
    cy.get(':nth-child(1) > .sc-fzokOt > .cPQfFV').click();
    cy.get('h1').should('have.text', getText());
  });
});
