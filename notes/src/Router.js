import { useSelector } from "react-redux";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";

// const DummyPage = (props) => <div>Dummy Page {props.title}</div>;

const pages = {
  home: <HomePage />,
  create: <CreatePage />,
};

// TODO:  Replace this with react-router.
function Router() {
  const currentPage = useSelector((state) => state.router.current);
  return <MainLayout>{pages[currentPage]}</MainLayout>;
}

export default Router;
