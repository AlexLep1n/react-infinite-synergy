import classes from "./UsersList.module.css";
import { useSelector, useDispatch } from "react-redux";
import User from "../../parts/User/User";
import { useEffect } from "react";
import { fetchWorkers } from "../../../api/fetchWorkers";
import { chooseUser } from "../../../state/reducers/usersSlice";

export default function UsersList() {
  const users = useSelector((state) => state.users.value.entities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWorkers());
  }, [dispatch]);

  return (
    <div className={classes["users-list"]}>
      {users.map((user) => (
        <div
          onClick={() => dispatch(chooseUser(user.id))}
          className={classes.user}
          key={user.id}
        >
          <User userId={user.id} />
        </div>
      ))}
    </div>
  );
}
