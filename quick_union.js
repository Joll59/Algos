let id = [];
function quickUnion(N) {
    for (let i = 0; i < N; i++) {
        id[i] = i;
    }
}

function root(i) {
  while(i != id[i]){
    i = id[i]
  }
  return i;
}

function connected(p, q) {
    return root(p) == root(q);
}

function union(p, q) {
  let i = root(p)
  let j = root(q)
  id[i] = j;
}

quickUnion(10)
console.log(id)
console.log(connected(2, 3))
union(2, 3)
console.log(id)
console.log(connected(2, 3))

// NOTE: Big O is Linear cost increases due to the the depth of tree.(SLOW)
