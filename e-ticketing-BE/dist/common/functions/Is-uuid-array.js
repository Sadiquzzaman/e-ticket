"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUuidArray = void 0;
const class_validator_1 = require("class-validator");
const validator_1 = require("validator");
function IsUuidArray(validationOptions) {
    return function (object, propertyName) {
        let fakeElements = [];
        (0, class_validator_1.registerDecorator)({
            name: 'IsUuidArray',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                defaultMessage() {
                    return `[${fakeElements}] is not uuid`;
                },
                validate(value, args) {
                    fakeElements = [];
                    let isOnlyUuid = true;
                    value.forEach((element) => {
                        console.log(element, validator_1.default.isUUID(element, 4));
                        const result = validator_1.default.isUUID(element, 4);
                        if (!result) {
                            isOnlyUuid = result;
                            fakeElements.push(element);
                        }
                    });
                    return isOnlyUuid;
                },
            },
        });
    };
}
exports.IsUuidArray = IsUuidArray;
//# sourceMappingURL=Is-uuid-array.js.map