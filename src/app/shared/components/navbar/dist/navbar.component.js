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
            token: '',
            sexo: 0,
            altura: 0,
            peso: 0,
            edad: 0
        };
    }
    NavbarComponent.prototype.mostrarDatos = function (mostrar) {
        if (this.usuarios.rol === 'visitante') {
            this.mostrar = true;
        }
        else {
            this.mostrar = !this.mostrar;
        }
    };
    ;
    NavbarComponent.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-home',
                routerLink: '/inicio',
                mostrar: this.mostrarDatos
            },
            {
                label: 'Ejercicios',
                icon: 'pi pi-fw pi-pencil',
                routerLink: '/ejercicios'
            },
            {
                label: 'Rutinas',
                icon: 'pi pi-fw pi-calendar',
                routerLink: '/rutinas',
                mostrar: this.mostrarDatos
            },
            {
                label: 'Perfil',
                icon: 'pi pi-user',
                routerLink: '/perfil',
                mostrar: this.mostrarDatos
            },
        ];
    };
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
