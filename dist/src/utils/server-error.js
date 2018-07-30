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
Object.defineProperty(exports, "__esModule", { value: true });
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(message, statusCode) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return ServerError;
}(Error));
exports.ServerError = ServerError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLWVycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3V0aWxzL3NlcnZlci1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtJQUFpQywrQkFBSztJQUNsQyxxQkFBWSxPQUFlLEVBQVMsVUFBa0I7UUFBdEQsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FDakI7UUFGbUMsZ0JBQVUsR0FBVixVQUFVLENBQVE7O0lBRXRELENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFKRCxDQUFpQyxLQUFLLEdBSXJDO0FBSlksa0NBQVcifQ==