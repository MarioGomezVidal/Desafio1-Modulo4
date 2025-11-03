import { useState } from 'react'
import { Button } from 'react-bootstrap'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  function validarForm(e) {
    e.preventDefault()

    if (!email || !pass) {
      alert('Todos los campos son obligatorios.')
      return
    }

    if (pass.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    alert('✅ Inicio de sesión exitoso.')
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-3">Iniciar Sesión</h3>
      <form onSubmit={validarForm}>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <Button type="submit" variant="primary" className="w-100">
          Ingresar
        </Button>
      </form>
    </div>
  )
}



export default LoginPage;
