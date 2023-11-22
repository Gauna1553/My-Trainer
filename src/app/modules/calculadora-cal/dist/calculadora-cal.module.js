"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CalculadoraCALModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var calculadora_cal_component_1 = require("./calculadora-cal.component");
var calculadora_routing_module_1 = require("./calculadora-routing.module");
//Importaciones de Prime
var forms_1 = require("@angular/forms");
var dialog_1 = require("primeng/dialog");
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var table_1 = require("primeng/table");
var tristatecheckbox_1 = require("primeng/tristatecheckbox");
var progressspinner_1 = require("primeng/progressspinner");
var dropdown_1 = require("primeng/dropdown");
var CalculadoraCALModule = /** @class */ (function () {
    function CalculadoraCALModule() {
    }
    CalculadoraCALModule = __decorate([
        core_1.NgModule({
            declarations: [
                calculadora_cal_component_1.CalculadoraCALComponent
            ],
            imports: [
                common_1.CommonModule,
                calculadora_routing_module_1.CalculadoraRoutingModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                dialog_1.DialogModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                table_1.TableModule,
                tristatecheckbox_1.TriStateCheckboxModule,
                progressspinner_1.ProgressSpinnerModule,
                dropdown_1.DropdownModule
            ],
            exports: [
                table_1.TableModule,
                forms_1.FormsModule
            ]
        })
    ], CalculadoraCALModule);
    return CalculadoraCALModule;
}());
exports.CalculadoraCALModule = CalculadoraCALModule;
