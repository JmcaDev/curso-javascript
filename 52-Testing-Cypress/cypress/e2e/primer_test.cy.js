/// <reference types='cypress' />

describe('Carga la pagina principal', () => {
  it('Carga la pagina principal', () => {

    cy.visit('/index.html')

    //Verificar elemento y su texto
    cy.contains('[data-cy="titulo-proyecto"]', 'Administrador de Pacientes de Veterinaria')

    //Verificar que exista
    cy.get('[data-cy="titulo-proyecto"]').should('exist')

    //Verificar que exista el elemento y contenga un texto
    cy.get('[data-cy="titulo-proyecto"]')
      .invoke('text')
      .should('equal', 'Administrador de Pacientes de Veterinaria')

      //Verificar el texto de las citas
      cy.get('[data-cy="citas-heading"]')
        .invoke('text')
        .should('equal', 'No hay Citas, comienza creando una')
  })
})