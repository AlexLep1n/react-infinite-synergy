/* eslint-disable react/prop-types */
import userIcon from "/img/blue-user-icon.svg";

export default function User({ id }) {
  return (
    <>
      <div>
        <img src={userIcon} alt="blue user icon" />
        <p>{`Ползователь ${id}`}</p>
      </div>
    </>
  );
}
