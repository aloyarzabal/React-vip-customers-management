import classes from './CustomerFile.module.css';

import maleIcon from './../../Assets/male.png';
import femaleIcon from './../../Assets/female.png';
import euroIcon from './../../Assets/euro.png';
import pointsIcon from './../../Assets/coin.png';
import phoneIcon from './../../Assets/phone.png';
import emailIcon from './../../Assets/mail.png';
import birthdayIcon from './../../Assets/birthday.png';


const CustomerFile = (props) => {
    return (
        <li className={classes.customerFile}>
            <div className={classes.textDivision}>
                <div className={classes.nameDivision}>
                    <h3>{props.name}</h3>
                    <p>{props.surname}</p>
                    <p>{props.second_surname}</p>
                </div>
                
                <div className={classes.mailBdayDivision}>
                    <div className={classes.iconTextdivision}>
                        <img src={emailIcon} alt='' />
                        <p>{props.email}</p>
                    </div>
                    <div className={classes.iconTextdivision}>
                        <img src={birthdayIcon} alt='' />
                        <p>{props.birthdate}</p>
                    </div>
                </div>
                <div className={classes.genderPhoneDivision}>
                    <div className={classes.iconTextdivision}>
                        <p>{props.gender === 1 ?
                            <img src={maleIcon} alt='' />  :
                            <img src={femaleIcon} alt='' />
                        }</p>
                        <p>{props.id}</p>
                    </div>
                    <div className={classes.iconTextdivision}>
                        <img src={phoneIcon} alt='' />
                        <p>{props.phone}</p>
                    </div>
                </div>
            </div>
            <div className={classes.mainStats}>
                <div className={classes.iconTextdivision}>
                    <img src={pointsIcon} alt='' />
                    <p>{props.accumulated_points}</p>
                </div>
                <div className={classes.iconTextdivision}>
                    <img src={euroIcon} alt='' />
                    <p>{props.spent_total_money}</p>
                </div>
            </div>
        </li >
    );
}

export default CustomerFile;

// id={customer.customer_number}
//       name={customer.name}
//       surname={customer.surname}
//       second_surname={customer.second_surname}
//       email={customer.email}
//       sex={customer.sex}
//       phone={customer.phone}
//       has_card={customer.has_card}
//       birthdate={customer.birthdate}
//       accumulated_points={customer.accumulated_points}
//       spent_total_money={customer.spent_total_money}    