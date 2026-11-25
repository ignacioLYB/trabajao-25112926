/*import TarjetaTaller from './TarjetaTaller.jsx'

function App() {
  return (
    <main className='container py-5'>
      <h1>Catálogo de talleres</h1>
      <section className='row g-3'>
      <div className='col-md-6'>
        <TarjetaTaller titulo="Taller de fotografía"
          descripcion="Aprende técnicas básicas." />
      </div>
      <div className='col-md-6'>
        <TarjetaTaller titulo="Taller de dibujo"
          descripcion="Explora formas y colores." />
      </div>
      </section>
    </main>
  )
}

export default App */

/* import { useState } from 'react'

function App() {
  const [cantidad, setCantidad] = useState(0)
  return (
    <main className="container py-5">
      <h1>Contador de visitas</h1>
      <p>Visitas: {cantidad}</p>
      <button className="btn btn-primary"
        onClick={() => setCantidad(cantidad + 1)}>
        Registrar visita
      </button>
      <button className="btn btn-secundary"
        onClick={() => setCantidad(cantidad - 1)}>
        Eliminar Visita
      </button>
    </main>
  )
}
export default App */

/* import { useState } from 'react'
function App() {
  const [nombre, setNombre] = useState('')
  function enviar(e) {
    e.preventDefault()
    alert('Taller: ' + nombre)
  }
  return (
    <form className="container py-5" onSubmit={enviar}>
      <label className="form-label">Nombre del taller</label>
      <input className="form-control" value={nombre}
        onChange={e => setNombre(e.target.value)} />
      <button className="btn btn-primary mt-3">Enviar</button>
    </form>
  )
}
export default App */

/* import TarjetaTaller from './TarjetaTaller.jsx'

function App() {
  return (
    <main className="container py-5">
      <h1>Catálogo de talleres</h1>
      <section className="row g-3">
        <div className="col-md-6">
          <TarjetaTaller titulo="Taller de fotografía"
            descripcion="Aprende técnicas básicas." />
        </div>
        <div className="col-md-6">
          <TarjetaTaller titulo="Taller de dibujo"
            descripcion="Explora formas y colores." />
        </div>
      </section>
    </main>
  )
}

export default App */

/* import { useState } from 'react'

function App() {
  const [cantidad, setCantidad] = useState(0)
  return (
    <main className="container py-5">
      <h1>Contador de visitas</h1>
      <p>Visitas: {cantidad}</p>
      <button className="btn btn-primary"
        onClick={() => setCantidad(cantidad + 1)}>
        Registrar visita
      </button>
      <button className="btn btn-danger"
        onClick={() => setCantidad(cantidad - 1)}>
        Danger
      </button>

    </main>
  )
}
export default App */

/* import { useEffect, useState } from 'react'

function App() {
  const [ancho, setAncho] = useState(window.innerWidth)
  useEffect(() => {
    function actualizar() { setAncho(window.innerWidth) }
    window.addEventListener('resize', actualizar)
    return () => window.removeEventListener('resize', actualizar)
  }, [])
  return <main className="container py-5">
    <h1>Ancho de ventana: {ancho}px</h1>
  </main>
}
export default App */

import { useEffect, useState } from 'react'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controlador = new AbortController()
    async function cargar() {
      try {
        const r = await fetch(
          'https://jsonplaceholder.typicode.com/users',
          { signal: controlador.signal }
        )
        if (!r.ok) throw new Error('Error HTTP ' + r.status)
        setUsuarios(await r.json())
      } catch (e) {
        if (e.name !== 'AbortError') setError(e.message)
      } finally {
        if (!controlador.signal.aborted) setCargando(false)
      }
    }
    cargar()
    return () => controlador.abort()
  }, [])

  return (
    <main className="container py-5">
      <h1>Listado de usuarios</h1>
      {cargando ? <p>Cargando...</p> : error ?
        <p className="text-danger">{error}</p> :
        usuarios.map(u => <p key={u.id}>{u.name} — {u.email}</p>)}
    </main>
  )
}
export default App






