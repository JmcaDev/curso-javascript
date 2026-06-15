let i = 0

do{
  if(i % 3 === 0 && i % 5 === 0){
    console.log(`${i} FIZZBUZZ`)
    i++
    continue
  }

  if(i % 3 === 0){
    console.log(`${i} FIZZ`)
    i++
    continue
  }

  if(i % 5 === 0){
    console.log(`${i} BUZZ`)
    i++
    continue
  }
  i++
}while(i <= 100)