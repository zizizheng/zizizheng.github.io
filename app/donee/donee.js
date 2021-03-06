"use strict";
var Donee = (function () {
    function Donee() {
    }
    Donee.prototype.checkInput = function () {
        // TODO : 確認各種字串輸入正確與否
    };
    Donee.prototype.getObject = function () {
        var object = {
            donee_name: this.donee_name,
            phone: this.phone,
            contact_phone: this.contact_phone,
            email: this.email,
            address: this.address,
            contact: this.contact,
            category: this.category,
            house_num: this.house_num,
            people_num: this.people_num
        };
        return object;
    };
    Donee.prototype.pushData = function (ob) {
        this.donee_name = ob.donee_name;
        this.phone = ob.phone;
        this.contact_phone = ob.contact_phone;
        this.email = ob.email;
        this.address = ob.address;
        this.contact = ob.contact;
        this.category = ob.category;
        this.house_num = ob.house_num;
        this.people_num = ob.people_num;
    };
    return Donee;
}());
exports.Donee = Donee;
exports.CategorySearch = ['', '單位名稱', '單位分類'];
exports.CategoryKey = ['', 'donee_name', 'category'];
exports.Category = ['', '身心障礙', '街友 | 獨居老人', '弱勢清寒 | 課輔班',
    '弱勢家庭 - 兒童 | 青少年 | 原住民 | 新移民 | 隔代教養', '其他 (特殊境遇)'];
//# sourceMappingURL=donee.js.map