const players = [
  { id: 1, name: "Александр", scorePoints: 100 },
  { id: 2, name: "Екатерина", scorePoints: 150 },
  { id: 3, name: "Михаил", scorePoints: 120 },
  { id: 4, name: "Ольга", scorePoints: 80 },
  { id: 5, name: "Владимир", scorePoints: 200 },
  { id: 6, name: "Татьяна", scorePoints: 90 },
  { id: 7, name: "Дмитрий", scorePoints: 110 },
  { id: 8, name: "Наталья", scorePoints: 130 },
  { id: 9, name: "Иван", scorePoints: 170 },
  { id: 10, name: "Анна", scorePoints: 160 },
];

// сразу присвоим счет первого объекта - будем с ним сравнивать все остальные перебором
let score = players[0].scorePoints;
let bestPlayer = "";

for (index in players) {
  if (players[index].scorePoints > score) {
    bestPlayer = players[index].name;
    score = players[index].scorePoints;
  }
}
console.log(`The best player is ${bestPlayer} with score ${score}`);

