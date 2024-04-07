/* eslint-disable react/prop-types */
export default function UserInput({ userKey, userValue, onChange }) {
  return (
    <>
      <label>
        {userKey}
        <input type="text" value={userValue} onChange={onChange} />
      </label>

      {/* <label htmlFor="lastName">Last name: </label>
        <input
          type="text"
          value={userValue}
          id="lastName"
          onChange={onChange}
        /> */}
    </>
  );
}
