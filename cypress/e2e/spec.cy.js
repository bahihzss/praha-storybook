describe('template spec', () => {
  it('X が勝利する', () => {
    cy.visit('http://localhost:3000')

    cy.get('[data-e2e="square"]').eq(0).click()
    cy.get('[data-e2e="square"]').eq(1).click()
    cy.get('[data-e2e="square"]').eq(2).click()
    cy.get('[data-e2e="square"]').eq(3).click()
    cy.get('[data-e2e="square"]').eq(4).click()
    cy.get('[data-e2e="square"]').eq(5).click()
    cy.get('[data-e2e="square"]').eq(6).click()

    cy.contains('Winner: X')
  })
})