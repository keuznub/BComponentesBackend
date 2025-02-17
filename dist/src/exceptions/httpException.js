"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HttpException", {
    enumerable: true,
    get: function() {
        return HttpException;
    }
});
let HttpException = class HttpException extends Error {
    status;
    constructor(status, message){
        super(message);
        this.status = status;
    }
};

//# sourceMappingURL=httpException.js.map