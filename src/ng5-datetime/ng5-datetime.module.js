"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var ng5_datetime_1 = require("./ng5-datetime");
var NKDatetimeModule = /** @class */ (function () {
    function NKDatetimeModule() {
    }
    NKDatetimeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule],
            exports: [ng5_datetime_1.NKDatetime],
            declarations: [ng5_datetime_1.NKDatetime]
        })
    ], NKDatetimeModule);
    return NKDatetimeModule;
}());
exports.NKDatetimeModule = NKDatetimeModule;
//# sourceMappingURL=ng5-datetime.module.js.map