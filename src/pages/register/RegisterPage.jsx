import styles from './registerPage.module.css'

const {container, containerLogin, imgLogin, containerForm, register} = styles
export const RegisterPage = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    const password2 = e.target.password2.value
    const name = e.target.firstName.value
    const lastName = e.target.lastName.value

    console.log({email, password, password2, name, lastName})
  }

  return (
    <>
      <div className={container}>
        <div className={containerLogin}>
          <div className={containerForm}>
            <h2>Registrar</h2>
            <hr />
            <form onSubmit={onSubmit}>
              <label htmlFor='email'>Nombre</label>
              <input
                type='text'
                name='firstName'
                id='name'
                placeholder='Primer Nombre'
              />
              <label htmlFor='email'>Apellido</label>
              <input
                type='text'
                name='lastName'
                id='lastName'
                placeholder='Primer Apellido'
              />
              <label htmlFor='email'>Correo electronico</label>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='fabianp@logistics.cl'
              />
              <label htmlFor='password'>Contraseña</label>
              <input
                type='password'
                name='password'
                id='password'
                placeholder='Contraseña'
              />
              <label htmlFor='password'>Repetir Contraseña</label>
              <input
                type='password2'
                name='password2'
                id='password2'
                placeholder='Repetir Contraseña'
              />
              <button type='submit'>Registrar</button>
            </form>
            <div className={register}>
              Ya tienes cuenta tienes cuenta? <a href=''>Inicia sesion</a>
            </div>
          </div>
          <div className={imgLogin}>
            <h3>Logitech</h3>
          </div>
        </div>
      </div>
    </>
  )
}
