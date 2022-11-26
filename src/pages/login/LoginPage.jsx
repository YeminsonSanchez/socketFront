import styles from './loginPage.module.css'

const {container, containerLogin, imgLogin, containerForm, register} = styles
export const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    console.log({email, password})
  }

  return (
    <>
      <div className={container}>
        <div className={containerLogin}>
          <div className={containerForm}>
            <h2>INICIAR SESION</h2>
            <hr />
            <form onSubmit={onSubmit}>
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
              <button type='submit'>Iniciar sesion</button>
            </form>
            <div className={register}>
              <a href=''>Ovidaste tu contraseña?</a> <br />
              No tienes cuenta? <a href=''>Registrate</a>
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
