import LeftNavbar from "./leftNavbar/LeftNavbar";
import "./left.scss";
import UsersComponent from "./usersList/UsersComponent";

function LeftBar() {

  // console.log(contactsList);
  return (
    <div className="LeftBar">
      <LeftNavbar />
      <div className="user-lists">
        <UsersComponent/>
      </div>
    </div>
  );
}
export default LeftBar;
