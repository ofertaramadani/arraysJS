// 1.Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 
// Display the entire list, so that the not yet purchased items go before the bought ones. 
// Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
// Purchasing a product. The function accepts the name of a product and marks it as bought.
// 2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

// Print the receipt out on the screen.
// Counting the sum of the purchase.
// Extracting the most expensive item on the receipt.
// Counting an average item price on the receipt.
// 3. Create an array of css-styles (color, font size, alignment, underline etc.) Each element of the array is an object consisting of two properties: style name and style value, Write a function that accepts the style array and a text and puts out this text via document.write() in the <p></p> tags, adding the style attribute with all the styles in the array to the opening tag.

// 4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.

// Display all the classrooms.
// Display all the classrooms for a given faculty.
// Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
// A function for sorting all the classrooms by number of seats.
// A function for sorting all the classrooms by name in alphabetical order.

1.
let groceries = [ 
    {
        name:'tomatos',amount:200,bought:true
    },
    {
        name:'pasta',amount:5,bought:true
    },
    {
        name:'cheese',amount:5,bought:false
    },
    {
        name:'chocolate',amount:10,bought:false
    }
];
document.write(`Lista:<br>`);
for(let i=0;i<groceries.length;i++){
    document.write(`${groceries[i].name},${groceries[i].amount},${groceries[i].bought} <br>`);
}
function addPurchase(name,amount){
    let exist=false;
    for(let i=0;i<groceries.length;i++){
        if(name == groceries[i].name){
            groceries[i].amount += amount;
            exist=true;
            break;
        }
    }
    if(!exist){
        groceries.push( {name:name,amount:amount,bought:false});
    }
}
addPurchase('CocaCola',10);
addPurchase('chocolate',5);
document.write(`<br><br><br>Lista e re:<br>`);
for(let i=0;i<groceries.length;i++){
    document.write(`${groceries[i].name},${groceries[i].amount} <br>`);
}

function purchase(name){
     for(let i=0;i<groceries.length;i++){
        if(groceries[i].name == name){
            groceries[i].bought = true;
        }
     }
}
purchase(cheese);


2.
let receipt = [
    {
        name:'Jeans',amount:2,price:20
    },
    {
        name:'Hoodie',amount:4,price:35
    },
    {
        name:'Snickers',amount:3,price:60
    }
];
document.write(`<br>Shopping list<br>`);
for(let i=0;i<receipt.length;i++){
    document.write(`${receipt[i].name},${receipt[i].amount},${receipt[i].price} <br>`);
}

function sumOfItems(lista){
    let sum=0;
    for(let i=0;i<lista.length;i++){
        sum += lista[i].price;
    }
    return sum;
}
console.log('Total sum:',sumOfItems(receipt));

function mostExpensive(lista){
    let MAX=0;
    for(let i=0;i<lista.length;i++){
        MAX = Math.max(lista[i].price);
    }  
    for(let i=0;i<lista.length;i++){
        if(lista[i].price == MAX){
            console.log("Most expensive:",lista[i].name);
        }
    }
}
mostExpensive(receipt);

function average(lista){
    let sum=0;
    for(let i=0;i<lista.length;i++){
        sum += lista[i].price;
    }
    return sum/lista.length;
}
console.log('Average:',average(receipt));


3.
let css = [
    {
        color:'color',
        color_value:'red'
    },
    {
        font_size:'font-size',
        font_value:20
    },
    {
        align_self:'align-self',
        align_value:'center'
    },
    {
        font_width:'font-width',
        width_value:30
    }
];

function style(css,text) {
    document.write(`<p style="${css.color}:${css.color_value};${css.font_size}:${css.font_value}px;${css.align_self}:${css.align_value};${css.font_width}:${css.width_value}px;">${text}</p>`)
}
style(css,'Hello World!!!');

let classrooms = [
    {
        name:'Sisteme operative',
        seats:13,
        faculty:'FIEK'
    },
    {
        name:'Sinjale dhe sisteme',
        seats:10,
        faculty:'FIEK'
    },
    {
        name:'Komunikimi njeri-kompjuter',
        seats:15,
        faculty:'FSHMN'
    },
    {
        name:'Siguria ne internet',
        seats:18,
        faculty:'FSHMN'
    },
];

function displayClassrooms(lista){
    lista.forEach(element => {
        document.write(`<p>${element.name},${element.seats},${element.faculty}</p>`)
    });
}
displayClassrooms(classrooms);

function displayGivenFaculty(lista,faculty){
    lista.forEach(element => {
        if(element.faculty == faculty){
            document.write(`<p>${element.name}</p>`)
        }
    });
}
displayGivenFaculty(classrooms,'FIEK');

let group = {
    name:'Sinjale dhe sisteme',
    seats:10,
    faculty:'FIEK'
};
function fits(lista,group){
    for(let i=0;i<lista.length;i++){
        if(lista[i].seats+group.seats <= 20){
            console.log("Class thats fits them:",lista[i].name);
        }
    }
}
fits(classrooms,group);


