//  var formPassword=document.getElementById("password");
//  var formEmail=document.getElementById("email");
//  var form=document.getElementById("form");
//  var setError=document.querySelector("#error");

// function validation(){
//     //password
// var passCode=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
// if(passCode.test(formPassword))
// {
// console.log("successfully")
// }
// else{
//     console.log("unsuccessfully")
// }
// // email
// var eCode=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
// if(eCode.test(formEmail))
//     {
//     console.log("email successfully")
//     }
//     else{
//         console.log("unsuccessfully")
//     }

//  }
// function errorOccure(){
//     message=" ";
//     if(formEmail != "" && formPassword != " "){
//     message.push("field is empty");
//     }
//     else if(formPassword !="password"){
//     message.push("password is not accept")
//     }
// }
// const months=['January','February','March','April','May','June','December']
// const filter= months.filter((mHai)=>{
//     return mHai.toLocaleUpperCase().includes('M');
// })
// console.log(filter);


var num=[3,5,6,7,7,8,9,12]
var even=[]
var odd=[]
while( num.length > 0){
    num=num.shift()
    if (num % 2 == 0){
        even.push(num);

    }
    else{
        odd.push(num);
    }
    }
console.log(num)
console.log(even)

console.log(odd)


