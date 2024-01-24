describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should add', () => {
    cy.get('#number1').click();
    // cy.get('.display').should('contain', '1')
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    // cy.get('.display').should('contain', '1')
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2')
  })

  it('should subtract', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click()
    cy.get('#number1').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '1')
  })

  it('should multiply', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click()
    cy.get('#number4').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '8')
  })

  it('should divide', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click()
    cy.get('#number3').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')

  })

  it('should have arithmetical operations update the display with the result of the operation', () =>{
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#operator-divide').click()
    cy.get('#number1').click();
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '99')
  })

  it('should concatenate multiple button clicks', () => {
    cy.get('#number3').click()
    cy.get('#number8').click()
    cy.get('#number7').click()
    cy.get('.display').should('contain', '387')
  })

  it('should chain together multiple operations', () => {
    cy.get('#number8').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-subtract').click()
    cy.get('#number1').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3')
  })

  it('can have positive output', () => {
    cy.get('#number8').click()
    cy.get('#operator-subtract').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '6')
  })

  it('can have negative output', () => {
    cy.get('#number1').click()
    cy.get('#operator-subtract').click()
    cy.get('#number7').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '-6')

  })

  it('can output decimal', () => {
    cy.get('#number5').click()
    cy.get('#operator-divide').click()
    cy.get('#number2').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '2.5')

  })

  it('can output very large numbers', () => {
    cy.get('#number2').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-multiply').click()
    cy.get('#number4').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', '3.2e+23')
  })

  it('can divide by zero', () => {
    cy.get('#number4').click()
    cy.get('#operator-divide').click()
    cy.get('#number0').click()
    cy.get('#operator-equals').click()
    cy.get('.display').should('contain', 'Error')
  })

})