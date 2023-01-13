import React from "react";
import { UserItemFragment } from "../utils/__generated__/graphql";

type UserListProps = {
  users: UserItemFragment[];
};

function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.displayName}</li>
      ))}
    </ul>
  );
}

export default UserList;
