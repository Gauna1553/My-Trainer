"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AdminModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
//Vsitas
var admin_routing_module_1 = require("./admin-routing.module");
//Angular
var forms_1 = require("@angular/forms");
var admin_component_1 = require("./admin.component");
//PrimeNg
var table_1 = require("primeng/table");
var dialog_1 = require("primeng/dialog");
var inputtext_1 = require("primeng/inputtext");
var button_1 = require("primeng/button");
var tristatecheckbox_1 = require("primeng/tristatecheckbox");
var progressspinner_1 = require("primeng/progressspinner");
var password_1 = require("primeng/password");
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                admin_component_1.AdminComponent
            ],
            imports: [
                common_1.CommonModule,
                admin_routing_module_1.AdminRoutingModule,
                //Importaciones de Primeng
                forms_1.FormsModule,
                table_1.TableModule,
                dialog_1.DialogModule,
                inputtext_1.InputTextModule,
                button_1.ButtonModule,
                tristatecheckbox_1.TriStateCheckboxModule,
                progressspinner_1.ProgressSpinnerModule,
                password_1.PasswordModule
            ],
            exports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
            ]
        })
    ], AdminModule);
    return AdminModule;
}());
exports.AdminModule = AdminModule;
