
let package = "stander";

switch (package) {
    case "stander": 
        console.log("Your package will be delivered in next 3-5 Days");
        break;
    case "express":
        console.log("Your package will be delivered in next 1-2 Days");
        break;
    case "overnight":
        console.log("Your package will be delivered in next Days");
        break;
    default:
        console.log("No package selected");
        break;
}