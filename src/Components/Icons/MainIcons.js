import Icon from './Icon';
import IconCard from './IconCard';

import starIcon from '../../Assets/estrellaAmarilla.png';
import statsIcon from '../../Assets/spreadsheet-app.png';
import newCustomerIcon from '../../Assets/add-friend.png';
import newExpenseIcon from '../../Assets/spending.png';

const MainIcons = props => {
    return <IconCard>
        <Icon icon={newExpenseIcon} name={'New Expense'}/>
        <Icon icon={newCustomerIcon} name={'New Customer'}/>
        <Icon icon={starIcon} name={'Find Customer'}/>
        <Icon icon={statsIcon} name={'Stats'}/>
    </IconCard>
}

export default MainIcons;