import { useSelector, useDispatch } from "react-redux";
import { saveUser } from "../../../state/reducers/usersSlice";
import classes from "./UserCard.module.css";
import { useEffect, useState } from "react";
import UserInput from "../../ui/UserInput";

export default function UserCard() {
  const { selectedUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    jobTitle: "",
    company: "",
  });

  const [disabled, setDisabled] = useState(true);

  function edit(prop, e) {
    setUserData({ ...userData, ...{ [prop]: e.target.value } });
  }

  function saveData(userData) {
    dispatch(saveUser(userData));
    setUserData({
      id: null,
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      jobTitle: "",
      company: "",
    });
  }

  useEffect(() => {
    setUserData({ ...selectedUser });
  }, [selectedUser]);

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>{`Пользователь ${
        selectedUser.id ?? ""
      }`}</h3>
      <div className={classes.content}>
        <div>
          <img
            className={classes.img}
            src="./img/user-profile-icon.svg"
            alt="user profile icon"
          />
        </div>
        <div className={classes.data}>
          <UserInput
            labelName={"First name"}
            keyName={"firstName"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />

          <UserInput
            labelName={"Last name"}
            keyName={"lastName"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />

          <UserInput
            labelName={"Age"}
            keyName={"age"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />

          <UserInput
            labelName={"Email"}
            keyName={"email"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />

          <UserInput
            labelName={"Job title"}
            keyName={"jobTitle"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />

          <UserInput
            labelName={"Company"}
            keyName={"company"}
            userData={userData}
            disabled={disabled}
            edit={edit}
          />
        </div>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => setDisabled((prev) => !prev)}
        >
          Edit
        </button>
        <button className={classes.button} onClick={() => saveData(userData)}>
          Save
        </button>
      </div>
    </div>
  );
}
