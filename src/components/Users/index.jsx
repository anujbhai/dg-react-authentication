import { useEffect, useState } from "react";

import useAxiosPrivate from '../../api/axios'

const Users = () => {
  const [users, setUsers] = useState({});
  const axiosPvt = useAxiosPrivate()

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    console.log('called from User useEffect()')

    const getUsers = async () => {
      try {
        const response = await axiosPvt.get("/users", {
          signal: controller.signal,
        });

        console.log(response.data);

        isMounted && setUsers(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    getUsers();

    // on unmount cleanup
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [axiosPvt]);

  return (
    <article>
      <h3>Users</h3>

      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </article>
  );
};

export default Users;
