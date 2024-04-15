/* eslint-disable react/prop-types */
import classes from "./UserInput.module.css";

export default function UserInput({
  labelName,
  keyName,
  userData,
  disabled,
  edit,
}) {
  return (
    <>
      <label htmlFor={keyName} className={classes.label}>
        {labelName}
        <input
          type="text"
          value={userData[keyName]}
          id={keyName}
          placeholder={labelName}
          className={classes.input}
          disabled={disabled}
          onChange={(e) => edit(keyName, e)}
        />
      </label>
    </>
  );
}
