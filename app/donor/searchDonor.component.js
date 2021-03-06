"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var searchTemplate_component_1 = require("./../template/searchTemplate.component");
var server_service_1 = require("../service/server.service");
var core_1 = require("@angular/core");
var donorCat = require("./donor");
var SearchDonorComponent = (function (_super) {
    __extends(SearchDonorComponent, _super);
    function SearchDonorComponent(injector, serverService) {
        var _this = _super.call(this, injector) || this;
        _this.serverService = serverService;
        _this.area = [];
        _this.area = donorCat.Area;
        _this.category = donorCat.Category;
        _this.categorySearch = donorCat.CategorySearch;
        _this.categoryKey = donorCat.CategoryKey;
        _this.primaryKey = 'donor_name';
        _this.parentUrl = _this.serverService.getDonorUrl('');
        _this.listUrl = _this.serverService.getDonorUrl('list');
        _this.dataList = new Array();
        return _this;
    }
    SearchDonorComponent.prototype.ngOnInit = function () {
        this.GetList(this.listUrl, this.primaryKey);
    };
    SearchDonorComponent.prototype.searchClick = function () {
        this.dataList = [];
        var keyIndex = this.categorySearch.indexOf(this.searchKey);
        var url = this.serverService.getDonorUrl(this.searchContent);
        var urlParam = this.categoryKey[keyIndex];
        this.Search(url, urlParam);
    };
    SearchDonorComponent.prototype.checkChange = function (item, checked) {
        var _this = this;
        // console.log(item._id);
        // console.log(this.delArray.filter(object => object.id == item._id));
        this.delArray.filter(function (object) { return object.primaryKey == item[_this.primaryKey]; })[0].checked = checked;
    };
    SearchDonorComponent.prototype.deleteClick = function () {
        this.Delete();
    };
    SearchDonorComponent.prototype.searchChange = function (value) {
        this.selectCat = (value === '分類') ? true : false;
        this.searchContent = '';
    };
    SearchDonorComponent.prototype.updateClick = function (donor) {
        this.selectedItem = donor;
        this.updateBut = true;
    };
    SearchDonorComponent.prototype.notifyUpdate = function (isUpdate) {
        // console.log('got emit');
        if (isUpdate)
            this.GetList(this.listUrl, this.primaryKey);
        this.updateBut = false;
    };
    return SearchDonorComponent;
}(searchTemplate_component_1.SearchTemplateComponent));
SearchDonorComponent = __decorate([
    core_1.Component({
        selector: 'searchDonor',
        templateUrl: "app/donor/searchDonor.component.html"
    }),
    __metadata("design:paramtypes", [core_1.Injector,
        server_service_1.ServerService])
], SearchDonorComponent);
exports.SearchDonorComponent = SearchDonorComponent;
//# sourceMappingURL=searchDonor.component.js.map