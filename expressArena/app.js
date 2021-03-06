const express = require("express");
const morgan = require("morgan");
const app = express();
// This is middleware that requests pass through
// on their way to the final handler
app.use(morgan("dev"));

// a request handler function that responds with some text to GET request to the root URL (/)
//here we are using a HTTP Request object 'res' to send text to the client
//This is the final request handler
app.get("/pizza", (req, res) => {
  res.send("Hello trying to see if this works!");
});

app.get("/pizza/pepperoni", (req, res) => {
  res.send("your pizza is on the way!");
});

app.get("/pizza/pineapple", (req, res) => {
  res.send("we don't serve that here homie");
});

app.get("/echo", (req, res) => {
  const textE = `here are some details of your request:
    Base URL: ${req.baseUrl}
    Host: ${req.hostname}
    Path: ${req.path}
    IP:  ${req.ip}
    Method: ${req.method}
    `;
  res.send(textE);
});

app.get("/queryViewer", (req, res) => {
  console.log(req.query);
  res.end();
});

app.get("/greetings", (req, res) => {
  //1. get values from the request
  const name = req.query.name;
  const race = req.query.race;

  //2. validate the values
  if (!name) {
    //3. name was not provided
    return res.status(400).send("Please provide a name");
  }

  if (!race) {
    //3. race was not provided
    return res.status(400).send("Please provide a race");
  }

  //4. and 5. both name and race are valid so do the processing.
  const greeting = `Greetings ${name} the ${race}, welcome to our great kingdom.`;

  //6. send the response
  res.send(greeting);
});

//assignment//
//#1
app.get("/sum", (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  //set requirements
  if (!a) {
    return res.status(400).send("enter a number");
  }

  if (!b) {
    return res.status(400).send("enter a number");
  }
  //find sum
  let sum = Number(a) + Number(b);

  const result = `The sum of ${a} and ${b} is ${sum}`;

  res.send(result);
});

//#2
app.get("/cipher", (req, res) => {
  const text = req.query.text;
  const shift = req.query.shift;

  if (!text) {
    return res.status(400).send("enter text");
  }

  if (!shift) {
    return res.status(400).send("enter number");
  }

  let shiftNum = Number(shift);

  const baseText = "A".charCodeAt(0);

  const codifyText = text
    .toUpperCase()
    .split("")
    .map(converted => {
      let coded = converted.charCodeAt(0);

      //if text doesn't have a letter from the alphabet then ignore
      if (coded < baseText || coded > baseText + 26) {
        return converted;
      }

      //convert text to code if text is a-z
      let diff = coded - baseText;
      diff = diff + shiftNum;

      //go back to A if text hits Z
      diff = diff % 26;

      //convert coded text back to characters
      const original = String.fromCharCode(coded + baseText);
      return original;
    });
  res.send(codifyText);
});

//#3
// Drill 3
app.get("/lotto", (req, res) => {
  const { numbers } = req.query;

  // validation:
  // 1. the numbers array must exist
  // 2. must be an array
  // 3. must be 6 numbers
  // 4. numbers must be between 1 and 20

  if (!numbers) {
    return res.status(400).send("numbers is required");
  }

  if (!Array.isArray(numbers)) {
    return res.status(400).send("numbers must be an array");
  }

  const guesses = numbers
    .map(n => parseInt(n))
    .filter(n => !Number.isNaN(n) && n >= 1 && n <= 20);

  if (guesses.length != 6) {
    return res
      .status(400)
      .send("numbers must contain 6 integers between 1 and 20");
  }

  // fully validated numbers

  // here are the 20 numbers to choose from
  const stockNumbers = Array(20)
    .fill(1)
    .map((_, i) => i + 1);

  //randomly choose 6
  const winningNumbers = [];
  for (let i = 0; i < 6; i++) {
    const ran = Math.floor(Math.random() * stockNumbers.length);
    winningNumbers.push(stockNumbers[ran]);
    stockNumbers.splice(ran, 1);
  }

  //compare the guesses to the winning number
  let diff = winningNumbers.filter(n => !guesses.includes(n));

  // construct a response
  let responseText;

  switch (diff.length) {
    case 0:
      responseText = "Wow! Unbelievable! You could have won the mega millions!";
      break;
    case 1:
      responseText = "Congratulations! You win $100!";
      break;
    case 2:
      responseText = "Congratulations, you win a free ticket!";
      break;
    default:
      responseText = "Sorry, you lose";
  }

  res.send(responseText);
});

