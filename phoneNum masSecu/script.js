///for example : 98******09


function massPN(PN){
    let fTwoDig=PN.substring(0,2);
    let lTwoDig=PN.substring(8);
    let maskedDig=PN.substring(2,8).replace(/\d/g,"*");
    
    let maskedPhonrNumber=fTwoDig +maskedDig +lTwoDig;
    return maskedPhonrNumber;
    
}
let number='0987654321'
console.log(massPN(number));
