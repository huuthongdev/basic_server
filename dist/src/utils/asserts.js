"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_error_1 = require("./server-error");
function makeSure(expression, message, statusCode) {
    if (statusCode === void 0) { statusCode = 400; }
    if (expression)
        return;
    throw new server_error_1.ServerError(message, statusCode);
}
exports.makeSure = makeSure;
function mustExist(value, message, statusCode) {
    if (statusCode === void 0) { statusCode = 400; }
    if (value)
        return;
    throw new server_error_1.ServerError(message, statusCode);
}
exports.mustExist = mustExist;
function mustMatchReg(value, reg, message, statusCode) {
    if (statusCode === void 0) { statusCode = 400; }
    if (value.match(reg))
        return;
    throw new server_error_1.ServerError(message, statusCode);
}
exports.mustMatchReg = mustMatchReg;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9hc3NlcnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTZDO0FBRTdDLGtCQUF5QixVQUFtQixFQUFFLE9BQWUsRUFBRSxVQUFnQjtJQUFoQiwyQkFBQSxFQUFBLGdCQUFnQjtJQUMzRSxJQUFJLFVBQVU7UUFBRSxPQUFPO0lBQ3ZCLE1BQU0sSUFBSSwwQkFBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSEQsNEJBR0M7QUFFRCxtQkFBMEIsS0FBVSxFQUFFLE9BQWUsRUFBRSxVQUFnQjtJQUFoQiwyQkFBQSxFQUFBLGdCQUFnQjtJQUNuRSxJQUFJLEtBQUs7UUFBRSxPQUFPO0lBQ2xCLE1BQU0sSUFBSSwwQkFBVyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBSEQsOEJBR0M7QUFFRCxzQkFBNkIsS0FBYSxFQUFFLEdBQVcsRUFBRSxPQUFlLEVBQUUsVUFBZ0I7SUFBaEIsMkJBQUEsRUFBQSxnQkFBZ0I7SUFDdEYsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUFFLE9BQU87SUFDN0IsTUFBTSxJQUFJLDBCQUFXLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLENBQUM7QUFIRCxvQ0FHQyJ9