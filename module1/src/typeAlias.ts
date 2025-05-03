{
    type User = {
        fName: string;
        lName: string;
        age: number;
        contactNo: string
    }

    const user: User = {
        fName: "Sanjid",
        lName: "Piyal",
        age: 25,
        contactNo: "107049724"
    }

    type IsAdmin = boolean;
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
}