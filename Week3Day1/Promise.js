// Find the number of occurances of an a given number in an integer array
let browser = "Chrome";
function fetchDataFromDatabase()
{
    return new Promise((resolve, reject) => 
    {
        setTimeout( () => {
            const data = true;
            if (data)
            {
                resolve(`Data fetched successfully!`);
            }
            else
            {
                reject('Data not found!"');
            }            
        }, 2000);
    }
)}

// Main Block
function main()
{
    console.log(`Fetching data from database...`)
    fetchDataFromDatabase()
    .then( (result) => {
        console.log(`Success ${result}`);
    })
    .catch( (error) => {
        console.log(`Failure ${error}`);
    })
}
main();