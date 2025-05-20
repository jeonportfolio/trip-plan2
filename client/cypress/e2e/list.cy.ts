describe('template spec', () => {
  it('국가 필터를 선택 했을 때, 필터링 리스트가 잘 노출되어야 한다.', () => {
    cy.visit('/');
    cy.findAllByTestId('city-card').should('have.length.greaterThan',0);

    let totalCount = 0;
    cy.findAllByTestId('city-card').its('length').then(count => {
      totalCount = count;

      cy.findByText("국내").click();
      cy.findAllByTestId('city-card').should(
          'have.length.lessThan', 
          totalCount,
      );
    });
    
    //국가 필터를 선택한다.
    
    cy.findByText('전체').click();
    cy.findAllByTestId('city-card').should('have.length.gt',1);
    cy.findByRole("textbox").type('서울');
    cy.findAllByTestId('city-card').should('have.length', 1);
  });
});