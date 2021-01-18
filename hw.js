"use strict";

let arr = [];
let str = 'jefaa';

for (let i = 0; i < str.length; i++) {
//    alert(str[i]);
    if (arr[str[i]] == undefined) {
        arr[str[i]] = 1;
    } else {
        arr[str[i]]++;
    }
}

alert("done");
alert(arr['a']);



/*
let input = prompt('Enter a number greater than 1');

outer: for (let i = 2; i <= input; i++) {
    if (i == 2 || i == 3) {
        alert(i);
        continue;
    }
    if (i % 2 == 0) {
        continue;
    }
    for (let j = 3; j < i; j += 2) {
        if (i % j == 0) {
            continue outer;
        }
    }
    alert(i);
}

/*
let ans;

while (1) {
    ans = prompt('Enter a number greater than 100');
    
    if (ans > 100 || ans == null || ans == '') {
        break;
    }
}
/*
let i = 0;

while (i < 3) {
    alert(`number ${i++}!`);
}
/*
for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

/*
alert(Boolean("0"));

/*
let result = prompt("What's yer name?", "Weedbopper");
alert(result);

result = confirm("You da boss?");
alert(result);
/*
alert(typeof(Symbol("id")));
alert(typeof(Math));
alert(typeof(null));
alert(typeof(alert));

/*
let age;

if (age == undefined) {
    alert("give it a value");
}
alert(age);

/*
let nonum = "nonum" / 2;
nonum = nonum + 15;
alert("1. expect NaN " + nonum);

nonum = "nonum" / 2;
nonum = nonum + "abc"
alert("2. expect NaN " + nonum);

alert("nonum" / 2);

if (1/0 == Infinity) {
    alert("found Infinity");
}

alert(1/0);
/*
let admin;
let name;

name = "John";
admin = name;
alert(admin);

/*
const bDay = "01.01.2021";
let message;
message = "I'm a variable and my name is message";
alert(message + " and my birthday is " + bDay);

/*
alert("I'm Javascript!");
alert("world");

*/