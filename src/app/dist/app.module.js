"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
//Los modulos para los formularos de login y register
var compat_1 = require("@angular/fire/compat");
var auth_1 = require("@angular/fire/compat/auth");
var environment_1 = require("src/environment/environment"); //Es donde se encuentra alojado nuestra base de datos
//Los modulos de cada componente
var ejercicios_module_1 = require("./modules/ejercicios/ejercicios.module");
var crearrutinas_module_1 = require("./modules/crearrutinas/crearrutinas.module");
var home_module_1 = require("./modules/home/home.module");
var perfil_module_1 = require("./modules/perfil/perfil.module");
var rutinas_module_1 = require("./modules/rutinas/rutinas.module");
var concepinf_module_1 = require("./modules/concepinf/concepinf.module");
var app_routing_module_1 = require("./app-routing.module");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var shared_module_1 = require("./shared/shared.module");
var animations_1 = require("@angular/platform-browser/animations"); // LAS ANIMACIONES DE PRIME
//Los servicios creados
var ejercicios_service_1 = require("./services/ejercicios.service");
var auth_service_1 = require("./modules/auth/services/auth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                common_1.CommonModule,
                shared_module_1.SharedModule,
                //importar firebase
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                auth_1.AngularFireAuthModule,
                // MODULOS DE LOS COMPONENTES DE LA INTERFAZ
                ejercicios_module_1.EjerciciosModule,
                crearrutinas_module_1.CrearrutinasModule,
                home_module_1.HomeModule,
                perfil_module_1.PerfilModule,
                rutinas_module_1.RutinasModule,
                concepinf_module_1.ConcepinfModule,
                animations_1.BrowserAnimationsModule,
            ], exports: [],
            providers: [ejercicios_service_1.EjerciciosService, auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
