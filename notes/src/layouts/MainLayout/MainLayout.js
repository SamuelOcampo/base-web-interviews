import Header from "../../components/Header/Header";


function MainLayout(props) {
  return (
    <div>
      <div>
          <Header />
      </div>
      <div>{props.children}</div>
    </div>
  );
}

export default MainLayout;
