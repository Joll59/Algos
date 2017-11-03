 let id= [];
function quickFind(N){
  for(let i=0; i< N; i++){
    id[i] = i
  }
}

function connected(p,q){
  return id[p] == id[q];
}

function union(p,q){
  let pid=id[p]
  let qid=id[q]
  for (let i=0; i<id.length; i++){
    id[i] == pid ? id[i]=qid : null
  }
}

quickFind(10)
console.log(id)
console.log(connected(2,3))
union(2,3)
console.log(id)
console.log(connected(2,3))


// NOTE: Big O is Quadratic (SLOW) as the size of array gets wider(Breadth of tree nodes spreads.).
