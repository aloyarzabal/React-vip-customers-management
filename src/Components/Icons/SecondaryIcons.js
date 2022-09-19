import { useContext } from "react";
import { MainTaskContext } from "../../App";

import IconCard from "./IconCard";
import Icon from "./Icon";
import Card from "../UI/Card";
import React from "react";


import birthdayIcon from "../../Assets/birthday.png";
import crownIcon from "../../Assets/crown.png";
import pointsIcon from "../../Assets/exchange.png";

const SecondaryIcons = (props) => {

  const { checkStats, customerList, setCustomerList, DUMMY_CUSTOMERS } = useContext(MainTaskContext);

  const bestCustomerHandler = () => {
    
    DUMMY_CUSTOMERS.sort((a, b) => b.spent_total_money - a.spent_total_money);
    setCustomerList([...DUMMY_CUSTOMERS]);  //React does not recognize the "change" as the array is the same (with different values)

  }

  const bestPointsHandler = () => {
    
    DUMMY_CUSTOMERS.sort((a, b) => b.accumulated_points - a.accumulated_points);
    setCustomerList([...DUMMY_CUSTOMERS]); //React does not recognize the "change" as the array is the same (with different values)
  }

  const birthdayHandler = () => {

    let createdDate = new Date();
    let dd = String(createdDate.getDate()).padStart(2, '0');
    let mm = String(createdDate.getMonth() + 1).padStart(2, '0');
    let today = dd + '-' + mm;

    const filteredCustomerList = DUMMY_CUSTOMERS.filter((a) => a.birthdate.includes(today));
    setCustomerList(filteredCustomerList);
  }


  return (
    <Card>
      <h2>Stats</h2>
      {checkStats && <IconCard>
        <Icon name={'Best Customers'} icon={crownIcon} onClick={bestCustomerHandler} />
        <Icon name={'Points'} icon={pointsIcon} onClick={bestPointsHandler} />
        <Icon name={'Birthday'} icon={birthdayIcon} onClick={birthdayHandler} />
      </IconCard>}
    </Card>
  );
};

export default SecondaryIcons;
