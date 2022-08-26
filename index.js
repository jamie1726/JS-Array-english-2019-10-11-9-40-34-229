// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
Array.isArray(a);
Array.isArray(b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
a.map(function(x) { 
    return x * 2; 
});

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
colors.join(" ");
colors.join("+");
colors.join(",");

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
a.sort(function(a, b) {
    return b - a;
});

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mostFrequent = 1;
let number = 0;
let item;
for (let i=0; i<a.length; i++)
{
        for (let j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                number++;
                if (mostFrequent<number)
                {
                  mostFrequent=number; 
                  item = a[i];
                }
        }
        number=0;
}

console.log(item);