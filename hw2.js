"use strict";

function CodelandUsernameValidation(str) {

    if (str.length <= 4 || str.length >= 25) {
        console.log(1);
        return false;
    }
    if (!(str[0] >= "A" && str[0] <= "Z") && !(str[0] >= "a" && str[0] <= "z")) {
        console.log(2);
        return false;
    }
    if (str[str.length - 1] === "_") {
        console.log(3);
        return false;
    }
    let found;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "_" ||
                (str[i] >= "A" && str[i] <= "Z") ||
                (str[i] >= "a" && str[i] <= "z") ||
                (str[i] >= "0" && str[i] <= "9")) {
            found = true;
        } else {
            found = false;
        }
        if (found === false) {
            return found;
        }
    }

  return true;

}

let str = "123aa_456";
alert(CodelandUsernameValidation(str));
str = "u__hello_world123";
alert(CodelandUsernameValidation(str));
str = "u__hello_world123_";
alert(CodelandUsernameValidation(str));
str = "_u__hello_world123";
alert(CodelandUsernameValidation(str));
str = "u__hel$lo_world123";
alert(CodelandUsernameValidation(str));
