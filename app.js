function getNumberRecord(){
    function getRecordWithNumbers(){
        return "hsjhsdns";
    }
    return getRecordWithNumbers;
}

let fun = getNumberRecord();
console.log(fun());



//parameter passing

function outerFuntion(x){
    return function innerFuntion(y){
        console.log(x+y);
        
    }
}

let innerFun=outerFuntion(10);
//innerFun(20);



function createCounter(){
    count=0;
    return{
        increment:()=>++count,
        decrement:()=>--count,
        getCount:()=>count
    }
}
let counterApp=createCounter();

/*console.log(counterApp.increment());
console.log(counterApp.increment());
console.log(counterApp.increment());
console.log(counterApp.decrement());
console.log(counterApp.getCount());*/

function calculator(){
    return{
        add:(x,y)=>x+y,
        sub:(x,y)=>x-y,
        div:(x,y)=>x/y,
        mul:(x,y)=>x*y
    }
}

let cal=calculator();
console.log(cal.add(4,2));
console.log(cal.sub(10,5));
console.log(cal.div(8,4));
console.log(cal.mul(2,3));


