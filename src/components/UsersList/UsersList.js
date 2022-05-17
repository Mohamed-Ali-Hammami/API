import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../JS/actions/usersactions";
import UserCard from "../UserCard/UserCard";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);

  const fetchUsers = () => {
    dispatch(getUsers());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return loading ? (
    <h1> Please wait ...</h1>
  ) : (
    <div>
      {users.map((user, i) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UsersList;
