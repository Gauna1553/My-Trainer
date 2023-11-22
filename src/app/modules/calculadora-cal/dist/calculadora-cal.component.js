"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CalculadoraCALComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var CalculadoraCALComponent = /** @class */ (function () {
    function CalculadoraCALComponent(servicioDatos) {
        this.servicioDatos = servicioDatos;
        this.imc = 0;
        //Defino la visibilidad del pop up
        this.datosDialog = false;
        this.database = '';
        this.editar = false;
        this.idEditar = '';
        this.datosColeccion = [];
        this.loading = false;
        this.datoss = {
            uid: '',
            nombre: '',
            apellido: '',
            email: '',
            contrasena: '',
            rol: '',
            token: '',
            sexo: '',
            edad: 0,
            altura: 0,
            peso: 0,
            imc: 0
        };
    }
    CalculadoraCALComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.servicioDatos.obtenerDatos().subscribe(function (datos) {
            _this.datosColeccion = datos;
        });
    };
    //Esta función se encarga de abrir el pop up
    CalculadoraCALComponent.prototype.openNew = function () {
        this.submitted = false;
        this.datosDialog = true;
    };
    //Esta función se encarga de cerrar el pop up
    CalculadoraCALComponent.prototype.hideDialog = function () {
        this.datosDialog = false;
        this.datoss.altura = 0;
        this.datoss.peso = 0;
        this.datoss.sexo = '';
        this.datoss.edad = 0;
    };
    //Esta función se encarga de guardar los nuevos datos para que luego se puedan modificar
    CalculadoraCALComponent.prototype.guardarDatos = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editar && this.datoss.altura & this.datoss.edad && this.datoss.peso && this.datoss.sexo) {
            this.loading = true;
            var resultado = this.servicioDatos.agregarDatos(this.datoss).then(function (resp) {
                _this.loading = false;
                alert("Se cargaron los datos de manera correcta");
            })["catch"](function (error) {
                _this.loading = false;
                alert("No se pudieron cargar los datos correctamente");
            });
        }
        else {
            if (this.datoss.altura & this.datoss.edad && this.datoss.peso && this.datoss.sexo) {
                this.loading = true;
                this.datoss.uid = this.idEditar;
                this.servicioDatos.modificarDatos(this.idEditar, this.datoss).then(function (resul) {
                    _this.loading = false;
                    _this.editar = false;
                    _this.datosDialog = false;
                });
            }
        }
    };
    //Editar datos -> se llama al boton para el pop up
    CalculadoraCALComponent.prototype.editarDatos = function (datosSeleccionado) {
        this.datosSeleccionado = datosSeleccionado;
        if (confirm("¿Desea modificar sus datos?") === true) {
            this.editar = true;
            this.idEditar = datosSeleccionado.uid;
            this.openNew();
        }
        else {
            alert("No se pudieron modificar los datos");
        }
    };
    CalculadoraCALComponent.prototype.editDatos = function () {
        var datos = {
            uid: this.datoss.uid,
            edad: this.datoss.edad,
            altura: this.datoss.altura,
            peso: this.datoss.peso,
            sexo: this.datoss.sexo,
            imc: this.datoss.imc,
            nombre: this.datoss.nombre,
            apellido: this.datoss.apellido,
            email: this.datoss.email,
            rol: this.datoss.rol,
            token: this.datoss.token,
            contrasena: this.datoss.contrasena
        };
        this.servicioDatos.modificarDatos(this.datosSeleccionado.uid, datos)
            .then(function (datos) {
            alert("Los datos fueron modificados con exito");
        })["catch"](function (error) {
            alert("No se pudieron modificar los datos" + error);
        });
        /*
        Esta funcion toma los valores asignados de la colección de usuarios, y los modifica, excepto el valor ID.
        En caso de hacerlo bien, se muestra el primer mensaje, en caso contrario, muestra el segundo mensaje
        */
    };
    CalculadoraCALComponent.prototype.mostrarBorrar = function (datosSeleccionado) {
        this.datosSeleccionado = datosSeleccionado;
        if (confirm("Desea eliminar los datos subidos") === true) {
            this.borrarDatos();
        }
        else {
            alert("No se pudieron borrar los datos");
        }
    };
    CalculadoraCALComponent.prototype.borrarDatos = function () {
        this.servicioDatos.eliminarDatos(this.datosSeleccionado.uid)
            .then(function (respuesta) {
            alert("Los datos se borraron de forma correcta");
        })["catch"](function (error) {
            alert("No se pudo borrar los datos" + error);
        });
    };
    CalculadoraCALComponent.prototype.calcular = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                try {
                    result = this.servicioDatos.guardarIMC(this.datoss.uid, this.datoss.edad, this.datoss.sexo, this.datoss.altura, this.datoss.peso, this.datoss.imc);
                    console.log(result);
                }
                catch (error) {
                    console.error('Error al guardar el IMC:', error);
                }
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_2.Input()
    ], CalculadoraCALComponent.prototype, "imc");
    CalculadoraCALComponent = __decorate([
        core_1.Component({
            selector: 'app-calculadora-cal',
            templateUrl: './calculadora-cal.component.html',
            styleUrls: ['./calculadora-cal.component.css']
        })
    ], CalculadoraCALComponent);
    return CalculadoraCALComponent;
}());
exports.CalculadoraCALComponent = CalculadoraCALComponent;
