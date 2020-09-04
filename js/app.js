var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// CLASS
var User = /** @class */ (function () {
    function User() {
        this.users =
            JSON.parse(localStorage.getItem("user")) != null
                ? JSON.parse(localStorage.getItem("user"))
                : null;
    }
    User.id = 1;
    return User;
}());
// Inheritance
var UserManager = /** @class */ (function (_super) {
    __extends(UserManager, _super);
    function UserManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserManager.prototype.add = function (data) {
        this.users.push(data);
        localStorage.setItem("user", JSON.stringify(this.users));
        UserManager.nextID();
    };
    UserManager.prototype.fetch = function () {
        this.get =
            JSON.parse(localStorage.getItem("user")) != null
                ? JSON.parse(localStorage.getItem("user"))
                : [];
        return this.get;
    };
    UserManager.nextID = function () {
        UserManager.id += 1;
    };
    return UserManager;
}(User));
var form = document.forms[0];
var members = document.querySelector(".members_sec");
var user = new UserManager();
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = form.elements[0].value;
    var mail = form.elements[1].value;
    var age = Number(form.elements[2].value);
    if (name.length > 0 && mail.length > 0 && age > 0) {
        user.add({ id: UserManager.id, name: name, email: mail, age: age });
    }
});
document.addEventListener("DOMContentLoaded", function (e) {
    var giveMember = user.fetch();
    giveMember.forEach(function (User) {
        // console.log(User);
        var mem = document.createElement("div");
        mem.classList.add("member");
        mem.innerHTML = "\n      <ul>\n          <li>" + User.name + "</li>\n          <li>" + User.email + "</li>\n          <li>" + User.age + "</li>\n      </ul>\n    ";
        members.append(mem);
        console.log(mem);
    });
});
