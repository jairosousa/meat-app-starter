"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.macthes = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "jaironsousa@gmail.com": new User('jaironsousa@gmail.com', 'Jairo', 'jnssls'),
    "jairofilho79@gmail.com": new User('jairofilho79@gmail.com', 'Jairo Filho', 'jnssls'),
    "caiosousa@gmail.com": new User('caiosousa@gmail.com', 'Caio', 'jnssls')
};
