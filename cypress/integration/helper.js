const getText = () => {
  const text = cy.get(':nth-child(1) > .sc-fzokOt > .cPQfFV').text();
  return text;
}

module.exports = {
  getText,
}
