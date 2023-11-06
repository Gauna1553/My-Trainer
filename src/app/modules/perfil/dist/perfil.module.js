"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PerfilModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var perfil_component_1 = require("./perfil.component");
var perfil_routing_module_1 = require("./perfil-routing.module");
//Importacion de prime
var button_1 = require("primeng/button");
var table_1 = require("primeng/table");
var PerfilModule = /** @class */ (function () {
    function PerfilModule() {
    }
    PerfilModule = __decorate([
        core_1.NgModule({
            declarations: [
                perfil_component_1.PerfilComponent
            ],
            imports: [
                common_1.CommonModule,
                perfil_routing_module_1.PerfilRoutingModule,
                //importaciones de primeng
                button_1.ButtonModule,
                table_1.TableModule
            ]
        })
    ], PerfilModule);
    return PerfilModule;
}());
exports.PerfilModule = PerfilModule;
