// Find the number of occurances of an a given number in an integer array
function ArrayOccurance(nums, k)
{
    let count = 0;
    for (i=0; i<nums.length; i++)
    {
        if (nums[i] == k)
        {
            count++;
        }
    }
    return count;
}
// Main Block
function main()
{
    const numbers = [2,4,5,2,1,2];
    const l = 2;
    const countOccurance = ArrayOccurance(numbers, l);
    console.log(`The number of occcurance of ${l} is: ${countOccurance}`);
}
main();