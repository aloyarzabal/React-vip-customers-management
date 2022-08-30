import { useContext } from "react";
import { MainTaskContext } from "../../App";

import Card from "../UI/Card";
import classes from "./SearchMenu.module.css";



const SearchMenu = (props) => {

  const { findCustomer} = useContext(MainTaskContext);

  return (
    <Card>
      <h2>Find</h2>
      {findCustomer && <form className={classes.form} > 
        <input type="text"></input>
        <label>Client number</label>
        <input type="text"></input>
        <label>Name</label>
        <input type="text" ></input>
        <label>Phone</label>
        <input type="text" ></input>
        <label>E-mail</label>
        <div className={classes.actions}>
          <button className={classes.find}>Find</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>}
    </Card>
  );
};

export default SearchMenu;
