{
    // Ternary Operator

    const age : number = 10;
    const isAdult = age > 18 ? "Adult" : "Not Adult";
    console.log(isAdult);
    
    // Nullish coalescing operator
    
        // null / undefined ---> decision make

        // const isAuthenticated = undefined;
        const isAuthenticated = null;
        const result = isAuthenticated ?? "logIn";
        console.log(result);
        
        // const isAuthenticated = " ";
        // const result2 = isAuthenticated ? "LogIn" : "Failed";
        // console.log(result2);

    // Optional Chaining

        type User = {
            name: string;
            address: {
                h_no: number;
                presentAddress: string;
                permanentAddress?: string
            }
        }

        const user : User = {
            name: "Piyal",
            address: {
                h_no: 24,
                presentAddress: "Uttara, Dhaka."
            }
        }
        
        const permanentAddress = user?.address?.permanentAddress ?? "Not found";
        console.log(permanentAddress);
    
}