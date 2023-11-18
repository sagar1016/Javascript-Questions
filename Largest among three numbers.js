// Q5 Programme to find largest among three numbers

    let num1 = 4 , num2 = 9,num3 = 6;
    let max = num1;
    if(num1 >= num2 && num1 >= num3)
    {
        console.log(`The max number is ${num1}`)
    }
    else if(num2 >= num1 && num2 >= num3){
        console.log(`The max number is ${num2}`)
        
    }
    else{
        console.log(`The max number is ${num3}`)  
    }