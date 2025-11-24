import { useState } from 'react'
import { Button } from 'react-bootstrap'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')

  function validarForm(e) {
    e.preventDefault()

    if (!email || !pass || !confirm) {
      alert('Todos los campos son obligatorios.')
      return
    }

    if (pass.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    if (pass !== confirm) {
      alert('Las contraseñas no coinciden.')
      return
    }

    alert('Registro exitoso. ¡Bienvenido!')
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-3">Registro</h3>
      <form onSubmit={validarForm}>
        <input
          className="form-control mb-2"
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="form-control mb-2"
          type="password"
          placeholder="Contraseña"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Confirmar contraseña"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button type="submit" variant="success" className="w-100">
          Registrarse
        </Button>
      </form>
    </div>
  )
}



export default RegisterPage;
