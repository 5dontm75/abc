//if else

let age=prompt('Enter the age');
if(age>=16&&age<=24){
    console.log('eligible for driving');
}
else{
    console.log('not eligible for driving');
}

//ternary operator
 age=prompt('enter age');

age>=21? console.log('eligible for driving'):console.log('not eligible for driving');

//for loop
let number=prompt("enter the number");
for(i=1;i<=10;i++)
{
    console.log(i*number);
}

//even or odd number by using for loop
for(i=1;i<=10;i++){
    if(i%2==0)
    {
        console.log(i,"is even number");
    }
    else{
        console.log(i,"is odd number");
    }
}