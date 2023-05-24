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
exports.LoggingInterceptor = void 0;
const common_1 = require("@nestjs/common");
const clc = require("cli-color");
const rxjs_1 = require("rxjs");
let LoggingInterceptor = class LoggingInterceptor {
    constructor() {
        this.cliColor = {};
        this.cliColor['time'] = clc.xterm(29);
        this.cliColor['remote'] = clc.xterm(227);
        this.cliColor['class'] = clc.xterm(39);
        this.cliColor['method'] = clc.xterm(45);
        this.cliColor['verb'] = clc.xterm(51);
        this.cliColor['status'] = clc.xterm(87);
        this.cliColor['ptime'] = clc.xterm(47);
    }
    intercept(context, next) {
        const className = context.getClass().name;
        const methodName = context.getHandler().name;
        const statusCode = context.switchToHttp().getResponse()['statusCode'];
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const { rawHeaders, httpVersion, method, socket, url } = request;
        const { remoteAddress, remoteFamily } = socket;
        const reqTime = new Date();
        return next
            .handle()
            .pipe((0, rxjs_1.tap)(() => console.log(`${this.cliColor['time'](reqTime.toISOString())} ${this.cliColor['remote'](remoteAddress)}:::${this.cliColor['class'](className)}/${this.cliColor['method'](methodName)}/${this.cliColor['verb'](method)}:${this.cliColor['status'](statusCode)}` +
            `-> ${this.cliColor['ptime'](`${Date.now() - reqTime.getTime()}ms`)}`)));
    }
};
LoggingInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LoggingInterceptor);
exports.LoggingInterceptor = LoggingInterceptor;
//# sourceMappingURL=logging.interceptor.js.map