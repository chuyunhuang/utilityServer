const getSum = (arr) =>{
  let newArr = parseArr(arr)
  let sum = 0;
  for (let i = 0; i < newArr.length; i++){
    sum = sum + newArr[i]
  }
return sum
}

const parseArr = (arr) =>{
  let result =[]
  for (let i = 0; i < arr.length; i++){
  result.push(parseInt(arr[i]))
  }
  return result
}

const sumString = (arr) =>{
  return arr.join(' + ')  
}

const getMultiply =(arr)=>{
  let newArr= parseArr(arr)
  let product = 1;
  for(let i = 0; i < newArr.length; i++){
    product = product * newArr[i]
    
  }
return product
}

//const multiply = (arr) => arr.reduce((sum, a) => sum*parseInt(a))

const productString =(arr)=>{
  return arr.join(' * ')
}

module.exports = {
  getSum,
  parseArr,
  sumString,
  getMultiply,
  productString
} 

//console.log(multiply(2,3,4))