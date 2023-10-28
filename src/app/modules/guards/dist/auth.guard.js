"use strict";
exports.__esModule = true;
exports.authGuard = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../auth/services/auth.service");
var rxjs_1 = require("rxjs");
exports.authGuard = function () {
    var authService = core_1.inject(auth_service_1.AuthService);
    var router = core_1.inject(router_1.Router);
    return authService.userState$.pipe(rxjs_1.take(1), rxjs_1.tap(function (isLoggedIn) { return (isLoggedIn ? router.createUrlTree(['/home']) : true); }));
};
