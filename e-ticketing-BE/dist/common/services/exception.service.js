"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionService = void 0;
const common_1 = require("@nestjs/common");
let ExceptionService = class ExceptionService {
    notFound(entity, message) {
        if (entity instanceof Array) {
            if (entity.length < 1) {
                throw new common_1.NotFoundException(message);
            }
        }
        else {
            if (!entity) {
                throw new common_1.NotFoundException(message);
            }
        }
    }
};
ExceptionService = __decorate([
    (0, common_1.Injectable)()
], ExceptionService);
exports.ExceptionService = ExceptionService;
//# sourceMappingURL=exception.service.js.map