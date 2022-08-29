import { useState, createContext } from "react";

import "./App.css";
import Card from "./Components/UI/Card";
import Header from "./Components/Layouts/Header";
import MainIcons from "./Components/Icons/MainIcons";
import BottomPannel from "./Components/Layouts/BottomPannel";

export const MainTaskContext = createContext(null
//   {
//   addExpense: false,
//   addNewCustomer: false,
//   ctxFindCustomer: () =>  {},
//   ctxCheckStats: () =>  {}
// }
);

function App() {

  const [findCustomer, setFindCustomer] = useState(false);
  const [checkStats, setCheckStats] = useState(false);
  const [newExpense, setNewExpense] = useState(false);
  const [newCustomer, setNewCustomer] = useState(false);

  const mainTaskContext = {
    setNewExpense, newExpense,
    setNewCustomer,
    setFindCustomer, findCustomer,
    setCheckStats, checkStats
  }

  return (
    <MainTaskContext.Provider value={ mainTaskContext }>
      
      console.log(`Find Customer ${findCustomer}`);
        console.log(`CheckStats ${checkStats}`);
      <div className="App">
        <Header />
        <Card>
          <MainIcons />
          <BottomPannel />
        </Card>
      </div>
    </MainTaskContext.Provider>
  );
}

export default App;
