import Link from "next/link";
import useUsersQuery from "../hooks/useUsersQuery";
import styles from "./Users.module.css";

console.log(styles);

export default function Users() {
  const { data: users } = useUsersQuery();
  console.log(users);

  return (
    <ul>
      {users && users.length > 0 ? (
        users?.map((user) => (
          <li
            key={user.id}
            className={styles.user}
            onClick={() => console.log("weofijweof")}
          >
            <Link href={`/user/${user.id}`}> {user.name}</Link>
          </li>
        ))
      ) : (
        <li className="font-bold">Loading...</li>
      )}
      {/* {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))} */}
    </ul>
  );
}
