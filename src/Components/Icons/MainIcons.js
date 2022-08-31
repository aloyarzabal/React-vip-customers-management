import { useContext } from 'react';
import { MainTaskContext } from '../../App';

import Icon from './Icon';
import IconCard from './IconCard';

import starIcon from '../../Assets/estrellaAmarilla.png';
import statsIcon from '../../Assets/spreadsheet-app.png';
import newCustomerIcon from '../../Assets/add-friend.png';
import newExpenseIcon from '../../Assets/spending.png';

const MainIcons = props => {

    const { setNewExpense, setNewCustomer,
            setFindCustomer,setCheckStats, restoreList} = useContext(MainTaskContext);

    const restartAllStats = () => {
        setFindCustomer(false);
        setCheckStats(false);
        restoreList();
    }

    const newExpenseHandler = () => {
        restartAllStats();
     }
    const newCustomerHandler = () => {
        restartAllStats();
     }

    const findCustomerHandler = () => {
        restartAllStats();
        setFindCustomer(true);
    }

    const statsHandler = () => {
        restartAllStats();
        setCheckStats(true);
        // console.log(`CheckStats ${checkStats}`);
        // console.log(`Find Customer ${findCustomer}`);
    }

    return <IconCard>
        <Icon icon={newExpenseIcon} name={'New Expense'} onClick={newExpenseHandler}/>
        <Icon icon={newCustomerIcon} name={'New Customer'} onClick={newCustomerHandler}/>
        <Icon icon={starIcon} name={'Find Customer'} onClick={findCustomerHandler} />
        <Icon icon={statsIcon} name={'Stats'} onClick={statsHandler} />
    </IconCard>
}

export default MainIcons;