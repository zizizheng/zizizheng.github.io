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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var PostSystemService = (function () {
    function PostSystemService(http) {
        this.http = http;
    }
    PostSystemService.prototype.getDataList = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    PostSystemService.prototype.getData = function (url, key) {
        var params = new http_1.URLSearchParams();
        params.set('searchKey', key);
        console.log(url);
        return this.http.get(url, { search: params })
            .map(function (response) { return response.json(); });
    };
    PostSystemService.prototype.getSpecificData = function (url) {
        return this.http.get(url)
            .map(function (response) { return response.json(); });
    };
    PostSystemService.prototype.postData = function (url, object) {
        // TODO : move subscribe to corresponding component
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var params = JSON.stringify(object);
        console.log(params);
        return this.http.post(url, params, options)
            .map(function (response) { return response.json(); });
    };
    PostSystemService.prototype.deleteData = function (url) {
        console.log(url);
        return this.http.delete(url)
            .map(function (response) { return response.json(); });
    };
    return PostSystemService;
}());
PostSystemService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostSystemService);
exports.PostSystemService = PostSystemService;
//# sourceMappingURL=postSystem.service.js.map