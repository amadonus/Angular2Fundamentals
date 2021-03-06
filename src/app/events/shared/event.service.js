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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var http_1 = require("@angular/http");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
        this.baseUrl = "http://localhost/Angular2FundamentalsApi/api/events/";
    }
    EventService.prototype.getEvents = function () {
        return this.http.get(this.baseUrl).map(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    EventService.prototype.getEvent = function (id) {
        return this.http.get(this.baseUrl + id)
            .map(function (x) {
            return x.json();
        });
    };
    EventService.prototype.saveEvent = function (event) {
        var url = this.baseUrl;
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/json/");
        return this.http.post(url, event, {
            headers: headers
        })
            .map(function (item) { return item.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    EventService.prototype.updateEvent = function (event) {
        var url = this.baseUrl + event.id;
        var headers = new http_1.Headers();
        headers.set("Content-Type", "application/json/");
        return this.http.put(url, event, {
            headers: headers
        })
            .map(function (item) { return item.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    EventService.prototype.handleError = function (error) {
        return Rx_1.Observable.throw(error.statusText);
    };
    EventService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EventService);
    return EventService;
}());
exports.EventService = EventService;
//# sourceMappingURL=event.service.js.map