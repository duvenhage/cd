"use strict";

function tmp(str) {

    let found = false;
    let i = 0;
    let j;
    console.log(str);
    
    while (i < str.length) {
        if (str[i] > 0 && str[i] <= 9) {
            j = i + 1;
            let qCtr = 0;

            while (j < str.length) {
                if (str[j] == "?") {
                    qCtr++;
                } else if (str[j] > 0 && str[j] <= 9) {
                    console.log(str[i] + ' : ' + str[j]);
                    if (+str[j] + +str[i] == 10) {
                        console.log("found: " + str[i] + ' : ' + str[j])
                        if (qCtr !== 3) {
                            return false;
                        }
                        qCtr = 0;
                        found = true;
                    }
                    i = j;
                }
                j++;
            }
        }
        i++;
        return found;
    }
}

//let str = "5??aaaaaaaaaaaaaaaaaaa?5?5";
//alert(tmp(str));
let str1 = "acc?7??sss?3rr1??????5";
alert(tmp(str1));
//let str2 = "acc?7??sss?3rr1???5???5abc5xy?";
//alert(tmp(str2));
