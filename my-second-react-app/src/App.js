// Make the package available to your code
import { fraction, add, format } from 'mathjs';
import React, { Component } from "react";
// import moment from "moment";

// import logo from './logo.svg';
// import './App.css';
class App extends Component {
  render() {
  
    const f1 = fraction(4, 7); // the fraction 4/7
    const f2 = fraction(3, 8); // the fraction 3/8
    const f3 = add(f1, f2); // the fraction 53/56
    const formatted_fraction = format(f3, { fraction: 'ratio' });
    
    return(<>
    <h2>4/7 + 3/8 = </h2>
    <p>{formatted_fraction}</p>
    </>
    );
  }
}
    // const right_now = moment();

    // // get a nicely formatted date and time
    // const formatted_right_now = right_now.format(
    //   "dddd, MMMM Do YYYY, h:mm:ss a"
    // );

    // // add 7 days, 4 hours and 32 minutes to the current time
    // right_now.add(7, "days");
    // right_now.add(4, "hours");
    // right_now.add(32, "minutes");

    // // get a nicely formatted date and time for the new time
    // const formatted_later = right_now.format("dddd, MMMM Do YYYY, h:mm:ss a");
    // return (
    //   <div className="App">
    //     <h1>Playing with dates</h1>
    //     <h2>The date and time right now is: </h2>
    //     <p>{formatted_right_now}</p>

    //     <h2>The date and time 7 days, 4 hours and 32 minutes from now is: </h2>
    //     <p>{formatted_later}</p>
    //   </div>
    // );
  

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
