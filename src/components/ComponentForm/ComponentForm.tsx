import { useForm } from "../../hooks/useForm"


export const ComponentForm = () => {

    const {values, handleChange, resetForm} = useForm({
        email: '',
        nombre: '',
        edad:0,
    })

    const {email, nombre, edad} = values;

    const handleSubmitForm = () => {
        console.log(values)
    }

    const handleResetForm = () => {
        resetForm();
    }

    

  return (
    <div>
        <div>
            <h2>Formulario</h2>
        </div>
        <div style={{display:"flex", flexDirection:"column", gap:"2vh"}}>
            <input value = {email} name='email' onChange = {handleChange} type = "email" placeholder="example@example.com"></input>
            <input value = {nombre} name='nombre' onChange = {handleChange} type = "text" placeholder="nombre"></input>
            <input value = {edad} name="edad" onChange = {handleChange} type = "number" placeholder="edad"></input>
        </div>
        <div>
            <button onClick = {handleSubmitForm}>Enviar</button>
            <button onClick = {handleResetForm}>Reset</button>
        </div>
    </div>
  )
}
