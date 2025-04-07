// Find the number of occurances of an a given number in an integer array
let browser = "Chrome";
function checkBrowserVersion(callback){

    console.log (`Printing the browser name:`);
    setTimeout(() =>{
        callback(browser);
    },2000)
    
}

function BrowserVersion(browser){
    console.log (`The Browser name is ${browser}`);
}
// Main Block
function main()
{
        checkBrowserVersion(BrowserVersion);
}
main();