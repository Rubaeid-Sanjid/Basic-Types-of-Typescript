{
    // Union type
    type DeveloperRole = "Frontend" | "Backend";
    const developer: DeveloperRole = "Frontend";

    // Intersection type
    type Frontend = {
        skills: string[];
        designation1: "Frontend"
    }
    type Backend = {
        skills: string[];
        designation2: "Backend"
    }

    type Fullstack = Frontend & Backend;

    const fullstack : Fullstack = {
         skills: ["HTML", "CSS", "JS", "React", "Express Js", "Node Js"],
         designation1: "Frontend",
         designation2: "Backend"
    }
}