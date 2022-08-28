import IconCard from "./IconCard";
import Icon from "./Icon";
import Card from "../UI/Card";

import starIcon from "../../Assets/estrellaAmarilla.png"

const SecondaryIcons = (props) => {
  return (
    <Card>
      <h2>Stats</h2>
      <IconCard>
        <Icon name={'Best Customers'} icon={starIcon}/>
        <Icon name={'Points'} icon={starIcon}/>
        <Icon name={'Birthday'} icon={starIcon}/>
      </IconCard>
    </Card>
  );
};

export default SecondaryIcons;
