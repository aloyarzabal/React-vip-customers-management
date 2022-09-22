import { useContext, useReducer, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from "../Search/SearchMenu.module.css";
import { MainTaskContext } from "../../App";
import React from 'react';


// const reducerFunction = (state, action) => {
//     if (action.type === "INVALID_PHONE") {
//         return {
//             validCustomer: false,
//             validNewPhone: false,

//             customerCreated: false,
//             validNewEmail: true,
//             randomNewCustomerNumber: ''
//         }
//     }
//     if (action.type === "INVALID_EMAIL") {
//         return {
//             validCustomer: false,
//             validNewEmail: false,

//             customerCreated: false,
//             validNewPhone: true,
//             randomNewCustomerNumber: ''

//         }
//     }
//     if (action.type === "VALID_FORM") {
//         return {
//             customerCreated: true,
//             validCustomer: true,
//             validNewEmail: true,
//             validNewPhone: true,
//             randomNewCustomerNumber: state.randomNewCustomerNumber
//         }
//     }
// }


const reducerFunction = (state, action) => {
    if (action.type === "INVALID_PHONE") {
        return {
            validCustomer: false,
            validNewPhone: false,

            customerCreated: false,
            validNewEmail: true,
            randomNewCustomerNumber: ''
        }
    }
    if (action.type === "INVALID_EMAIL") {
        return {
            validCustomer: false,
            validNewEmail: false,

            customerCreated: false,
            validNewPhone: true,
            randomNewCustomerNumber: ''

        }
    }
    if (action.type === "VALID_FORM") {
        return {
            customerCreated: true,
            validCustomer: true,
            validNewEmail: true,
            validNewPhone: true,
            randomNewCustomerNumber: state.randomNewCustomerNumber
        }
    }
}

const NewCustomer = (props) => {

    async function postCustomersHandler(customer) {
        const response = await fetch('https://1uou5mdl.directus.app/items/Clientes/', {
            method: 'POST',
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        console.log(data.data);
    }

    const [state, dispatch] = useReducer(reducerFunction, {
        validCustomer: true,
        customerCreated: false,
        validNewPhone: true,
        validNewEmail: true,
        randomNewCustomerNumber: ''
    });
    const [validForm, setValidForm] = useState(true);
    const [validEmailFormat, setValidEmailFormat] = useState(true);
    const [validPhoneFormat, setValidPhoneFormat] = useState(true);


    const { clientsList } = useContext(MainTaskContext);

    const surnameRef = useRef(null);
    const nameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const dateRef = useRef(null);
    const secondSurnameRef = useRef(null);
    const maleRef = useRef(null);
    const femaleRef = useRef(null);

    const createCustomerHandler = (event) => {
        event.preventDefault();

        const introduceName = nameRef.current.value;
        const introducedSurname = surnameRef.current.value;
        const introducedSecondSurname = secondSurnameRef.current.value;
        const introducedPhone = phoneRef.current.value;
        const introducedEmail = emailRef.current.value;
        const introducedDate = dateRef.current.value;
        const introducedGender = ((maleRef.current.checked) ? 1 : 2);


        if (!introducedSurname || !introduceName || !introducedPhone || !introducedEmail || !introducedDate) {
            nameRef.current.focus();
            setValidForm(false);
        }
        else {
            setValidForm(true);

            (introducedPhone.length !== 9) ? setValidPhoneFormat(false) : setValidPhoneFormat(true);
            (!introducedEmail.includes('@')) ? setValidEmailFormat(false) : setValidEmailFormat(true);

            if (introducedPhone.length === 9 && introducedEmail.includes('@')) {

                let filteredCustomerList = [...clientsList];
                console.log(typeof (clientsList));

                if (filteredCustomerList.filter((a) => a.phone.includes(introducedPhone)).length > 0) {
                    dispatch({ type: "INVALID_PHONE" });
                }
                else if (filteredCustomerList.filter((a) => a.email.includes(introducedEmail)).length > 0) {
                    dispatch({ type: "INVALID_EMAIL" });
                }

                else {

                    //create a random number to be associated to the new customer                    
                    do {
                        state.randomNewCustomerNumber = Math.floor((Math.random() * 99999) + 1);

                    } while (filteredCustomerList.filter((a) => String(a.customer_number).includes(state.randomNewCustomerNumber)).length > 0);

                    const customerToAdd = {
                        customer_number: state.randomNewCustomerNumber,
                        name: introduceName,
                        surname: introducedSurname,
                        second_surname: introducedSecondSurname,
                        email: introducedEmail,
                        sex: introducedGender,
                        phone: introducedPhone,
                        has_card: false,
                        birthdate: introducedDate,
                        accumulated_points: 0,
                        spent_total_money: 0
                    }

                    clientsList.push(customerToAdd);
                    postCustomersHandler(customerToAdd);

                    surnameRef.current.value = '';
                    secondSurnameRef.current.value = '';
                    nameRef.current.value = '';
                    phoneRef.current.value = '';
                    emailRef.current.value = '';
                    dateRef.current.value = '';

                    dispatch({ type: "VALID_FORM" });
                }
            }

        }
    }

    const formClasses = `${classes.form} ${validForm ? '' : classes.incorrectData}`;
    const phoneClasses = `${(validPhoneFormat && state.validNewPhone) ? '' : classes.incorrectField}`;
    const emailClasses = `${(validEmailFormat && state.validNewEmail) ? '' : classes.incorrectField}`;

    return <Modal onClose={props.onClose} show={props.show}>
        <form className={formClasses}>
            <h3>New customer data</h3>

            <input type="text" ref={nameRef} required></input>
            <label>Name</label>
            <input type="text" ref={surnameRef} required></input>
            <label>Surname</label>
            <input type="text" id='secondSurname' ref={secondSurnameRef} required></input>
            <label>Second Surname</label>
            <input type="text" ref={phoneRef} className={phoneClasses} required></input>
            <label>Phone</label>
            <input type="type" ref={emailRef} className={emailClasses} required></input>
            <label>E-mail</label>
            <input style={{ textAlign: 'right' }} type="date" ref={dateRef} required></input>
            <label>Date of birth</label>
            <div className={classes.genderBlock}>
                <input type="radio" id="male" value='male' name="gender" defaultChecked ref={maleRef}></input>
                <label htmlFor="male">male</label>
                <input type="radio" id="female" value='female' name="gender" ref={femaleRef}></input>
                <label htmlFor="female">female</label>
            </div>
            <label>Gender:</label>

            {!validForm && <p>Please fulfill all the mandatory fields!</p>}
            {!validEmailFormat && <p>Introduce a valid email format "test@test.com"</p>}
            {!validPhoneFormat && <p>The phone number should have 9 digits</p>}
            {!state.validCustomer && <p>The customer already exists in the database.</p>}
            {!state.validNewEmail && <p>Please try another email.</p>}
            {!state.validNewPhone && <p>Please try another phone.</p>}
            {state.customerCreated && <p>Customer created succesfully with number: {state.randomNewCustomerNumber}!</p>}

            <div className={classes.actions}>
                <button onClick={createCustomerHandler} className={classes.find}> Create</button>
                <button type="button" onClick={props.onClose}>
                    Cancel
                </button>
            </div>
        </form>

    </Modal>
}

export default NewCustomer;