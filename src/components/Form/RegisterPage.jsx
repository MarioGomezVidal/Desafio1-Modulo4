import { useState } from 'react'
import { Alert, Button } from 'react-bootstrap'

function RegisterPage() {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirm, setConfirm] = useState('')
  const [msg, setMsg] = useState('')
  const [error, setError] = useState(false)

  function validarForm(e) {
    e.preventDefault()

    if (!email || !pass || !confirm) {
      setMsg('Todos los campos son obligatorios.')
      setError(true)
      return
    }

    if (pass.length < 6) {
      setMsg('La contraseña debe tener al menos 6 caracteres.')
      setError(true)
      return
    }

    if (pass !== confirm) {
      setMsg('Las contraseñas no coinciden.')
      setError(true)
      return
    }

    setMsg('✅ Registro exitoso. ¡Bienvenido!')
    setError(false)
  }

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h3 className="text-center mb-3">Registro</h3>

      {msg && <Alert variant={error ? 'danger' : 'success'}>{msg}</Alert>}

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
