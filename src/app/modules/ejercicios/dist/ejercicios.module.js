"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EjerciciosModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ejercicios_component_1 = require("./ejercicios.component");
//Importaciones de Prime
var forms_1 = require("@angular/forms");
var dialog_1 = require("primeng/dialog");
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var table_1 = require("primeng/table");
var tristatecheckbox_1 = require("primeng/tristatecheckbox");
var progressspinner_1 = require("primeng/progressspinner");
var EjerciciosModule = /** @class */ (function () {
    function EjerciciosModule() {
    }
    EjerciciosModule = __decorate([
        core_1.NgModule({
            declarations: [
                ejercicios_component_1.EjerciciosComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                dialog_1.DialogModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                table_1.TableModule,
                tristatecheckbox_1.TriStateCheckboxModule,
                progressspinner_1.ProgressSpinnerModule,
            ],
            exports: [
                forms_1.FormsModule,
                dialog_1.DialogModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                table_1.TableModule,
                progressspinner_1.ProgressSpinnerModule
            ]
        })
    ], EjerciciosModule);
    return EjerciciosModule;
}());
exports.EjerciciosModule = EjerciciosModule;
