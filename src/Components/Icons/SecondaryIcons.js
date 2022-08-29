import { useContext } from "react";

import IconCard from "./IconCard";
import Icon from "./Icon";
import Card from "../UI/Card";
import { MainTaskContext } from "../../App";

import birthdayIcon from "../../Assets/birthday.png";
import crownIcon from "../../Assets/crown.png";
import pointsIcon from "../../Assets/exchange.png";

const SecondaryIcons = (props) => {

  const {checkStats} = useContext(MainTaskContext);
  return (
    <Card>
      <h2>Stats</h2>
      {checkStats && <IconCard>
        <Icon name={'Best Customers'} icon={crownIcon}/>
        <Icon name={'Points'} icon={pointsIcon}/>
        <Icon name={'Birthday'} icon={birthdayIcon}/>
      </IconCard>}
    </Card>
  );
};

export default SecondaryIcons;
