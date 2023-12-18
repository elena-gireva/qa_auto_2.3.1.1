const players = [
  { id: 1,
    name: "Ivan",
    scorePoints: 4500
  },
  { id: 2,
    name: "Petr",
    scorePoints: 23600
  },
  { id: 3,
    name: "Vadim",
    scorePoints: 3433
  },
  { id: 4,
    name: "Olga",
    scorePoints: 2356
  }
];

// сразу присвоим счет первого объекта - будем с ним сравнивать все остальные перебором
let score = players[0].scorePoints;
let bestPlayer = "";

for (index in players) {
  if (players[index].scorePoints > score) {
    bestPlayer = players[index].name;
    score = players[index].scorePoints;
    console.log(`The best player is ${bestPlayer} with score ${score}`);
  }
}


