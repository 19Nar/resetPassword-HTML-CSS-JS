var username = document.querySelector('#oldpassword');
var password = document.querySelector('#newpassword');
var setButton = document.querySelector('#reset');


setButton.addEventListener('click', resetNewPassword);

function resetNewPassword(event) {
    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
        changePassword(password) { this.password = password }
    };

    class Admin extends User {
        constructor(username, password, accessLevel) {
            super(username)
            this.password = password
            this.accessLevel = accessLevel

        }

        fixedNewPassword(username, newPassword) { username.changePassword(newPassword) }
    };

    let user1 = new User("Naira", "Van")
    user1.password
    user1.changePassword("NaneVan")
    user1.password

    let adminNew = new Admin("GetAdmin", "password", 12345)
    console.log("this is your new admin", adminNew)
    adminNew.fixedNewPassword(user1, "HalloNairaVan")
    user1.password

    event.preventDefault();

  };