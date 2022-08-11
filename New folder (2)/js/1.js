let obj = {
    name: 'Bohdan',
    lastName: 'Kletskyi',
    Worker: {
        age: '26',
        job: '2 years'
    }
}


function rec(obj){
const newObj = {}
for (let key in obj){
    if(typeof obj[key] === 'object'){
          newObj[key] = rec(obj[key])
    }
    else{ newObj[key] = obj[key]

    }
}
return newObj
}


console.log(rec(obj));