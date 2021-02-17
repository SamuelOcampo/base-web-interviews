import { useDispatch } from "react-redux";

import { CHANGE_ROUTE } from "../../store/actionTypes";

function Header() {
  const dispatch = useDispatch();

  function changeRoute(route) {
    return () => dispatch({ type: CHANGE_ROUTE, payload: route });
  }

  return (
    <div>
      <button onClick={changeRoute("home")}>Home</button>
      <button onClick={changeRoute("create")}>Add a note</button>
    </div>
  );
}

export default Header;
