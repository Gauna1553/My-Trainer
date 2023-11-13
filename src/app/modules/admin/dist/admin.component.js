"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminComponent = void 0;
var core_1 = require("@angular/core");
var AdminComponent = /** @class */ (function () {
    function AdminComponent(usuariosService) {
        this.usuariosService = usuariosService;
        this.database = '';
        this.submitted = false;
        //Creo un arreglo para guardar la información que despues se recorre para
        //armar la tabla
        this.usuariosCollecion = [];
        this.editar = false;
        this.idEditar = '';
        //Defino la visibilidad del pop up como falsa de forma defualt
        this.usuariosDialog = false;
        //Defino la visibilidad del loading
        this.loading = false;
        this.usuarioss = {
            uid: '',
            nombre: '',
            apellido: '',
            email: '',
            contrasena: '',
            rol: '',
            token: '',
            sexo: 0,
            edad: 0,
            altura: 0,
            peso: 0
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*Llamamos a la función obtenerUsuario y le enviamos los nuevos valores
        del formulario producto(estos se guardaran en la colección) */
        this.usuariosService.obtenerUsuario().subscribe(function (usuarios) {
            _this.usuariosCollecion = usuarios;
            //Es una colección para así poder seleccionar a más de un elemento
        });
        this.roles = [
            { name: 'Usuario', code: 'User' },
            { name: 'Admin', code: 'Admin' },
        ];
    };
    //Esta funcion abre el popup al hacer que su visibilidad sea verdadera
    AdminComponent.prototype.openNew = function () {
        this.submitted = false;
        this.usuariosDialog = true;
    };
    //Esta funcion cierra el popup al hacer que su visibilidad sea falsa y resetea los inputs
    AdminComponent.prototype.hideDialog = function () {
        this.usuariosDialog = false;
        this.usuarios.nombre = '';
        this.usuarios.email = '';
        this.usuarios.rol = '';
    };
    AdminComponent.prototype.crearUsuario = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editar && this.usuarios.nombre && this.usuarios.email && this.usuarios.rol) {
            this.loading = true;
            var resultado = this.usuariosService.crearUsuario(this.usuarioss).then(function (resp) {
                _this.loading = false;
            })["catch"](function (error) {
                _this.loading = false;
                alert('No se puedo crear un usuario');
            });
        }
        else {
            if (this.usuarioss.nombre && this.usuarioss.email && this.usuarioss.rol) {
                this.usuarioss.uid = this.idEditar;
                this.usuariosService.modificarUsuarios(this.idEditar, this.usuarioss).then(function (resul) {
                    _this.loading = false;
                    _this.editar = false;
                    _this.usuariosDialog = false;
                });
            }
        }
        /*
      Esta funcion lo que hace es crear ejercicios y almacenarlos en la base de datos de firebase.
      Los datos son almacenados en la constante resultado, y si se logro guardar correctamente, se muestra el primer mensaje.
      En caso de no haberse guardado, se almacena el error y se muestra el segundo mensaje.
      */
    };
    AdminComponent.prototype.mostrarBorrar = function (usuarioSeleccionado) {
        this.usuarioSeleccionado = usuarioSeleccionado;
        if (confirm("¿Desea eliminar el ejercicio?") === true) {
            this.borrarUsuario();
        }
        else {
            alert("No se pudo borrar el usuario deseado");
        }
    };
    /*
      Esta función lo que hace es a traves de un confirm, preguntarle al usuario si quiere eliminar un ejercicio.
      En caso que toque el boton de aceptar, llama a la función de borrarEjercicio(). En caso contrario, aparece el segundo cartel.
    */
    AdminComponent.prototype.borrarUsuario = function () {
        this.usuariosService.eliminarUsuarios(this.usuarioSeleccionado.uid)
            .then(function (respuesta) {
            alert("El usuario se elimino correctamente");
        })["catch"](function (error) {
            alert("No se pudo eliminar al usuario");
        });
        /*
        Esta funcion se encargar de tomar la ID de los ejercicios almacenados en la BD, y por medio de un boton
        al cual se le asigna esta función, se borrara el ejercicio deseado.
        Si se pudo borrar correctamente, se muestra el primer mensaje, en caso contrario, se mostrara el segundo.
        */
    };
    //Editar usuario -> se llama al boton para el pop up
    AdminComponent.prototype.editarUsuario = function (usuarioSeleccionado) {
        this.usuarioSeleccionado = usuarioSeleccionado;
        if (confirm("¿Desea editar el usuario?") === true) {
            this.editar = true;
            this.idEditar = usuarioSeleccionado.uid;
            this.openNew();
        }
        else {
            alert("No se pudo modificar los datos del usuario");
        }
        /*
        Esta función lo que hace es seguir el mismo ejemplo de mostrarBorrar().
        La principal diferencia es que ahora abre una ventana modal con los campos del ejercicio actuales, para así poder editarlos.
      */
    };
    AdminComponent.prototype.editUsuario = function () {
        var datos = {
            uid: this.usuarios.uid,
            nombre: this.usuarios.nombre,
            apellido: this.usuarios.apellido,
            email: this.usuarios.email,
            contrasena: this.usuarios.contrasena,
            rol: this.usuarios.rol,
            token: this.usuarios.token,
            sexo: this.usuarios.sexo,
            edad: this.usuarios.edad,
            altura: this.usuarios.altura,
            peso: this.usuarios.peso
        };
        this.usuariosService.modificarUsuarios(this.usuarioSeleccionado.uid, datos)
            .then(function (usuarios) {
            alert("El ejercicio se modifico con exito");
        })["catch"](function (error) {
            alert("No se pudo modificar los datos del usuario: (\n" + error);
        });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'app-admin',
            templateUrl: './admin.component.html',
            styleUrls: ['./admin.component.css']
        })
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
