// Conditionals and loops!!

// conditionals - if else, if else if, nested if

const num1 = 20;
const num2 = 10;

const jsExpression = num1 > num2;

if(jsExpression){
    console.log('Expression is true');
}
else{
    console.log('Expression is false');
}

if(jsExpression){
    console.log('Expression is true');
}
else if(num1 > 0){
    console.log('Expression is false and the first number is positive');
}
else{
    console.log('Expression is false, first number is <=0');
}

// switch case
const colors = ['red','orange','blue','green'];

const randomIdx = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIdx];

switch(randomColor)
{
    case 'red':
        console.log('Color is red');
        break;
    case 'orange':
        console.log('Color is orange');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    case 'green':
        console.log('Color is green');
        break;
    default: 
        console.log('No color selected');
}


// Looping!!!

const arr1 = [1,2,3,4,5];

for(let i = 0; i < arr1.length; i++)
{
    console.log(arr1[i]);
}

// Looping through objects

const blogPosts = [{
    title: 'GenAI: Ethical Considerations',
    author: 'Chiranjeevi BS',
    publishDate: 'June 1, 2024'
},
{
    title: 'JavaScript: Worth it?',
    author: 'Clarke John',
    publishDate: 'May 16, 2023'
},
{
    title: 'Slim Shady: Is he back?',
    author: 'Eminem',
    publishDate: 'June 5, 2024'
}
]

for(let i = 0; i < blogPosts.length; i++)
{
    const title = blogPosts[i].title;
    const author = blogPosts[i].author;
    const publishDate = blogPosts[i].publishDate;
    
    console.log();
    console.log('----------Blog no.'+(i+1)+'------------')
    console.log('Title:', title);
    console.log('Written by:', author);
    console.log('Published on:', publishDate);
    
}