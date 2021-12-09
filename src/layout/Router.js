import { Route } from "react-router-dom";
import Home from "../Home";
import BoxComponent from "../component/layout/Box";
import ContainerComponent from "../component/layout/Container";
import GridComponent from "../component/layout/Grid";

const Router = () => {
  return (
    <>
      <Route path="/" exact={true} component={Home} />
      <Route path="/box" component={BoxComponent} />
      <Route path="/container" component={ContainerComponent} />
      <Route path="/grid" component={GridComponent} />
    </>
  );
};

export default Router;