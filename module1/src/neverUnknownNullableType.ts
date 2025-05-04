{
    // Nullable type
    const searchName = (value : string | null) => {
        if(value){
            console.log("searching...");
        }
        else{
            console.log("Nothing to search.");
        }    
    }
    searchName('');

    // unknown

    const getSpeedInMeterPerSecond = (value : unknown)=>{
        if(typeof value === "number"){
            const convertedNumber = (value * 1000) / 3600;
            console.log(`Number input: ${convertedNumber}`);
        }
        else if(typeof value === "string"){
            const convertedNumber = (parseFloat(value) * 1000) / 3600;
            console.log(`String input: ${convertedNumber}`);
        }else{
            console.log("Wrong input");
        }
    }
    getSpeedInMeterPerSecond(22)

    // Never type

    const sendError = (msg : string) : never => {
        throw new Error(msg);
    }
    sendError("Failed to send msg.");
    
}