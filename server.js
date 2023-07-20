const express = require("express");
const app = express();
const PORT = 8000;

const pokemon = {
  lugia: {
    type: "Psychic/flying",
  },
  gengar: {
    type: "Ghost/poison",
  },
  charizard: {
    type: "Fire/flying",
  },
  swampert: {
    type: "Water/ground",
  },
  unknown: {
    type: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const pokeName = req.params.name.toLowerCase();
  if (pokemon[pokeName]) {
    res.json(pokemon[pokeName]);
  } else {
    res.json(pokemon["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Good job port ${PORT} is running smoothly!`);
});
