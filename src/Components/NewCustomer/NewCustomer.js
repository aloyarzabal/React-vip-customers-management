import { useContext, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from "../Search/SearchMenu.module.css";
import { MainTaskContext } from "../../App";

const NewCustomer = (props) => {

    const [validForm, setValidForm] = useState(true);

    const { findCustomer, DUMMY_CUSTOMERS, setCustomerList } = useContext(MainTaskContext);

    const cnumberRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);

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

            let filteredCustomerList = [...DUMMY_CUSTOMERS];

            if (introducedCNumber) {
                filteredCustomerList = filteredCustomerList.filter((a) => String(a.customer_number).includes(introducedCNumber)
                );
            }
            if (introduceName) {
                const trimmedName = introduceName.trim().toLowerCase();
                filteredCustomerList = filteredCustomerList.filter((a) => (a.name.toLowerCase()).includes(trimmedName));
            }
            if (introducedPhone) {
                filteredCustomerList = filteredCustomerList.filter((a) => a.phone.includes(introducedPhone));
            }
            if (introducedEmail) {
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

    return <Modal onClose={props.onClose}>
        <form className={formClasses}>
            <h3>New customer data</h3>
                <input type="text" ref={cnumberRef}></input>
                <label>Client number</label>
            <input type="text" ref={nameRef}></input>
            <label>Name</label>
            <input type="text"></input>
            <label>Surname</label>
            <input type="text"></input>
            <label>Second Surname</label>
            <input type="text" ref={phoneRef}></input>
            <label>Phone</label>
            <input type="text" ref={emailRef}></input>
            <label>E-mail</label>
            <input type="text"></input>
            <label>Date of birth</label>
            <input type="text"></input>
            <label>Gender</label>

            {!validForm && <p>All fields are mandatory!</p>}

            <div className={classes.actions}>
                <button onClick={findPersonHandler} className={classes.find}> Create</button>
                <button type="button" onClick={props.onClose}>
                    Cancel
                </button>
            </div>
        </form>

    </Modal>
}

export default NewCustomer;