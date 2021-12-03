import { useDispatch, useSelector } from "react-redux";
import { store } from "../../Store";
import { toggleUserNameAction } from "../../Store/Profile/actions";
import { profileSelector } from "../../Store/Profile/selectors";

export const Profile = () => {
  const dispatch = useDispatch();
  const { userName, showUserName } = useSelector(profileSelector);

  console.log(userName, showUserName);

  const handleToggleShowUserName = () => {
    dispatch(toggleUserNameAction());
  };

  return (
    <>
      <input value="Click" onClick={handleToggleShowUserName} type="checkbox" />
      Click to show name
      <div>{showUserName && userName}</div>
    </>
  );
};
