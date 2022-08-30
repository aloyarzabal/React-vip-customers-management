import { useContext } from "react";
import { MainTaskContext } from "../../App";

import IconCard from "./IconCard";
import Icon from "./Icon";
import Card from "../UI/Card";


import birthdayIcon from "../../Assets/birthday.png";
import crownIcon from "../../Assets/crown.png";
import pointsIcon from "../../Assets/exchange.png";

const SecondaryIcons = (props) => {

  const { checkStats, customerList, setCustomerList, setCheckStats  } = useContext(MainTaskContext);

  const bestCustomerHandler = () => {
    setCustomerList(customerList.sort((a, b) => b.spent_total_money - a.spent_total_money));
    setCheckStats(false);
  }

  const bestPointsHandler = () => {

    setCustomerList(customerList.sort((a, b) => b.accumulated_points - a.accumulated_points));
    setCheckStats(false);
  }


  return (
    <Card>
      <h2>Stats</h2>
      {checkStats && <IconCard>
        <Icon name={'Best Customers'} icon={crownIcon} onClick={bestCustomerHandler} />
        <Icon name={'Points'} icon={pointsIcon} onClick={bestPointsHandler} />
        <Icon name={'Birthday'} icon={birthdayIcon} />
      </IconCard>}
    </Card>
  );
};

export default SecondaryIcons;
