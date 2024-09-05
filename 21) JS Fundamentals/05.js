function package(packageType){
    switch(packageType){
        case "express": console.log("item will take 1-2 days"); break;
            case "standard": console.log("item will might take 3-5 days"); break;
                case "overnight" : console.log("item will would be delivered the next day."); break;
                default:console.log("Enter valid package name");
    }
}
package("standard")
package("express")
package("overnight")
package("fullExpress")
