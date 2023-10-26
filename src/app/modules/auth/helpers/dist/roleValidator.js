"use strict";
exports.__esModule = true;
exports.RoleValidator = void 0;
var RoleValidator = /** @class */ (function () {
    function RoleValidator() {
    }
    RoleValidator.prototype.isVistante = function (usuario) {
        return usuario.rol === 'Visitante';
    };
    return RoleValidator;
}());
exports.RoleValidator = RoleValidator;
