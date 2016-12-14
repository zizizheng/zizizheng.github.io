"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var login_service_1 = require('./service/login.service');
var core_1 = require('@angular/core');
var HeaderComponent = (function () {
    function HeaderComponent(loginService) {
        var _this = this;
        this.loginService = loginService;
        loginService.nameChange$.subscribe(function (name) { return _this.userName = name; });
        this.userName = '使用者';
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            templateUrl: 'app/header.component.html',
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map