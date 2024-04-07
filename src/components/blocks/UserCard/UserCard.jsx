import { useSelector } from "react-redux";
// import UserInput from "../../ui/UserInput";
import classes from "./UserCard.module.css";
import { useState } from "react";

export default function UserCard() {
  const selectedUser = useSelector((state) => state.users.selectedUser);
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

  console.log("userData: ", userData);
  console.log("selectedUser: ", selectedUser);

  return (
    <div className={classes.form}>
      <h3 className={classes.title}>{`Пользователь ${userData.id ?? ""}`}</h3>
      <div className={classes.content}>
        <div>
          <img
            className={classes.img}
            src="public/img/user-profile-icon.svg"
            alt="user profile icon"
          />
        </div>
        <div className={classes.data}>
          <label htmlFor="firstName" className={classes.label}>
            First name
            <input
              type="text"
              value={userData.firstName}
              id="firstName"
              placeholder="First name"
              className={classes.input}
              disabled={disabled}
            />
          </label>

          <label htmlFor="lastName" className={classes.label}>
            Last name
            <input
              type="text"
              value={userData.lastName}
              id="lastName"
              placeholder="Last name"
              className={classes.input}
              disabled={disabled}
            />
          </label>

          <label htmlFor="age" className={classes.label}>
            Age
            <input
              type="text"
              value={userData.age}
              id="age"
              placeholder="Age"
              className={classes.input}
              disabled={disabled}
            />
          </label>

          <label htmlFor="email" className={classes.label}>
            Email
            <input
              type="text"
              value={userData.email}
              id="email"
              placeholder="Email"
              className={classes.input}
              disabled={disabled}
            />
          </label>

          <label htmlFor="jobTitle" className={classes.label}>
            Job title
            <input
              type="text"
              value={userData.jobTitle}
              id="jobTitle"
              placeholder="Job title"
              className={classes.input}
              disabled={disabled}
            />
          </label>

          <label htmlFor="company" className={classes.label}>
            Company
            <input
              type="text"
              value={userData.company}
              id="company"
              placeholder="Company"
              className={classes.input}
              disabled={disabled}
            />
          </label>
        </div>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.button}
          onClick={() => setDisabled((prev) => !prev)}
        >
          Edit
        </button>
        <button className={classes.button}>Save</button>
      </div>
    </div>
  );
}
{
  /* {Object.keys(selectedUser).length !== 0 &&
          Object.values(selectedUser).map((value) => {
            console.log(value);
            if (Number.isNaN(value)) {
              return <UserInput userValue={value} key={value} />;
            }
          })} */
}
