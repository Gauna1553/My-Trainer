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
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(servicioAuth, firestore, router, afAuth, fireStore
    //Estas son las declaraciones de las importaciones de Firebase a para poder utilizar
    ) {
        this.servicioAuth = servicioAuth;
        this.firestore = firestore;
        this.router = router;
        this.afAuth = afAuth;
        this.fireStore = fireStore;
        this.hide = true; //esto es el input
        this.usuarios = {
            uid: '',
            nombre: '',
            email: '',
            contrasena: '',
            apellido: '',
            rol: '',
            token: '',
            sexo: 0,
            altura: 0,
            peso: 0,
            edad: 0
            //Arreglo en donde se guardarar en los parametros del objeto Ejercicio
        };
    }
    LoginComponent.prototype.iniciar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var credenciales, res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        credenciales = {
                            email: this.usuarios.email,
                            contrasena: this.usuarios.contrasena
                        };
                        return [4 /*yield*/, this.servicioAuth.iniciarSesion(credenciales.email, credenciales.contrasena)
                                .then(function (res) {
                                ///////Base de datos///////
                                _this.afAuth.authState.subscribe(function (usuario) {
                                    if (usuario) {
                                        _this.fireStore.collection('usuarios').doc(usuario.uid).valueChanges().subscribe(function (data) {
                                            //Aqui se obtienen las credenciales del usuario
                                            var rol = data.rol;
                                            //Rediriges al usuario basado en sus credenciales
                                            if (rol === 'usuario') {
                                                _this.router.navigate(['/inicio']);
                                            }
                                            else {
                                                if (rol === 'admin') {
                                                    _this.router.navigate(['/admin']);
                                                }
                                                else {
                                                    _this.router.navigate(['/visitante']);
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        //Usuario no logeado
                                        _this.router.navigate(['/login']);
                                    }
                                });
                            })["catch"](function (error) {
                                console.error(error);
                                //Usuario no valido
                            })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.salir = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.servicioAuth.cerrarSesion()
                            .then(function (res) {
                            alert("Se ha deslogeado correctamente");
                            _this.router.navigate(['/login']);
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
