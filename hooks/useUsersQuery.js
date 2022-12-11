import { useQuery } from "@tanstack/react-query";

export async function getUsers() {
  const res = await fetch("http://localhost:3005/api/users");
  return res.json();
}

export default function useUsersQuery() {
  const { data } = useQuery(["users"], getUsers);

  return {
    data,
  };
}
