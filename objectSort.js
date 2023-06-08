// The goal with this app is to build a function that takes the given array and
// returns an object. The object has an attribute for each different "value", in which those values are an array containing the objects whose value property is that value.

// Example based on below array

// {
//     '46':[{name: "Billy Joel", value: 46},],
//     '72':[{name: "Gwen Stefani", value: 72}, {name: "Brandon Flowers", value: 72}]
// }

const cards = [
    {
        name:"Billy Joel",
        value: 46
    },
    {
        name:"Gwen Stefani",
        value: 72
    },
    {
        name:"Brandon Flowers",
        value: 72
    }
]

//O(n)
function objectSort(arr) {
  let obj = {};
  arr.forEach((card) => {
    if (obj[card.value]) {
      obj[card.value].push(card);
    } else {
      obj[card.value] = [card];
    }
  });
  return obj;
}

//O(n)
function objectSortMap(arr) {
  let map = new Map();
  arr.forEach((card) => {
    if (map.has(card.value)) {
      map.get(card.value).push(card);
    } else {
      map.set(card.value, [card]);
    }
  });
  return Object.fromEntries(map.entries());
}

console.log(objectSort(cards), "OBJECT VERSION");
console.log(objectSortMap(cards), "MAP VERSION");
