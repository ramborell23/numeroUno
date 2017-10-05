
var readline = require('readline')


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function stuff( str){
    var arr = str.split(' ')
    var total =Number(arr[1])
    
    var op = arr[0]
    var nums = arr.slice(1)
    if ( op ==='+' ){
        for (var i =2;i<arr.length;i++){
            if (!isNaN(Number(arr[i]))){
                 (total += (arr[i]))
            }else{
                console.log('The operation is invalid')
            }           
        }
        console.log(total)
    } else if(op ==='-'){
        for (var i =2;i<arr.length;i++){
            if (!isNaN(Number(arr[i]))){
                total -= (arr[i])
            }else{
                console.log('The operation is invalid')
            } 
        }
        console.log(total)
    }else if(op ==='*'){
        for (var i =2;i<arr.length;i++){
            if (!isNaN(Number(arr[i]))){
                total *= (arr[i])
            }else{
                console.log('The operation is invalid')
            } 
        }
        console.log(total)
    }else if(op ==='/'){
        for (var i =2;i<arr.length;i++){
            if (!isNaN(Number(arr[i]))){
                total /= (arr[i])
            }else{
                console.log('The operation is invalid')
            } 
        }
        console.log(total)
    }else{
        console.log('The operation is invalid')
    } 
}


rl.on('line', function (input) {
    stuff(input)

})