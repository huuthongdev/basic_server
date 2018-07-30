"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function getDatabaseUri() {
    if (process.env.NODE_ENV === 'production')
        return '';
    if (process.env.NODE_ENV === 'test')
        return 'mogobd://localhost/test';
    return 'mongodb://localhost/basic_server';
}
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(getDatabaseUri(), { useMongoClient: true })
    .then(function () { return console.log('Database connected.'); })
    .catch(function (error) {
    console.log(error.message);
    process.exit(1);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29ubmVjdERhdGFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9jb25uZWN0RGF0YXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQWdDO0FBRWhDO0lBQ0ksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZO1FBQUUsT0FBTyxFQUFFLENBQUM7SUFDckQsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNO1FBQUUsT0FBTyx5QkFBeUIsQ0FBQztJQUN0RSxPQUFPLGtDQUFrQyxDQUFDO0FBQzlDLENBQUM7QUFFRCxrQkFBUSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDO0FBRWxDLGtCQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFFLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBQyxDQUFDO0tBQzFELElBQUksQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO0tBQzlDLEtBQUssQ0FBQyxVQUFBLEtBQUs7SUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDIn0=