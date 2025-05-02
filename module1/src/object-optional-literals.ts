{
// Object --> refereance type
const user: {
    firstName: string;
    middleName: string;
    lastName: string;
    institute: string
} = {
    firstName: "Rubaeid",
    middleName: "Sanjid",
    lastName: "Piyal",
    institute: "AIUB"

}
const user2: {
    firstName: string;
    middleName?: string; // Optional type
    lastName: string;
    readonly institute: "American International University-Bangladesh" // Literal type (Type is Fixed)
} = {
    firstName: "Sanjid",
    lastName: "Piyal",
    // institute: "AIUB" // cannot assignable
    institute: "American International University-Bangladesh"
}

}