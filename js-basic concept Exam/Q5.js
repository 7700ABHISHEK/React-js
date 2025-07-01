let num = [1,2,3,4,5,6];

let even = 0;
let odd = 0;

for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        even++;
    } else{
        odd++;
    }
}

console.log(even, odd);