const PruebaCtrl={ }
    PruebaCtrl.obtener=(req,res)=>{
        res.send('funcionando')
    }
    PruebaCtrl.crear=(req,res)=>{
        const{nombre,apellido,salario}=req.body
        const nuevoRegistro = new Empleado({
            nombre,
            apellido,
            salario
        })
        await nuevoRegistro.save()
            res.json({
                mensaje:'Empleado guardado'
            })
}


PruebaCtrl.actualizar=(req,res)=>{
    res.send('metodo para actualizar')
}
PruebaCtrl.eliminar=(req,res)=>{
    res.send('metodo eliminar')
}

module.exports=PruebaCtrl