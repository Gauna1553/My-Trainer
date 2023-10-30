"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoleGuard = void 0;
var core_1 = require("@angular/core");
var RoleGuard = /** @class */ (function () {
    function RoleGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var expectedRole = next.data['expectedRole']; // Obtiene el rol esperado de los datos de la ruta
        var currentUserRole = this.authService.getCurrentUserRole(); // Obtén el rol actual del usuario
        if (currentUserRole === expectedRole) {
            return true; // Permite el acceso si el rol coincide
        }
        else {
            this.router.navigate(['/unauthorized']); // Redirige a una página de acceso no autorizado si el rol no coincide
            return false;
        }
    };
    RoleGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RoleGuard);
    return RoleGuard;
}());
exports.RoleGuard = RoleGuard;
