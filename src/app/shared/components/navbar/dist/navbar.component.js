"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = require("@angular/core");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.mostrar = false;
        this.usuarios = {
            uid: '',
            nombre: '',
            email: '',
            contrasena: '',
            apellido: '',
            rol: '',
            sexo: 0,
            altura: 0,
            peso: 0,
            edad: 0
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: '/inicio',
                mostrarDatos: function () {
                    return true;
                }
            },
            {
                label: 'Ejercicios',
                icon: 'pi pi-fw pi-pencil',
                routerLink: '/ejercicios'
            },
            {
                label: 'Rutinas',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/rutinas'
            },
            {
                label: 'Perfil',
                icon: 'pi pi-user',
                routerLink: '/perfil'
            },
        ];
    };
    NavbarComponent.prototype.mostrarDatos = function (usuarios) {
        if (usuarios.rol === 'visitante') {
            this.mostrar = true;
        }
    };
    ;
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
;
