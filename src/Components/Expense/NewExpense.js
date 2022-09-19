import { useContext, useReducer, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from '../Search/SearchMenu.module.css';
import { MainTaskContext } from '../../App';
import React from 'react';

const reducerFunction = (state, action) => {
    if (action.type === 'INVALID_FORM') {
        return {
            validForm: false,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
    else if (action.type === 'INVALID_USER_DATA') {
        return {
            validForm: true,
            validUserData: false,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
    else if (action.type === 'INVALID_QUANTITY_POINTS') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: false,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
    else if (action.type === 'INVALID_CUSTOMER_NUMBER') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: false,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
    else if (action.type === 'TOO_COINCIDENT_CUSTOMERS') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: false,
            updatedQuantities: false
        }
    }
    else if (action.type === 'CORRECT_FORM') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
    else if (action.type === 'QUANTITY_ADDED') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: true,
            foundCustomer: true,
            updatedQuantities: true
        }
    }
    else if (action.type === 'INVALID_PHONE_NUMBER') {
        return {
            validForm: true,
            validUserData: true,
            introducedQuantityPoints: true,
            correctCustNumber: true,
            correctPhoneNumber: false,
            foundCustomer: true,
            updatedQuantities: false
        }
    }
}


const NewExpense = (props) => {

    const [state, dispatch] = useReducer(reducerFunction, {
        validForm: true,
        validUserData: true,
        introducedQuantityPoints: true,
        correctCustNumber: true,
        correctPhoneNumber: true,
        foundCustomer: true,
        updatedQuantities: false
    });

    const [foundCustNumber, setFoundCustNumber] = useState({ found: false, number: 0, name: 'Not found' });
    const [customersFound, setCustomersFound] = useState(0);

    const { DUMMY_CUSTOMERS } = useContext(MainTaskContext);

    const cusnumberRef = useRef(null);
    const nameRef = useRef(null);
    const surnameRef = useRef(null);
    const phoneRef = useRef(null);
    const mailRef = useRef(null);
    const quantityRef = useRef(null);
    const pointsRef = useRef(null);


    const customerNumberHandler = () => {
        const introducedCustomerNumber = cusnumberRef.current.value;
        let filteredCustomerList = [...DUMMY_CUSTOMERS];

        if (introducedCustomerNumber.length === 5) {
            filteredCustomerList = filteredCustomerList.filter(
                (a) => String(a.customer_number).includes(introducedCustomerNumber)
            );
            if (filteredCustomerList.length === 1) {

                setFoundCustNumber({
                    found: true,
                    number: filteredCustomerList[0].customer_number,
                    name: filteredCustomerList[0].name + ' ' + filteredCustomerList[0].surname
                });
                quantityRef.current.focus();
            } else {

                setFoundCustNumber({
                    found: true,
                    number: 0,
                    name: 'Not Found'
                });
            }
            dispatch({ type: 'CORRECT_FORM' });
        }
        else if (introducedCustomerNumber.length === 0) {
            dispatch({ type: 'CORRECT_FORM' });
            return;
        }
        else {
            dispatch({ type: 'INVALID_CUSTOMER_NUMBER' });
        }
    }

    const phoneHandler = () => {
        const introducedPhone = phoneRef.current.value;
        let filteredCustomerList = [...DUMMY_CUSTOMERS];

        if (introducedPhone.length === 9) {
            filteredCustomerList = filteredCustomerList.filter(
                (a) => a.phone.includes(introducedPhone)
            );
            if (filteredCustomerList.length === 1) {

                setFoundCustNumber({
                    found: true,
                    number: filteredCustomerList[0].customer_number,
                    name: filteredCustomerList[0].name + ' ' + filteredCustomerList[0].surname
                });
                quantityRef.current.focus();
            } else {

                setFoundCustNumber({
                    found: true,
                    number: 0,
                    name: 'Not Found'
                });
            }
            dispatch({ type: 'CORRECT_FORM' });
        }
        else if (introducedPhone.length === 0) {
            dispatch({ type: 'CORRECT_FORM' });
            return;
        }
        else {
            dispatch({ type: 'INVALID_PHONE_NUMBER' });
        }
    }

    const newExpenseHandler = (event) => {
        event.preventDefault();

        const introducedCustomerNumber = cusnumberRef.current.value;
        const introducedName = nameRef.current.value;
        const introducedSurname = surnameRef.current.value;
        const introducedPhone = phoneRef.current.value;
        const introducedEmail = mailRef.current.value;
        const introducedQuantity = quantityRef.current.value;
        const introducedPoints = pointsRef.current.value;

        if (!introducedCustomerNumber && !introducedName && !introducedSurname &&
            !introducedPhone && !introducedEmail && !introducedQuantity && !introducedPoints) {
            dispatch({ type: 'INVALID_FORM' });
        }
        else if (!introducedCustomerNumber && !introducedName && !introducedSurname && !introducedPhone && !introducedEmail) {
            cusnumberRef.current.focus();
            dispatch({ type: 'INVALID_USER_DATA' });
        }
        else if (!introducedQuantity || !introducedPoints) {
            dispatch({ type: 'INVALID_QUANTITY_POINTS' });
            introducedQuantity ? pointsRef.current.focus() : quantityRef.current.focus();
        }
        else {

            let filteredCustomerList = [...DUMMY_CUSTOMERS];

            if (introducedCustomerNumber) {
                if (introducedCustomerNumber.length === 5) {
                    filteredCustomerList = filteredCustomerList.filter(
                        (a) => String(a.customer_number).includes(introducedCustomerNumber)
                    );
                }
                else
                    dispatch({ type: 'INVALID_CUSTOMER_NUMBER' });
            }
            if (introducedName) {
                const trimmedName = introducedName.trim().toLowerCase();
                filteredCustomerList = filteredCustomerList.filter((a) => (a.name.toLowerCase()).includes(trimmedName));
            }
            if (introducedSurname) {
                const trimmedName = introducedSurname.trim().toLowerCase();
                filteredCustomerList = filteredCustomerList.filter((a) => (a.name.toLowerCase()).includes(trimmedName));
            }
            if (introducedPhone) {
                filteredCustomerList = filteredCustomerList.filter((a) => a.phone.includes(introducedPhone));
            }
            if (introducedEmail) {
                filteredCustomerList = filteredCustomerList.filter((a) => a.email.includes(introducedEmail));
            }

            if (filteredCustomerList.length === 1) {
                filteredCustomerList[0].spent_total_money += Number(introducedQuantity);
                filteredCustomerList[0].accumulated_points += Number(introducedPoints);

                cusnumberRef.current.value = '';
                nameRef.current.value = '';
                surnameRef.current.value = '';
                phoneRef.current.value = '';
                mailRef.current.value = '';
                quantityRef.current.value = '';
                pointsRef.current.value = '';

                dispatch({ type: 'QUANTITY_ADDED' });

            }
            else {
                dispatch({ type: 'TOO_COINCIDENT_CUSTOMERS' });
                setCustomersFound(filteredCustomerList.length);
            }
        }
    }

    const formClasses = `${classes.form} ${state.validForm ? '' : classes.incorrectData}`;
    const inputDataClasses = `${state.validUserData ? '' : classes.incorrectField}`;
    const inputQuantityClasses = `${state.introducedQuantityPoints ? '' : classes.incorrectField}`;
    const customerNumberClasses = `${inputDataClasses} ${state.correctCustNumber ? '' : classes.incorrectField}`;
    const phoneClasses = `${inputDataClasses} ${state.correctPhoneNumber ? '' : classes.incorrectField}`;

    return <Modal onClose={props.onClose}>
        <form className={formClasses}>
            <h3>New expense</h3>

            <input type="text" ref={cusnumberRef} className={customerNumberClasses} onBlur={customerNumberHandler} required></input>
            <label>Customer number</label>
            <div className={classes.fastCheckContainer}>
                <p className={classes.fastCheck}>Fast check</p>
            </div>
            <input type="text" ref={nameRef} className={inputDataClasses} required></input>
            <label>Name</label>

            <input type="text" ref={surnameRef} className={inputDataClasses} required></input>
            <label>Surname</label>

            <input type="text" ref={phoneRef} className={phoneClasses} onBlur={phoneHandler} required></input>
            <label>Phone</label>
            <div className={classes.fastCheckContainer}>
                <p className={classes.fastCheck}>Fast check</p>
            </div>

            <input type="type" ref={mailRef} className={inputDataClasses} required></input>
            <label>E-mail</label>
            <div>
                <p className={classes.customerDataFound}>Found: <b>{foundCustNumber.found && foundCustNumber.name}</b></p>
            </div>
            <input type="type" ref={quantityRef} className={inputQuantityClasses} required></input>
            <label>Quantity</label>

            <input type="type" ref={pointsRef} className={inputQuantityClasses} required></input>
            <label>Generated points</label>

            <div className={classes.incorrectData}>
                {!state.validUserData && <p>At least one data field has to be introduced!</p>}
                {!state.validForm && <p>One data field, quantity and points has to be fulfilled.</p>}
                {!state.introducedQuantityPoints && <p>Please set the money spent and the generated points.</p>}
                {!state.foundCustomer && <p>Found {customersFound} customers with this data, please limit the information.</p>}
                {!state.correctCustNumber && <p>Customer number has to have 5 digits.</p>}
                {!state.correctPhoneNumber && <p>Phone number has to have 9 digits.</p>}
            </div>
            {state.updatedQuantities && <p> Amounts properly added!</p>}
            <div className={classes.actions}>
                <button onClick={newExpenseHandler} className={classes.find}> Create</button>
                <button type="button" onClick={props.onClose}>
                    Cancel
                </button>
            </div>

        </form>
    </Modal>
}

export default NewExpense;