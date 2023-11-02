"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./modules/home/home.component");
var roles_guard_1 = require("./modules/guard/roles.guard");
var visitante_component_1 = require("./modules/visitante/visitante.component");
var routes = [
    //lazyloading
    { path: '', component: visitante_component_1.VisitanteComponent },
    { path: '', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/auth/auth.module'); }).then(function (m) { return m.AuthModule; }); } },
    { path: 'inicio', component: home_component_1.HomeComponent, canActivate: [roles_guard_1.RoleGuard] },
    {
        // SE DEJAN ESTAS RUTAS VACIAS PORQUE YA SE DECLARARON EN CADA UNO DE LOS ROUTING 
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/perfil/perfil.module'); }).then(function (m) { return m.PerfilModule; }); }
    }, {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/rutinas/rutinas.module'); }).then(function (m) { return m.RutinasModule; }); }
    }, {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/ejercicios/ejercicios.module'); }).then(function (m) { return m.EjerciciosModule; }); }
    }, {
        //path: 'crear', component: CrearrutinasComponent},{   //ruta de crearrutinas
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/concepinf/concepinf.module'); }).then(function (m) { return m.ConcepinfModule; }); }
    },
    {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/visitante/visitante.module'); }).then(function (m) { return m.VisitanteModule; }); },
        canActivate: [roles_guard_1.RoleGuard] //ruta de visitante
    },
    { path: '', loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/admin/admin.module'); }).then(function (m) { return m.AdminModule; }); }, canActivate: [roles_guard_1.RoleGuard] }, {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/concepinf/concepinf.module'); }).then(function (m) { return m.ConcepinfModule; }); }
    }, {
        path: '',
        loadChildren: function () { return Promise.resolve().then(function () { return require('./modules/calculadora-cal/calculadora-cal.module'); }).then(function (m) { return m.CalculadoraCALModule; }); }
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
