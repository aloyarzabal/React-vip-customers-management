import { useContext, useRef, useState } from "react";
import { MainTaskContext } from "../../App";
import React from "react";

import Card from "../UI/Card";
import classes from "./SearchMenu.module.css";



const SearchMenu = (props) => {
  const [validForm, setValidForm] = useState(true);

  const cnumberRef = useRef(null);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);


  const { findCustomer, clientsList, setCustomerList } = useContext(MainTaskContext);

  const findPersonHandler = (event) => {
    event.preventDefault();

    const introducedCNumber = cnumberRef.current.value;
    const introduceName = nameRef.current.value;
    const introducedPhone = phoneRef.current.value;
    const introducedEmail = emailRef.current.value;

    if (!introducedCNumber && !introduceName && !introducedPhone && !introducedEmail) {
      cnumberRef.current.focus();
      setValidForm(false);
      console.log("Numero no introducido.");
    }
    else {
      setValidForm(true);

      let filteredCustomerList = [...clientsList];

      if(introducedCNumber){
        filteredCustomerList = filteredCustomerList.filter((a) => String(a.customer_number).includes(introducedCNumber)
        );
      }
      if(introduceName){
        const trimmedName = introduceName.trim().toLowerCase();
        filteredCustomerList = filteredCustomerList.filter((a) => (a.name.toLowerCase()).includes(trimmedName));
      }
      if(introducedPhone){
        filteredCustomerList = filteredCustomerList.filter((a) => a.phone.includes(introducedPhone));
      }
      if(introducedEmail){
        filteredCustomerList = filteredCustomerList.filter((a) => a.email.includes(introducedEmail));
      }
      
      setCustomerList(filteredCustomerList);

      cnumberRef.current.value = '';
      nameRef.current.value = '';
      phoneRef.current.value = '';
      emailRef.current.value = '';
    }
  }

  const formClasses = `${classes.form} ${validForm ? '' : classes.incorrectData}`;

  return (
    <Card>
      <h2>Find</h2>
      {findCustomer && <form className={formClasses} >
        <input type="text" ref={cnumberRef}></input>
        <label>Client number</label>
        <input type="text" ref={nameRef}></input>
        <label>Name</label>
        <input type="text" ref={phoneRef}></input>
        <label>Phone</label>
        <input type="text" ref={emailRef}></input>
        <label>E-mail</label>

        {!validForm && <p>At least one field has to be introduced!</p>}

        <div className={classes.actions}>
          <button className={classes.find} onClick={findPersonHandler} >Find</button>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
        </div>

      </form>}
    </Card>
  );
};

export default SearchMenu;
