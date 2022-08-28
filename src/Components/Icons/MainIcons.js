import Icon from './Icon';
import IconCard from './IconCard';
import starIcon from '../../Assets/estrellaAmarilla.png'

const MainIcons = props => {
    return <IconCard>
        <Icon icon={starIcon} name={'New Expense'}/>
        <Icon icon={starIcon} name={'New Customer'}/>
        <Icon icon={starIcon} name={'Find Customer'}/>
        <Icon icon={starIcon} name={'Stats'}/>
    </IconCard>
}

export default MainIcons;