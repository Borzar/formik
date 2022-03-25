import { useField } from "formik"

const Radio = ({ label, ...props }) => {
  const [field] = useField({ ...props, type: "radio" })
  return (
    <div>
      <label>
        <input type="radio" {...field} {...props}></input>
      </label>
    </div>
  )
}

export default Radio
