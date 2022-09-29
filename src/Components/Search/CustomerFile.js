import classes from './CustomerFile.module.css';
import React from 'react';

import maleIcon from './../../Assets/male_thick.svg';
import femaleIcon from './../../Assets/female_thick.svg';
import euroIcon from './../../Assets/euro_thick.svg';
import pointsIcon from './../../Assets/starAward_thick.svg';
import phoneIcon from './../../Assets/phone_thick.png';
import emailIcon from './../../Assets/email_thick.png';
import birthdayIcon from './../../Assets/calendar_thick.png';


const CustomerFile = (props) => {
    return (
        <li className={classes.customerFile}>
            <div className={classes.textDivision}>
                <div className={classes.nameDivision}>
                    <h3>{props.name} {props.surname} {props.second_surname}</h3>
                </div>

                <div className={classes.mailBdayDivision}>
                    <div className={classes.iconTextdivision}>
                        <img src={emailIcon} alt='' />
                        <p>{props.email}</p>
                    </div>
                </div>
                <div className={classes.genderPhoneDivision}>
                    <div className={classes.iconTextdivision}>
                        {props.gender === 1 ?
                            <img src={maleIcon} alt='' /> :
                            <img src={femaleIcon} alt='' />
                        }
                        <div>
                            <p className={classes.tittleFeature}>Nº Cliente:</p>
                            <p>{props.id}</p>
                        </div>
                    </div>
                    <div className={classes.iconTextdivision}>
                        <img src={phoneIcon} alt='' />
                        <div>
                            <p className={classes.tittleFeature}>Telefono:</p>
                            <p>{`${props.phone[0]}${props.phone[1]}${props.phone[2]}.${props.phone[3]}${props.phone[4]}${props.phone[5]}.${props.phone[6]}${props.phone[7]}${props.phone[8]}`}</p>
                        </div>
                    </div>

                    <div className={classes.iconTextdivision}>
                        <img src={birthdayIcon} alt='' />
                        <div>
                            <p className={classes.tittleFeature}>Cumpleaños:</p>
                            <p>{props.birthdate}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.mainStats}>
                <div className={classes.iconTextdivision}>
                    <img style={{ transform: "scale(1.4)" }} src={pointsIcon} alt='' />
                    <div>
                        <p className={classes.tittleFeature}>Puntos:</p>
                        <p>{props.accumulated_points}</p>
                    </div>
                </div>
                <div style={{marginTop:"15px"}} className={classes.iconTextdivision}>
                    <img src={euroIcon} alt='' />
                    <div>
                        <p className={classes.tittleFeature}>Total:</p>
                        <p>{props.spent_total_money}</p>
                    </div>
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