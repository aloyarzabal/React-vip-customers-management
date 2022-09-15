import { useState, createContext, useEffect } from "react";

import "./App.css";
import Card from "./Components/UI/Card";
import Header from "./Components/Layouts/Header";
import MainIcons from "./Components/Icons/MainIcons";
import BottomPannel from "./Components/Layouts/BottomPannel";

// const clientsListDUM = [

//   {
//     customer_number: 74139,
//     name: "Susan",
//     surname: "Shandler",
//     second_surname: "Lopez",
//     email: "susanshandler@test.com",
//     sex: 2,
//     phone: "612234183",
//     has_card: false,
//     birthdate: "1995-01-22",
//     accumulated_points: 8,
//     spent_total_money: 218
//   },
//   {
//     customer_number: 62348,
//     name: "Jack",
//     surname: "Smith",
//     second_surname: "Turner",
//     email: "jacksmith@test.com",
//     sex: 1,
//     phone: "645234333",
//     has_card: false,
//     birthdate: "1991-05-23",
//     accumulated_points: 37,
//     spent_total_money: 1328
//   },
//   {
//     customer_number: 13628,
//     name: "Rose",
//     surname: "Martinez",
//     second_surname: "Delgado",
//     email: "rosemartinez@test.com",
//     sex: 2,
//     phone: "624014832",
//     has_card: false,
//     birthdate: "1987-07-12",
//     accumulated_points: 51,
//     spent_total_money: 1728
//   },
//   {
//     customer_number: 25123,
//     name: "Jason",
//     surname: "Clark",
//     second_surname: "Jolie",
//     email: "jasonclark@test.com",
//     sex: 1,
//     phone: "699257381",
//     has_card: false,
//     birthdate: "1956-11-01",
//     accumulated_points: 12,
//     spent_total_money: 429
//   },
//   {
//     customer_number: 81239,
//     name: "Mary",
//     surname: "Jane",
//     second_surname: "Wattson",
//     email: "maryjanewattson@test.com",
//     sex: 2,
//     phone: "677308319",
//     has_card: false,
//     birthdate: "1986-12-09",
//     accumulated_points: 112,
//     spent_total_money: 129
//   },
//   { customer_number: 63718, name: 'Alex', surname: 'Beth', second_surname: 'McAskill-White', email: 'AlexBeth@test.com', sex: 1, phone: '670199057', has_card: 1, birthdate: '01-11-1970', accumulated_points: 483, spent_total_money: 1139 },
//   { customer_number: 82488, name: 'Jan', surname: 'H', second_surname: 'McAskill-White', email: 'JanH@test.com', sex: 1, phone: '638493466', has_card: 1, birthdate: '27-01-1966', accumulated_points: 237, spent_total_money: 1483 },
//   { customer_number: 37875, name: 'Amir', surname: 'Q', second_surname: 'McArthur', email: 'AmirQ@test.com', sex: 1, phone: '631855268', has_card: 0, birthdate: '05-12-1980', accumulated_points: 232, spent_total_money: 237 },
//   { customer_number: 57454, name: 'Donals', surname: 'B', second_surname: 'Mcanich', email: 'DonalsB@test.com', sex: 1, phone: '684208845', has_card: 1, birthdate: '07-11-1980', accumulated_points: 341, spent_total_money: 1461 },
//   { customer_number: 70625, name: 'Toby', surname: 'P', second_surname: 'Mays', email: 'TobyP@test.com', sex: 1, phone: '611803587', has_card: 0, birthdate: '27-12-1972', accumulated_points: 368, spent_total_money: 1770 },
//   { customer_number: 86847, name: 'Laura', surname: 'J', second_surname: 'Maynard', email: 'LauraJ@test.com', sex: 1, phone: '654774170', has_card: 1, birthdate: '13-12-1969', accumulated_points: 2, spent_total_money: 1823 },
//   { customer_number: 45967, name: 'David', surname: 'L', second_surname: 'Maxwell', email: 'FredL@test.com', sex: 2, phone: '645592414', has_card: 1, birthdate: '30-08-1998', accumulated_points: 494, spent_total_money: 254 },
//   { customer_number: 22244, name: 'Michael', surname: 'S', second_surname: 'Maxwell', email: 'MichaelS@test.com', sex: 2, phone: '664376620', has_card: 0, birthdate: '05-12-1992', accumulated_points: 479, spent_total_money: 1610 },
//   { customer_number: 10417, name: 'Tim', surname: 'S', second_surname: 'Maxham', email: 'TimS@test.com', sex: 2, phone: '674140551', has_card: 1, birthdate: '21-01-1998', accumulated_points: 228, spent_total_money: 1348 },
//   { customer_number: 38583, name: 'Tina', surname: 'M', second_surname: 'Matthews', email: 'TinaM@test.com', sex: 2, phone: '611643658', has_card: 1, birthdate: '17-11-2002', accumulated_points: 94, spent_total_money: 1499 },
//   { customer_number: 82961, name: 'Robert', surname: 'T', second_surname: 'Matthew', email: 'RobertT@test.com', sex: 2, phone: '624078034', has_card: 0, birthdate: '16-11-1986', accumulated_points: 181, spent_total_money: 502 },
//   { customer_number: 27213, name: 'Nino', surname: 'L', second_surname: 'Masters', email: 'NinoL@test.com', sex: 1, phone: '696814205', has_card: 0, birthdate: '16-12-1990', accumulated_points: 471, spent_total_money: 461 },
//   { customer_number: 67530, name: 'Lee', surname: 'N', second_surname: 'Masters', email: 'LeeN@test.com', sex: 2, phone: '668893746', has_card: 0, birthdate: '30-08-2000', accumulated_points: 161, spent_total_money: 216 },
//   { customer_number: 79467, name: 'Tim', surname: 'M', second_surname: 'Martinez', email: 'TadM@test.com', sex: 1, phone: '660590468', has_card: 0, birthdate: '22-02-1983', accumulated_points: 440, spent_total_money: 1960 },
//   { customer_number: 27967, name: 'Gloria', surname: 'E', second_surname: 'Martinez', email: 'GloriaE@test.com', sex: 1, phone: '665386636', has_card: 1, birthdate: '23-01-1970', accumulated_points: 102, spent_total_money: 1232 },
//   { customer_number: 71967, name: 'Fred', surname: 'A', second_surname: 'Martin', email: 'FredA@test.com', sex: 2, phone: '610518389', has_card: 0, birthdate: '04-12-1979', accumulated_points: 298, spent_total_money: 1810 },
//   { customer_number: 55055, name: 'John', surname: 'R', second_surname: 'Martin', email: 'JohnR@test.com', sex: 2, phone: '677130269', has_card: 0, birthdate: '04-12-1979', accumulated_points: 479, spent_total_money: 1836 },
//   { customer_number: 57135, name: 'David', surname: 'I', second_surname: 'Martin', email: 'DavidI@test.com', sex: 1, phone: '678525791', has_card: 1, birthdate: '21-02-1982', accumulated_points: 59, spent_total_money: 541 },
//   { customer_number: 67542, name: 'Michiko', surname: 'A', second_surname: 'Martin', email: 'MichikoA@test.com', sex: 1, phone: '639027747', has_card: 1, birthdate: '31-08-1992', accumulated_points: 484, spent_total_money: 733 },
//   { customer_number: 55942, name: 'Tim', surname: 'V', second_surname: 'Martin', email: 'StuV@test.com', sex: 1, phone: '622478529', has_card: 1, birthdate: '21-02-1993', accumulated_points: 248, spent_total_money: 1811 },
//   { customer_number: 45197, name: 'Scott', surname: 'K', second_surname: 'Mart¡nez', email: 'ScottK@test.com', sex: 2, phone: '643072292', has_card: 1, birthdate: '20-02-1975', accumulated_points: 297, spent_total_money: 808 },
//   { customer_number: 63973, name: 'Lori', surname: 'P', second_surname: 'Marshall', email: 'LoriP@test.com', sex: 2, phone: '608831573', has_card: 1, birthdate: '23-02-1974', accumulated_points: 124, spent_total_money: 708 },
//   {customer_number: 27967,name: 'David',surname: 'B',second_surname: 'Marple',email: 'JyothiB@test.com',sex: 1,phone: '683978835',has_card: 1,birthdate:'01-09-1992',accumulated_points: 271,spent_total_money: 1463},
//   {customer_number: 41904,name: 'Tim',surname: 'Barreiro Gambaro',second_surname: 'Markwood',email: 'CristianBarreiro Gambaro@test.com',sex: 1,phone: '645596371',has_card: 1,birthdate:'17-02-1994',accumulated_points: 368,spent_total_money: 117}


// ];


export const MainTaskContext = createContext(null);

function App() {
  const [clientsList, setClientsList] = useState([]);

  async function fetchCustomersHandler() {
    const response = await fetch('https://1uou5mdl.directus.app/items/Clientes/', {method: 'GET'});
    const data = await response.json();
    setClientsList(data.data);
  }


  useEffect(() => {
    fetchCustomersHandler();
  }, []);

  const [findCustomer, setFindCustomer] = useState(false);
  const [checkStats, setCheckStats] = useState(false);
  const [newExpense, setNewExpense] = useState(false);
  const [newCustomer, setNewCustomer] = useState(false);
  const [customerList, setCustomerList] = useState(clientsList);


  console.log('Estados en la app principal actualizados.')

  const mainTaskContext = {
    setNewExpense, newExpense,
    setNewCustomer, newCustomer,
    setFindCustomer, findCustomer,
    setCheckStats, checkStats,
    setCustomerList, customerList,
    clientsList
  }

  return (
    <MainTaskContext.Provider value={mainTaskContext}>

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
