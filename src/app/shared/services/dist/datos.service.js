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
exports.DatosService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var DatosService = /** @class */ (function () {
    //dentro de los parametros de la BD
    function DatosService(database) {
        this.database = database;
        //referenciamos colección de la BD
        this.datosColeccion = this.database.collection('usuarios');
    }
    DatosService.prototype.agregarDatos = function (datos) {
        var _this = this;
        //RESOLVE: promesa resulta -> similar al then
        //REJECT: promesa rechazada -> similar al catch
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var id, resultado, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = this.database.createId();
                        return [4 /*yield*/, this.datosColeccion.doc(id).set(datos)
                            //muestra el resultado sin problema
                        ];
                    case 1:
                        resultado = _a.sent();
                        //muestra el resultado sin problema
                        resolve(resultado);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        //en caso de que ocurra un error
                        reject(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    DatosService.prototype.obtenerDatos = function () {
        // snapshoot -> captura los cambios
        // pipe -> tuberia por donde viajan esos nuevos datos
        // map -> recorre esos datos y luego los lee
        return this.datosColeccion.snapshotChanges().pipe(rxjs_1.map((function (action) { return action.map(function (a) { return a.payload.doc.data(); }); })));
        /*
          Esta función se encarga de llamar a los datos que se le solicitan, y mostrarlos en pantalla
        */
    };
    //funcion para editar los datos ingresados por el usuario
    /*Enviamos el id del usuario seleccionado y su nueva información*/
    DatosService.prototype.modificarDatos = function (uid, nuevaData) {
        return this.database.collection('usuarios').doc(uid).update(nuevaData);
        /*
          Esta función se encarga de llamar al objeto usuario, y modificar un valor ya existente
        */
    };
    DatosService.prototype.eliminarDatos = function (uid) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                var resp = _this.datosColeccion.doc(uid)["delete"]();
                resolve(resp);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    DatosService.prototype.calcularIMC = function (edad, sexo, altura, peso) {
        if (sexo === 'hombre') {
            return 66.473 + (13.752 * peso) + (5.0033 * altura) - (6.755 * edad);
        }
        else if (sexo === 'mujer') {
            return 65.51 + (9.563 * peso) + (1.85 * altura) - (4.676 * edad);
        }
        else {
            throw new Error('Sexo inválido. Debe ser "hombre" o "mujer".');
        }
    };
    DatosService.prototype.guardarIMC = function (uid, edad, sexo, altura, peso, imc) {
        imc = this.calcularIMC(edad, sexo, altura, peso);
        try {
            this.database.collection('usuarios').doc(uid).update({
                imc: imc
            });
            console.log('IMC guardado con éxito');
        }
        catch (error) {
            error;
        }
    };
    DatosService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], DatosService);
    return DatosService;
}());
exports.DatosService = DatosService;
