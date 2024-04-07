/* eslint-disable react/prop-types */
import classes from "./User.module.css";
import userIcon from "/img/blue-user-icon.svg";

export default function User({ userId }) {
  return (
    <>
      <img src={userIcon} className={classes.img} alt="blue user icon" />
      <p className={classes.txt}>{`Пользователь ${userId}`}</p>
    </>
  );
}
