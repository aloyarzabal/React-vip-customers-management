import { Fragment, useContext } from "react";
import { MainTaskContext } from "../../App";
import CustomerFile from "../Search/CustomerFile";
import classes from './MainList.module.css';

const MainList = props => {
    const {customerList} = useContext(MainTaskContext);

    console.log("Lista actualizada");

     const sortedCustomerList = customerList.map(customer => 
      <CustomerFile
        id={customer.customer_number}
        name={customer.name}
        surname={customer.surname}
        second_surname={customer.second_surname}
        email={customer.email}
        gender={customer.sex}
        phone={customer.phone}
        has_card={customer.has_card}
        birthdate={customer.birthdate}
        accumulated_points={customer.accumulated_points}
        spent_total_money={customer.spent_total_money}    
      />
    )

    return (
        <Fragment>
        <ul className={classes.mainList}>
            {sortedCustomerList}
        </ul>
        </Fragment>
    )
}

export default MainList;
