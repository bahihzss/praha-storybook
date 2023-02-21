describe('template spec', () => {
  it('X が勝利する', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="square"]').eq(0).click()
    cy.get('[data-testid="square"]').eq(1).click()
    cy.get('[data-testid="square"]').eq(2).click()
    cy.get('[data-testid="square"]').eq(3).click()
    cy.get('[data-testid="square"]').eq(4).click()
    cy.get('[data-testid="square"]').eq(5).click()
    cy.get('[data-testid="square"]').eq(6).click()

    cy.contains('Winner: X')
  })

  it('O が勝利する with Cypress Studio', () => {
    cy.visit('http://localhost:3000')

    cy.get('.game-board > :nth-child(1) > :nth-child(1) > :nth-child(1)').click();
    cy.get('.game-board > :nth-child(1) > :nth-child(1) > :nth-child(2)').click();
    cy.get('.game-board > :nth-child(1) > :nth-child(2) > :nth-child(3)').click();
    cy.get('.game-board > :nth-child(1) > :nth-child(2) > :nth-child(2)').click();
    cy.get('.game-board > :nth-child(1) > :nth-child(3) > :nth-child(1)').click();
    cy.get('.game-board > :nth-child(1) > :nth-child(3) > :nth-child(2)').click();

    cy.contains('Winner: O')
  })

  it('引き分け', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-testid="square"]').eq(0).click()
    cy.get('[data-testid="square"]').eq(1).click()
    cy.get('[data-testid="square"]').eq(2).click()
    cy.get('[data-testid="square"]').eq(4).click()
    cy.get('[data-testid="square"]').eq(3).click()
    cy.get('[data-testid="square"]').eq(5).click()
    cy.get('[data-testid="square"]').eq(7).click()
    cy.get('[data-testid="square"]').eq(6).click()
    cy.get('[data-testid="square"]').eq(8).click()

    cy.contains('Draw!')
  })
})