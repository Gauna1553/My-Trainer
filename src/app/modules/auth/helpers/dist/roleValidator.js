"use strict";
exports.__esModule = true;
exports.RoleValidator = void 0;
var RoleValidator = /** @class */ (function () {
    function RoleValidator() {
    }
    RoleValidator.prototype.isVistante = function (usuario) {
        return usuario.rol === 'Visitante';
    };
    RoleValidator.prototype.isAdministrador = function (usuario) {
        return usuario.rol === 'Admin';
    };
    RoleValidator.prototype.isUsuario = function (usuario) {
        return usuario.rol === 'Usuario';
    };
    return RoleValidator;
}());
exports.RoleValidator = RoleValidator;
