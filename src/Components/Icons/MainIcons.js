import { useContext, useState } from 'react';
import { MainTaskContext } from '../../App';
import React from 'react';

import Icon from './Icon';
import IconCard from './IconCard';

import starIcon from '../../Assets/estrellaAmarilla.png';
import statsIcon from '../../Assets/spreadsheet-app.png';
import newCustomerIcon from '../../Assets/add-friend.png';
import newExpenseIcon from '../../Assets/spending.png';
import NewCustomer from '../NewCustomer/NewCustomer';
import NewExpense from '../Expense/NewExpense';

const MainIcons = props => {

    const [newCustomerisVisible, setNewCustomerIsVisible] = useState(false);
    const [newExpenseisVisible, setNewExpenseIsVisible] = useState(false);

    const { setFindCustomer,setCheckStats} = useContext(MainTaskContext);

    const restartAllStats = () => {
        setFindCustomer(false);
        setCheckStats(false);
        setNewCustomerIsVisible(false);
        setNewExpenseIsVisible(false);
    }

    const newExpenseHandler = () => {
        restartAllStats();
        setNewExpenseIsVisible(true);
     }
    const newCustomerHandler = () => {
        restartAllStats();
        setNewCustomerIsVisible(true);
     }

    const findCustomerHandler = () => {
        restartAllStats();
        setFindCustomer(true);
    }

    const statsHandler = () => {
        restartAllStats();
        setCheckStats(true);
    }

    return <IconCard>
        {newCustomerisVisible && <NewCustomer onClose={restartAllStats} show={newCustomerisVisible}/>}
        {newExpenseisVisible && <NewExpense onClose={restartAllStats} show={newExpenseisVisible} />}
        <Icon icon={newExpenseIcon} name={'New Expense'} onClick={newExpenseHandler}/>
        <Icon icon={newCustomerIcon} name={'New Customer'} onClick={newCustomerHandler}/>
        <Icon icon={starIcon} name={'Find Customer'} onClick={findCustomerHandler} />
        <Icon icon={statsIcon} name={'Stats'} onClick={statsHandler} />
    </IconCard>
}

export default MainIcons;