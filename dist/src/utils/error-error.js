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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3ItZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvdXRpbHMvZXJyb3ItZXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7SUFBaUMsK0JBQUs7SUFDbEMscUJBQVksT0FBZSxFQUFTLFVBQWtCO1FBQXRELFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBQ2pCO1FBRm1DLGdCQUFVLEdBQVYsVUFBVSxDQUFROztJQUV0RCxDQUFDO0lBQ0wsa0JBQUM7QUFBRCxDQUFDLEFBSkQsQ0FBaUMsS0FBSyxHQUlyQztBQUpZLGtDQUFXIn0=