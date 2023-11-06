"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RutinasModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var rutinas_component_1 = require("./rutinas.component");
//importaciones de prime
var fieldset_1 = require("primeng/fieldset");
var table_1 = require("primeng/table");
var RutinasModule = /** @class */ (function () {
    function RutinasModule() {
    }
    RutinasModule = __decorate([
        core_1.NgModule({
            declarations: [
                rutinas_component_1.RutinasComponent,
            ],
            imports: [
                common_1.CommonModule,
                fieldset_1.FieldsetModule,
                table_1.TableModule
            ]
        })
    ], RutinasModule);
    return RutinasModule;
}());
exports.RutinasModule = RutinasModule;
