import { useContext, useRef, useState } from 'react';
import Modal from '../UI/Modal';
import classes from '../Search/SearchMenu.module.css';
import { MainTaskContext } from '../../App';


const NewExpense = (props) => {

    const [validForm, setValidForm] = useState(true);
    const [updatedQuantities, setUpdatedQuantities] = useState(false);
    const [validUserData, setValidUserData] = useState(true);
    const [foundCustomer, setFoundCustomer] = useState(true);
    const [introducedQuantityPoints, setIntroducedQuantityPoints] = useState(true);
    const [correctCustNumber, setCorrectCustNumber] = useState(true);
    const [foundCustNumber, setFoundCustNumber] = useState({ found: false, number: 0, name: '' });
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
                setCorrectCustNumber(true);
            } else {

                setFoundCustNumber({
                    found: true,
                    number: 0,
                    name: 'Not Found'
                });
            }

        }
        else {
            setCorrectCustNumber(false);
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
            setValidForm(false);
            setValidUserData(true);
            setIntroducedQuantityPoints(true);
        }
        else if (!introducedCustomerNumber && !introducedName && !introducedSurname && !introducedPhone && !introducedEmail) {
            cusnumberRef.current.focus();
            setValidUserData(false);
            setValidForm(true);
            setIntroducedQuantityPoints(true);
        }
        else if (!introducedQuantity || !introducedPoints) {
            setIntroducedQuantityPoints(false);
            setValidForm(true);
            setValidUserData(true);
            introducedQuantity ? pointsRef.current.focus() : quantityRef.current.focus();
        }
        else {
            setValidForm(true);
            setIntroducedQuantityPoints(true);
            setValidUserData(true);

            let filteredCustomerList = [...DUMMY_CUSTOMERS];

            if (introducedCustomerNumber) {
                if (introducedCustomerNumber.length === 5) {
                    filteredCustomerList = filteredCustomerList.filter(
                        (a) => String(a.customer_number).includes(introducedCustomerNumber)
                    );
                }
                else
                    setCorrectCustNumber(false);
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

                setUpdatedQuantities(true);

            }
            else {
                setFoundCustomer(false);
                setCustomersFound(filteredCustomerList.length);
            }
        }
    }

    const formClasses = `${classes.form} ${validForm ? '' : classes.incorrectData}`;
    const inputDataClasses = `${validUserData ? '' : classes.incorrectField}`;
    const inputQuantityClasses = `${introducedQuantityPoints ? '' : classes.incorrectField}`;
    const customerNumberClasses = `${inputDataClasses} ${correctCustNumber ? '' : classes.incorrectField}`;

    return <Modal onClose={props.onClose}>
        <form className={formClasses}>
            <h3>New expense</h3>

            <input type="text" ref={cusnumberRef} className={customerNumberClasses} onBlur={customerNumberHandler} required></input>
            <label>Customer number</label>
            {foundCustNumber.found && <p className={classes.customerDataFound}> {foundCustNumber.name}</p>}

            <input type="text" ref={nameRef} className={inputDataClasses} required></input>
            <label>Name</label>

            <input type="text" ref={surnameRef} className={inputDataClasses} required></input>
            <label>Surname</label>

            <input type="text" ref={phoneRef} className={inputDataClasses} required></input>
            <label>Phone</label>

            <input type="type" ref={mailRef} className={inputDataClasses} required></input>
            <label>E-mail</label>

            <input type="type" ref={quantityRef} className={inputQuantityClasses} required></input>
            <label>Quantity</label>

            <input type="type" ref={pointsRef} className={inputQuantityClasses} required></input>
            <label>Generated points</label>

            <div className={classes.incorrectData}>
                {!validUserData && <p>At least one data field has to be introduced!</p>}
                {!validForm && <p>One data field, quantity and points has to be fulfilled.</p>}
                {!introducedQuantityPoints && <p>Please set the money spent and the generated points.</p>}
                {!foundCustomer && <p>Found {customersFound} customers with this data, please limit the information.</p>}
                {!correctCustNumber && <p>Customer number has to have 5 digits.</p>}
            </div>
            {updatedQuantities && <p> Amounts properly added!</p>}
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