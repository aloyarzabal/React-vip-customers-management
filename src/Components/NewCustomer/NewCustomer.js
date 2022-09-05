import { useContext, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from "../Search/SearchMenu.module.css";
import { MainTaskContext } from "../../App";

const NewCustomer = (props) => {

    const [validForm, setValidForm] = useState(true);
    const [validCustomer, setValidCustomer] = useState(true);
    const [validNewEmail, setValidNewEmail] = useState(true);
    const [validNewPhone, setValidNewPhone] = useState(true);
    const [customerCreated, setCustomerCreated] = useState(false);
    const [validEmail, setValidEmail] = useState(true);
    const [validPhone, setValidPhone] = useState(true);

    const { DUMMY_CUSTOMERS, setCustomerList } = useContext(MainTaskContext);

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

            (introducedPhone.length !== 9) ? setValidPhone(false) : setValidPhone(true);
            (!introducedEmail.includes('@')) ? setValidEmail(false) : setValidEmail(true);

            if (introducedPhone.length === 9 && introducedEmail.includes('@')) {

                let filteredCustomerList = [...DUMMY_CUSTOMERS];                

                if (filteredCustomerList.filter((a) => a.phone.includes(introducedPhone)).length > 0) {
                    setValidCustomer(false);
                    setValidNewPhone(false);
                }

                else if (filteredCustomerList = filteredCustomerList.filter((a) => a.email.includes(introducedEmail)).length > 0) {
                    setValidCustomer(false);
                    setValidNewEmail(false);
                }

                else {

                    const customerToAdd = {
                        customer_number: 123123,
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

                    DUMMY_CUSTOMERS.push(customerToAdd);

                    surnameRef.current.value = '';
                    secondSurnameRef.current.value = '';
                    nameRef.current.value = '';
                    phoneRef.current.value = '';
                    emailRef.current.value = '';
                    dateRef.current.value = '';

                    setCustomerCreated(true);
                    setValidCustomer(true);
                    setValidNewEmail(true);
                    setValidNewPhone(true);
                }
            }

        }
    }

    const formClasses = `${classes.form} ${validForm ? '' : classes.incorrectData}`;

    return <Modal onClose={props.onClose}>
        <form className={formClasses}>
            <h3>New customer data</h3>

            <input type="text" ref={nameRef} required></input>
            <label>Name</label>
            <input type="text" ref={surnameRef} required></input>
            <label>Surname</label>
            <input type="text" id='secondSurname' ref={secondSurnameRef} placeholder='(Optional)'></input>
            <label>Second Surname</label>
            <input type="text" ref={phoneRef} required></input>
            <label>Phone</label>
            <input type="type" ref={emailRef} required></input>
            <label>E-mail</label>
            <input style={{ textAlign: 'right' }} type="date" ref={dateRef} required></input>
            <label>Date of birth</label>
            <input type="radio" id="male" value='male' name="gender" checked ref={maleRef}></input>
            <label for="male">male</label>
            <input type="radio" id="female" value='female' name="gender" ref={femaleRef}></input>
            <label for="female">female</label>

            {!validForm && <p>Please fulfill all the mandatory fields!</p>}
            {!validEmail && <p>Introduce a valid email format "test@test.com"</p>}
            {!validPhone && <p>The phone number should have 9 digits</p>}
            {!validCustomer && <p>The customer already exists in the database.</p>}
            {!validNewEmail && <p>Please try another email.</p>}
            {!validNewPhone && <p>Please try another phone.</p>}

            {customerCreated && <p>Customer created succesfully!</p>}

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