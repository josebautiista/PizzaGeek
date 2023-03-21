export class Cliente{
    constructor(id, nombre, celular, correo, password, direccion){
        this._id = id
        this._nombre = nombre
        this._celular = celular
        this._correo = correo
        this._password = password
        this._direccion = direccion
    }

    agregarProductos(){

    }

    obtenerDatosCliente(){
        return this._id + this._nombre + this._celular + this._correo + this._password + this._direccion
    }

    hacerCompra(){

    }

    eliminarDelCarrito(){

    }

    crearCuenta(){

    }

    cerrarSesion(){

    }

    calificarProductos(){

    }

    editarInformacion(){

    }

    añadirListaDeseo(){

    }

    modificaciones(){
        
    }
}