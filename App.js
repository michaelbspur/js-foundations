import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { getReportCache, parseOutMonthlyTransactionsReport} from "./logic/project2.js";
import MonthlyReportContainer from "./components/Report/report";
import About from "./components/pages/About.js";


function App() {
  const urls = ["january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december", ""
  ];
  let [data, updateData] = React.useState(null);
  getReportCache().then(result => {
    if (data === null || data === undefined) {
      updateData(parseOutMonthlyTransactionsReport(result).months);
    }
  }).catch(err => console.log(err));

  function allMonths(data, urls) {
    let children = [];
    for (let i = 0; i < 12; i++) {
      children.push(<MonthlyReportContainer key={`MonthlyReportContainer-${i}`} month={data != null ? data[i] : null} />);
    }
    return React.createElement("div", null, children);
  }
  function allRoutes(data, urls) {
    let children = [];
    for (let i = 0; i < 13; i++) {
      if (i === 12) {
        children.push(allMonths(data));
      }
      children.push(
        React.createElement("Route", { "path": `/${urls[i]}` },
          <MonthlyReportContainer month={data != null ? data[i] : null} />
        ));
    }
    return children;
  }
  return (
    <>
      <div id="Content-Container">
        <Router>
        <Route path="/about" exact component={About} />
        <Navbar />
        
        
          <div className="home">
              <h2>Monthly Transaction Report</h2>
              <p>This program compiles a yearly report seperated by each month.</p>

            <h3>January</h3>
            <h4>Total Price: $1896</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance</p>


            <h3>February</h3>
            <h4>Total Price: $2106</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Eating out</p>

            <h3>March</h3>
            <h4>Total Price: $2218</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Vacation, Flat tire</p>

            <h3>April</h3>
            <h4>Total Price: $1896</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance</p>

            <h3>May</h3>
            <h4>Total Price: $2605</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Eating out, Vacation, Concert</p>

            <h3>June</h3>
            <h4>Total Price: $1956</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance</p>

            <h3>July</h3>
            <h4>Total Price: $3631</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Fireworks, Eating out, Birthday Gift </p>

            <h3>August</h3>
            <h4>Total Price: $1896</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance</p>

            <h3>September</h3>
            <h4>Total Price: $5208</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Movers, Furniture, Eating out, Party</p>

            <h3>October</h3>
            <h4>Total Price: $1936</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Halloween Candy</p>

            <h3>November</h3>
            <h4>Total Price: $2316</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Thanksgiving meal, shopping</p>

            <h3>December</h3>
            <h4>Total Price: $4762</h4>
            <h5>This months spending:</h5>
            <p>Rent/Morgage, Groceries, Gym membership, Subscriptions, Insurance, Christmas Gifts, Plane Tickets</p>


          </div>
          <div id="Content-Container">
            <Switch>
              {allRoutes(data, urls)}
            </Switch>

          </div>
        
        </Router>
        
      </div>
    </>
  );
}
export default App;
