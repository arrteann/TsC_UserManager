// INTERFACE
interface Iuser {
  id: number;
  name: string;
  email: string;
  age: number;
}

// CLASS
abstract class User {
  static id = 1;
  protected users: Iuser[];
  protected get;
  constructor() {
    this.users =
      JSON.parse(localStorage.getItem("user")) != null
        ? JSON.parse(localStorage.getItem("user"))
        : null;
  }
}
// Inheritance
class UserManager extends User {
  add(data: Iuser) {
    this.users.push(data);
    localStorage.setItem("user", JSON.stringify(this.users));
    UserManager.nextID();
  }
  fetch() {
    this.get =
      JSON.parse(localStorage.getItem("user")) != null
        ? JSON.parse(localStorage.getItem("user"))
        : [];
    return this.get;
  }
  static nextID() {
    UserManager.id += 1;
  }
}
let form = document.forms[0];
let members = document.querySelector(".members_sec");
let user = new UserManager();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name: string = form.elements[0].value;
  let mail: string = form.elements[1].value;
  let age: number = Number(form.elements[2].value);
  if (name.length > 0 && mail.length > 0 && age > 0) {
    user.add({ id: UserManager.id, name: name, email: mail, age: age });
  }
});
document.addEventListener("DOMContentLoaded", (e) => {
  let giveMember = user.fetch();
  giveMember.forEach((User) => {
    // console.log(User);
    let mem = document.createElement("div");
    mem.classList.add("member");
    mem.innerHTML = `
      <ul>
          <li>${User.name}</li>
          <li>${User.email}</li>
          <li>${User.age}</li>
      </ul>
    `;
    members.append(mem);
    console.log(mem);
  });
});
