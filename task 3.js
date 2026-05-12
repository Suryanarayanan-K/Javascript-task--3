
// Looping Statements

// 1. Print Numbers


for(let p=1 ; p <=20; p++){
    console.log(p);
    
}

// 2. Odd Numbers

for(let s= 1 ; s <=50; s++){
    if(s%2==1){
        console.log("Odd,"+s);
        
    }
}

// 3. Multiplication Table
 
for(let k= 1 ; k <=10 ; k++){
console.log(`1*${7}=${7*k}`);

}


// 4. Reverse Counting

let value = 20

while(value >= 0){
    console.log(value);
    
value--
    
}


// 5. Sum of Numbers

let sum=0

for(let i = 1; i<=100 ; i++){
    sum +=i
}
console.log("Total Sum:",sum);



// 6. Array Loop

let arr 
for(let arr of ["kiwi","Pineapple","Papaya","Grapes"]){


    console.log(arr);
}


// 7. Count Even Numbers
    
for(let d =1; d<=50; d++){
    if(d%2==0){
        console.log("Even",+d);
        
    }
    
}

// 8. Star Pattern

for(let o=1; o<=5; o++){
    let pattern = "";

    for(let j=1 ; j<=o; j++){
        pattern += "*";
    }
    console.log(pattern);
} 


// Functions
// 9. Simple Function

function welcome(){
    console.log("Welcome to javascript");
    
}
welcome()


// 10. Function with Parameter

function greet(name){
    console.log("Hello" + name);
    
}
greet("Surya")


// 11. Add Two Numbers

function add(a,b){
    return a+b
}
console.log(add(10,20))


// 12. Salary Bonus

let emp = {
    salary :  50000,
    bonus :  5000}


function getObj(bonus){
    
    console.log(emp.salary+ bonus);
    
    
}
getObj(5000)


// 13. Object Loop

let Obj = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
}

for(let z in Obj){
    console.log(z ,Obj[z]);
    
}


// 14. Find Largest Number


function largest(a, b){

if(a > b){
    return a;
}
     else{
        return b;

     }}
     console.log(largest(10, 50));
     


//15.Mini Employee Task

const employee = {
    Name : "Surya" ,
    department : "IT",
    Salary : 100000,


};

function employeedetails(emp, bonus){
    let fianlSalary = emp.Salary + bonus;


console.log("Employee Name:", emp.Name);
console.log("Department:", emp.department);
console.log("Salary:", emp.Salary);
console.log("Salary after bonus :", fianlSalary);

}

employeedetails(employee, 5000);