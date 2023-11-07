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
