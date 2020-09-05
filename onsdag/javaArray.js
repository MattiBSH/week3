console.log("Hello World, i Know how to count);

[1,2,3,4].forEach(n=>console.log(n));



var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all=boys.concat(girls);
var string=all.join(",");
var hyphen=all.join("-");
all.push("lone","gitte");
all.unshift("Hans","Kurt");
all.shift();
all.pop();
console.log(all);
all.splice(3,2);
console.log(all);
all.reverse();
all.sort();
var uppercase1 = all.map(x => x.toUpperCase() );
console.log(uppercase1);
const filterItems = (arr, query) => {
  return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
}
console.log(filterItems(all, 'il'))

