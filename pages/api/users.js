// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "../../lib/db";

export default async function handler(req, res) {
  console.log("users api request");

  const allUsers = await client.user.findMany();

  setTimeout(() => {
    console.log("allUsers", allUsers);
    res.status(200).json(allUsers);
  }, 3000);
}
