import Citas from "../js/classes/Citas";

describe("Probar la clase de Citas", () => {

  const citas = new Citas()

  const id = Date.now()

  test("Agregar una nueva cita", () => {
    const citaObj = {
      mascota: 'hook',
      propietario: 'jose',
      telefono: '0202',
      fecha: '10-12-2020',
      hora:'10:30',
      sintomas: 'solo duerme'
    }

    citaObj.id = id

    citas.agregarCita(citaObj)

    //Prueba
    expect(citas).toMatchSnapshot()
  })

  test("Actualizar cita", () => {
    const citaActualizada = {
      id,
      mascota: 'Nuevo Nombre',
      propietario: 'jose',
      telefono: '0202',
      fecha: '10-12-2020',
      hora:'10:30',
      sintomas: 'solo duerme'
    }

    citas.editarCita(citaActualizada)

    expect(citas).toMatchSnapshot()
  })

  test("Eliminar cita", () => {
    citas.eliminarCita(id)

    expect(citas).toMatchSnapshot()
  })
})