/// <reference types='cypress' />

describe('Editar cita', () => {
  it('Campos nueva cita', () => {
    cy.visit('/index.html')

    cy.get('[data-cy="mascota-input"]')
      .type('Hook')

    cy.get('[data-cy="propietario-input"]')
      .type('Jose')
    
    cy.get('[data-cy="telefono-input"]')
      .type('0412553574')

    cy.get('[data-cy="fecha-input"]')
      .type('2026-07-19')

    cy.get('[data-cy="hora-input"]')
      .type('10:20')

    cy.get('[data-cy="sintomas-textarea"]')
      .type('solo duerme')

    cy.get('[data-cy="submit-cita"]')
      .click()

    //Verificar el texto de las citas
    cy.get('[data-cy="citas-heading"]')
      .invoke("text")
      .should("equal", "Administra tus Citas")

    cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal', 'Se agregó correctamente')

    cy.get('[data-cy="alerta"]')
      .should('have.class', 'alert-success')
  })

  it('Edita la cita creada', () => {
    cy.get('[data-cy="btn-editar"]')
      .click()

    cy.get('[data-cy="mascota-input"]')
      .clear()
      .type('Nuevo Hook')
    
    cy.get('[data-cy="submit-cita"]')
      .click()

    cy.get('[data-cy="alerta"]')
      .invoke('text')
      .should('equal', 'Guardado Correctamente')

    cy.get('[data-cy="alerta"]')
      .should('have.class', 'alert-success')
  })
})