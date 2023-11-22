"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EjerciciosComponent = void 0;
var core_1 = require("@angular/core");
var EjerciciosComponent = /** @class */ (function () {
    function EjerciciosComponent(servicioEjercicios) {
        this.servicioEjercicios = servicioEjercicios;
        this.database = '';
        this.submitted = false;
        // Creo un arreglo para guardar la informacion que despues se recorre para armar la tabla
        this.ejerciciosColeccion = [];
        this.editar = false;
        this.idEditar = "";
        //Defino la visibilidad del popup como falsa de forma default
        this.ejerciciosDialog = false;
        //Defino la visibilidad del loading
        this.loading = false;
        this.ejercicioss = {
            nombre: '',
            grupomuscular: '',
            rangorep: '',
            idEjercicio: ''
        };
    }
    EjerciciosComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* llamamos función obtenerEjercicio y le enviamos los nuevos valores
        del formulario ejercicios (se guardan en la colección) */
        this.servicioEjercicios.obtenerEjercicio().subscribe(function (ejercicios) {
            _this.ejerciciosColeccion = ejercicios;
            //Es una coleccion para poder seleccionar a mas de un elemento
        });
    };
    //Esta funcion abre el popup al hacer que su visibilidad sea verdadera
    EjerciciosComponent.prototype.openNew = function () {
        this.submitted = false;
        this.ejerciciosDialog = true;
    };
    //Esta funcion cierra el popup al hacer que su visibilidad sea falsa y resetea los inputs
    EjerciciosComponent.prototype.hideDialog = function () {
        this.ejerciciosDialog = false;
        this.ejercicioss.nombre = '';
        this.ejercicioss.grupomuscular = '';
        this.ejercicioss.rangorep = '';
    };
    EjerciciosComponent.prototype.crearEjercicio = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editar && this.ejercicioss.nombre && this.ejercicioss.grupomuscular && this.ejercicioss.rangorep) {
            this.loading = true;
            var resultado = this.servicioEjercicios.crearEjercicio(this.ejercicioss).then(function (resp) {
                _this.loading = false;
                alert("Se creo correctamente el ejercicio"); //si se pudo almancenar los datos, muestra este cartel
                _this.ejerciciosDialog = false;
            })["catch"](function (error) {
                _this.loading = false;
                alert('No se pudo guardar el ejercicio'); // si hubo algun error manda a llamar esta opcion
            });
        }
        else {
            if (this.ejercicioss.nombre && this.ejercicioss.grupomuscular && this.ejercicioss.rangorep) {
                this.loading = true;
                this.ejercicioss.idEjercicio = this.idEditar;
                this.servicioEjercicios.modificarEjercicio(this.idEditar, this.ejercicioss).then(function (resul) {
                    _this.loading = false;
                    _this.editar = false;
                    _this.ejerciciosDialog = false;
                });
            }
        }
        /*
        Esta funcion lo que hace es crear ejercicios y almacenarlos en la base de datos de firebase.
        Los datos son almacenados en la constante resultado, y si se logro guardar correctamente, se muestra el primer mensaje.
        En caso de no haberse guardado, se almacena el error y se muestra el segundo mensaje.
        */
    };
    EjerciciosComponent.prototype.mostrarBorrar = function (ejercicioSeleccionado) {
        this.ejercicioSeleccionado = ejercicioSeleccionado;
        if (confirm("Desea eliminar el ejercicio?") === true) {
            this.borrarEjercicio();
        }
        else {
            alert("No se borro el ejercicio");
        }
        /*
          Esta función lo que hace es a traves de un confirm, preguntarle al usuario si quiere eliminar un ejercicio.
          En caso que toque el boton de aceptar, llama a la función de borrarEjercicio(). En caso contrario, aparece el segundo cartel.
        */
    };
    EjerciciosComponent.prototype.borrarEjercicio = function () {
        this.servicioEjercicios.eliminarEjercicios(this.ejercicioSeleccionado.idEjercicio)
            .then(function (respuesta) {
            alert("el ejercicio se eliminio correctamente");
        })["catch"](function (error) {
            alert("No se pudo eliminar el ejercicio: \n" + error);
        });
        /*
        Esta funcion se encargar de tomar la ID de los ejercicios almacenados en la BD, y por medio de un boton
        al cual se le asigna esta función, se borrara el ejercicio deseado.
        Si se pudo borrar correctamente, se muestra el primer mensaje, en caso contrario, se mostrara el segundo.
        */
    };
    //Editar ejercicio -> se llama al boton para el pop up
    EjerciciosComponent.prototype.editarEjercicio = function (ejercicioSeleccionado) {
        this.ejercicioSeleccionado = ejercicioSeleccionado;
        if (confirm("Desea editar el ejercicio?") === true) {
            this.editar = true;
            this.idEditar = ejercicioSeleccionado.idEjercicio;
            this.openNew();
        }
        else {
            alert("No se pudo modificar el ejercicio");
        }
        /*
          Esta función lo que hace es seguir el mismo ejemplo de mostrarBorrar().
          La principal diferencia es que ahora abre una ventana modal con los campos del ejercicio actuales, para así poder editarlos.
        */
    };
    EjerciciosComponent.prototype.editEjercicio = function () {
        console.log(this.ejercicios);
        var datos = {
            nombre: this.ejercicioSeleccionado.nombre,
            idEjercicio: this.ejercicioSeleccionado.idEjercicio,
            grupomuscular: this.ejercicioSeleccionado.grupomuscular,
            rangorep: this.ejercicioSeleccionado.rangorep
        };
        this.servicioEjercicios.modificarEjercicio(this.ejercicioSeleccionado.idEjercicio, datos)
            .then(function (ejercicios) {
            alert("El ejercicio se modifico con exito");
        })["catch"](function (error) {
            alert("no se pudo modificar el ejercicio: (\n" + error);
        });
    };
    EjerciciosComponent = __decorate([
        core_1.Component({
            selector: 'app-ejercicios',
            templateUrl: './ejercicios.component.html',
            styleUrls: ['./ejercicios.component.css'],
            providers: []
        })
    ], EjerciciosComponent);
    return EjerciciosComponent;
}());
exports.EjerciciosComponent = EjerciciosComponent;
