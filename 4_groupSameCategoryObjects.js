const data = [
  { id: 1, category: "CategoryA", name: "Item 1", value: 10 },
  { id: 2, category: "CategoryB", name: "Item 2", value: 20 },
  { id: 3, category: "CategoryA", name: "Item 3", value: 15 },
  { id: 4, category: "CategoryC", name: "Item 4", value: 30 },
  { id: 5, category: "CategoryB", name: "Item 5", value: 25 },
];

const res = data.reduce((acc, currentValue) => {
  if (!acc[currentValue.category]) {
    acc[currentValue.category] = [];
  }
  acc[currentValue.category].push(currentValue);
  return acc;
}, {});

console.log(res);
