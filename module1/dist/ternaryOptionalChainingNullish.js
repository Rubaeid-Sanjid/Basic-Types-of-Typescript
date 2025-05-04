"use strict";
var _a;
{
    // Ternary Operator
    const age = 10;
    const isAdult = age > 18 ? "Adult" : "Not Adult";
    console.log(isAdult);
    // Nullish coalescing operator
    // null / undefined ---> decision make
    // const isAuthenticated = undefined;
    const isAuthenticated = null;
    const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "logIn";
    console.log(result);
    const user = {
        name: "Piyal",
        address: {
            h_no: 24,
            presentAddress: "Uttara, Dhaka."
        }
    };
    const permanentAddress = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress;
    console.log({ permanentAddress });
}
