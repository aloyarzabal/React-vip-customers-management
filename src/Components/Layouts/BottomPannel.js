import SecondaryIcons from "../Icons/SecondaryIcons";
import MainList from "../MainList/MainList";
import SearchMenu from "../Search/SearchMenu";
import classes from "./BottomPannel.module.css";

const BottomPannel = (props) => {
  return (
    <div className={classes.bottomPannel}>
      <div className={classes.halfDivision}>
        <SearchMenu />
        <SecondaryIcons />
      </div>
      <MainList />
    </div>
  );
};

export default BottomPannel;
