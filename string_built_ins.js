// String built in methods!!

// replace() - returns a new string with first occurrence matches of a pattern replaced by a replacement

console.log('---------Replace---------');
const str = 'My Dog jumped on the bed. My dog is a bad Dog';

const newString = str.replace(/[Dd]{1}og/g, 'cat');

console.log(newString);

console.log();

console.log('---------To UpperCase---------');

console.log(str.toUpperCase());

console.log();
console.log('---------Substring---------');
// syntax: str.substring(indexStart[, indexEnd]); // indexEnd non inclusive

console.log(str.substring(2, 15)); // dog jumped o 

// trim
console.log();
console.log('---------Trim---------');

let externalData = [
    {
        title:"Woah, this is not good!      ", //extra white spaces at the end
        author:"Morgan G Scott    "
    },
    {
        title:"Chat, am I cooked?      ", //extra white spaces at the end
        author:"Fishnet Garter"
    },
    {
        title:"There must be something else. Aura -10000    ", //extra white spaces at the end
        author:"Skibidi Rizz   "
    }
]

console.log("Raw data:");
console.log(externalData);
// cleaning the data

for(let i = 0; i < externalData.length; i++)
{
    let curTitle = externalData[i].title;
    let curAuthor = externalData[i].author;

    externalData[i].title = curTitle.trim();
    externalData[i].author = curAuthor.trim();
}

console.log("\nAfter cleaning:");
console.log(externalData);

// match

console.log();
console.log('---------Match---------');

const regex = /[a-z]+/g;

const str1 = "akhjfikalhf1231kjskgdjb";

console.log(str1.match(regex));

