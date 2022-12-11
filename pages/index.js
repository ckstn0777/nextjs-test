import { Suspense } from "react";
import Users from "../components/Users";

// const UsersComponent = dynamic(() => import("../components/Users"), {
//   ssr: false,
// });

export default function Home() {
  return <Users />;
}

// export async function getServerSideProps(context) {
//   const users = await getUsers();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
