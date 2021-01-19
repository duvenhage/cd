"use strict";

function FindIntersection(strArr) {

    let arr1 = strArr[0].split(", ");
    let arr2 = strArr[1].split(", ");
    let ans = [];

    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                ans.push(arr1[i]);
                break;
            }
        }
    }
    if (ans.length == 0) {
        return false;
    } else {
        return ans.join();
    }
}

let str = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
alert(FindIntersection(str));
str = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];
alert(FindIntersection(str));
str = ["1, 3, 4, 4, 7, 13", "1, 2, 4, 13, 13, 15"];
alert(FindIntersection(str));
