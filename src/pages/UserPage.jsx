import UserCard from "../components/blocks/UserCard/UserCard";
import UsersList from "../components/blocks/UsersList/UsersList";
import classes from "./UserPage.module.css";

export default function UserPage() {
  return (
    <section className={classes.page}>
      <UsersList />
      <UserCard />
    </section>
  );
}