//4
app.get("/video", (req, res) => {
  const video = {
    title: "Cats falling over",
    description: "15 minutes of hilarious fun as cats fall over",
    length: "15.40"
  };
  res.json(video);
});

app.get("/colors", (req, res) => {
  const colors = [
    {
      name: "red",
      rgb: "FF0000"
    },
    {
      name: "green",
      rgb: "00FF00"
    },
    {
      name: "blue",
      rgb: "0000FF"
    }
  ];
  res.json(colors);
});

app.get("/grade", (req, res) => {
  // get the mark from the query
  const { mark } = req.query;

  // do some validation
  if (!mark) {
    // mark is required
    return res.status(400).send("Please provide a mark");
  }

  const numericMark = parseFloat(mark);
  if (Number.isNaN(numericMark)) {
    // mark must be a number
    return res.status(400).send("Mark must be a numeric value");
  }

  if (numericMark < 0 || numericMark > 100) {
    // mark must be in range 0 to 100
    return res.status(400).send("Mark must be in range 0 to 100");
  }

  if (numericMark >= 90) {
    return res.send("A");
  }

  if (numericMark >= 80) {
    return res.send("B");
  }

  if (numericMark >= 70) {
    return res.send("C");
  }

  res.send("F");
});

//3.4 working w express
app.get('/hello', (req, res) => {
  res.status(200).send('Hello, everything was ok!');
});

app.get('/bye', (req, res) => {
  res
    .status(500)
    .send('Oops! I did it again.');
});

app.get('/client-error', (req, res) => {
  res
    .status(400)
    .send('Oops! You did it again.');
});

app.get('/send-info', (req, res) => {
  res
    .status(204)
    .send('Here is some information');
});

app.get('/video', (req, res) => {
  const video = {
    title: 'Cats falling over',
    description: '15 minutes of hilarious fun as cats fall over',
    length: '15.40'
  }
  res.json(video);
});

app.get('/colors', (req, res) => {
  const colors = [
    {
      name: "red",
      rgb: "FF0000"
    },
    {
      name: "green",
      rgb: "00FF00"
    },
    {
      name: "blue",
      rgb: "0000FF"
    },
  ];
  res.json(colors);
});

//the port that we will be using
app.listen(8000, () => {
  console.log("Express server is listening on port 8000!");
});


// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const app = express();
// const playstore = require("./get-apps.js");

// app.use(cors());
// app.use(morgan("common"));

// app.get("/playstore", (req, res) => {
//   const { search = "", sort } = req.query;

//   if (sort) {
//     if (!["rating", "app"].includes(sort)) {
//       return res.status(400).send("Sort can only be by rating or app");
//     }
//   }

//   if (sort == "app" || "rating") {
//     results = playstore.sort((a, b) => {
//       return a[sort] > b[sort] ? 1 : a[sort] < b[sort] ? -1 : 0;
//     });
//   }

//   if (genres) {
//     if (
//       !["Action", "Puzzle", "Strategy", "Casual", "Arcade", "Card"].includes(
//         genres.toLowerCase() && search.toLowerCase())
//     ) {
//       return res
//         .status(400)
//         .send(
//           "Genre must be one of the following: 'Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card'"
//         );
//     }
//     results = playstore.filter((app) => {
//       return app.Genres.toLowerCase() === genres.toLowerCase();
//     });
//   }
//   return res.json(results);
// });

// app.listen(8000, () => {
//   console.log("server running on port 8000");
// });
