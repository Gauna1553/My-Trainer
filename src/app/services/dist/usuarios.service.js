"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsuariosService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UsuariosService = /** @class */ (function () {
    function UsuariosService(database) {
        this.database = database;
        this.usuariosColeccion = database.collection('usuarios');
    }
    UsuariosService.prototype.obtenerUsuario = function () {
        //El snapshot se encarga de capturar los cambios
        //El pipe seria el canal por donde pasan los datos
        //El map se encargaria de recorrer esos datos y leerlos
        return this.usuariosColeccion.snapshotChanges().pipe(rxjs_1.map(function (action) { return action.map(function (a) { return a.payload.doc.data(); }); }));
        //Esta función se encarga de tomar los datos de los usuarios y mostrarlos.
    };
    UsuariosService.prototype.modificarUsuarios = function (uid, rol, nuevaData) {
        return this.database.collection('usuarios').doc(uid).update(nuevaData);
    };
    UsuariosService = __decorate([
        core_1.Injectable()
    ], UsuariosService);
    return UsuariosService;
}());
exports.UsuariosService = UsuariosService;
