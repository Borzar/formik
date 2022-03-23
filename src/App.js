import { useFormik } from "formik"

const validate = (values) => {
  const errors = {}

  if (!values.name) {
    errors.name = "requerido"
  } else if (values.name.length < 5) {
    errors.name = "requiere mas caracteres"
  }
  if (!values.lastname) {
    errors.lastname = "requerido"
  } else if (values.lastname.length < 5) {
    errors.lastname = "requiere mas caracteres"
  }
  return errors
}

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label> Nombre </label>
      <input {...formik.getFieldProps("name")} type="text" />
      <br />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label> Apellido</label>
      <input {...formik.getFieldProps("lastname")} type="text" />
      {formik.touched.lastname && formik.errors.lastname ? (
        <div>{formik.errors.lastname}</div>
      ) : null}
      <br />
      <label>Email</label>
      <input {...formik.getFieldProps("email")} type="email" />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button type="submit"> enviar</button>
    </form>
  )
}

export default App
