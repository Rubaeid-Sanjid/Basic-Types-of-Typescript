"use strict";
// Object destructuring
const user = {
    id: 1,
    name: {
        fName: "Rubaeid",
        lName: "Sanjid"
    },
    contactNo: "0987448908"
};
const { contactNo: phoneNumber, // Name aliasing
name: { fName } } = user;
// Array destructuring
const animals = ["cat", "dog", "tiger", "Lion", "monkey"];
const [, , c, ...rest] = animals;
console.log(c);
console.log(rest);
