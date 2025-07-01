let num = [1, 2, 2, 3, 4, 4, 5, 2];

let unique = [];

for(let i = 0; i < num.length; i++){
    if(num[i] == num[i+1]){
        unique.push(num[i]);
    }

    if(num[i] != num[i+1]){
        unique.push(num[i])
    }
}

console.log(unique);