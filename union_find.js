/* Weighted quick-union.
・Modify quick-union to avoid tall trees.
・Keep track of size of each tree (number of objects).
・Balance by linking root of smaller tree to root of larger tree. */

let id = [];
let sz = []; // keeps track of size of each node
function unionFind(N) {
    for (let i = 0; i < N; i++) {
        id[i] = i;
        sz[i]= 1;
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
  if(i == j){return;}
  if(sz[i] < sz[j])
  {id[i]=j; sz[j]+=sz[i]}
  else
  {id[j]=i; sz[i]+=sz[j]}
}

unionFind(10)
console.log(id)
console.log(connected(2, 3))
union(2, 3)
console.log(id)
console.log(connected(2, 3))

// NOTE: Improved Quick_Union(takes constant time given roots) BigO: (1)
