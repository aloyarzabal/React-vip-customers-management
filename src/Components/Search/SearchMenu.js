import Card from "../UI/Card";

import classes from "./SearchMenu.module.css";

const SearchMenu = (props) => {
  return (
    <Card>
      <h2>Find</h2>
      <form className={classes.form}>
        <label>Client name</label>
        <input type="text"></input>
        <label>Name</label>
        <input type="text"></input>
        <label>Phone</label>
        <input type="text"></input>
        <label>E-mail</label>
        <input type="text"></input>
        <div className={classes.actions}>
          <button className={classes.find}>Find</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default SearchMenu;
