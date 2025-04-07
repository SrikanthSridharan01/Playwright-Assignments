// Find the number of occurances of an a given number in an integer array
function NumberSum(num)
{
    let sum = 0;
    for (i=1; i<=num; i++)
    {
        sum = sum+i;
    }
    return sum;
}
// Main Block
function main()
{
    const number = 10;
    const CumulativeSum = NumberSum(number);
    console.log(`The cumulative sum of ${number} is: ${CumulativeSum}`);
}
main();