import React, { createContext, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Authcontext from "../../Context/auth-context";

const Home = (props) => {
  const authctx = useContext(Authcontext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
    </Card>
  );
};

export default Home;
