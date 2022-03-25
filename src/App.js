import { Formik, Form, Field, ErrorMessage } from "formik"
import TextInput from "./components/TextInput"
import Checkbox from "./components/Checkbox"
import Radio from "./components/Radio"
import Select from "./components/Select"

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

  if (!values.radio) {
    errors.radio = "requerido"
  }

  return errors
}

const App = () => {
  return (
    <Formik
      initialValues={{ name: "", lastname: "", email: "", radio: "" }}
      validate={validate}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <br />
        <TextInput name="name" label="Nombre" />
        <br />
        <TextInput name="lastname" label="Apellido" />
        <br />
        <TextInput name="email" label="Email" />
        <br />
        <Checkbox name="accept"> aceptar terminos y condiciones </Checkbox>
        <br />
        <Select name="genero" label="Genero">
          <option value="">Seleccione Genero</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </Select>
        <Radio name="radio" value="seleccion1" label="seleccion 1"></Radio>
        <Radio name="radio" value="seleccion2" label="seleccion 2"></Radio>
        <Radio name="radio" value="seleccion3" label="seleccion 3"></Radio>
        <ErrorMessage name="radio" />
        <button type="submit"> enviar</button>
      </Form>
    </Formik>
  )
}

export default App
