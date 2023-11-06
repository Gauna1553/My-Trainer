"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ngx_cookie_service_1 = require("ngx-cookie-service");
//Modulos de Firebase
var compat_1 = require("@angular/fire/compat");
var auth_1 = require("@angular/fire/compat/auth");
var storage_1 = require("@angular/fire/compat/storage");
var auth_routing_module_1 = require("./auth-routing.module");
//Modulos a utilizar
var login_component_1 = require("./pages/login/login.component");
var register_component_1 = require("./pages/register/register.component");
var forms_1 = require("@angular/forms");
var environment_1 = require("src/environment/environment");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            imports: [
                common_1.CommonModule,
                auth_routing_module_1.AuthRoutingModule,
                forms_1.FormsModule,
                //importar firebase
                compat_1.AngularFireModule.initializeApp(environment_1.environment.firebaseConfig),
                auth_1.AngularFireAuthModule,
                storage_1.AngularFireStorageModule
            ],
            exports: [
                forms_1.FormsModule
            ],
            providers: [ngx_cookie_service_1.CookieService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
