import { useContext } from "react";
import { userContext } from "../../../context/userContext";
import { LinearProgress } from "@mui/material";
import UserContact from "./contactList/UserContact";
import { getUser } from "../../../config";

const UsersComponent = () => {
  const { user, contactsList } = useContext(userContext);
  console.log("leftjsx");

  return (
    <>
      {!contactsList ? (
        <LinearProgress />
      ) : (
        contactsList.map((u, i) => (
          <UserContact key={i} u={u} currentUser={getUser(user, u.users)} />
        ))
      )}
    </>
  );
};
export default UsersComponent;
