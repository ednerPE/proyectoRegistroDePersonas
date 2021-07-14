import axios from 'axios'
import React,{ useState } from 'react'

export default function Formulario() {

   const [nombre, setNombre]=useState()
   const [apellido,setApellido]= useState('')
   const [salario,setSalario]= useState('')
    

   const registrar=async(e)=>{
       e.preventDefault()
       const nuevoEmpledo={nombre,apellido,salario}
       const respuesta=await axios.post('http://localhost:4000/api', nuevoEmpledo)
       const mensaje=respuesta.data.mensaje
       alert(mensaje)
   }

    return (
        <div className="container col-md-3 mt-4">
            <form onSubmit={registrar}>
  <div className="mb-3">
    <label htmlFor="Nombre" className="form-label">Ingrese su Nombre</label>
    <input type="text" className="form-control" required placeholder="Nombre" onChange=
    {e=>setNombre(e.target.value)}/>
</div>
<div className="mb-3">
    <label htmlFor="apellido" className="form-label">Ingrese su Apellido</label>
    <input type="text" className="form-control" required placeholder="apellido"  onChange=
    {e=>setApellido(e.target.value)}/>
</div>
<div className="mb-3">
    <label htmlFor="salario" className="form-label">Ingrese su salario</label>
    <input type="text" className="form-control" required placeholder="salario"  onChange=
    {e=>setSalario(e.target.value)}/>
</div>


  <button type="submit" className="btn btn-primary">Guardar</button>

 

        </form>

        </div>
    )
}
