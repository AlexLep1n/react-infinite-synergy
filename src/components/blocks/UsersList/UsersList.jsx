import classes from "./UsersList.module.css";
import { useSelector, useDispatch } from "react-redux";
import User from "../../parts/User/User";
import { useCallback, useEffect } from "react";
import { fetchWorkers } from "../../../api/fetchWorkers";
import { chooseUser } from "../../../state/reducers/usersSlice";

export default function UsersList() {
  const { entities, status, error } = useSelector((state) => state.users.value);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  const clickHandler = useCallback(() => dispatch(fetchWorkers()), [dispatch]);

  return (
    <div className={classes["users-list"]}>
      {status === "loading" && <h3>Loading...</h3>}
      {status === "success" &&
        entities.map((user) => (
          <div
            onClick={() => dispatch(chooseUser(user.id))}
            className={classes.user}
            key={user.id}
          >
            <User userId={user.id} />
          </div>
        ))}
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={clickHandler}>Retry</button>
        </div>
      )}
    </div>
  );
}
