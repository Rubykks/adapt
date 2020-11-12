import React from "react";
import Moment from "react-moment";
import "moment-timezone";

const CurrentTime = () => {
  const date = new Date();
  return <Moment format="DD/MM/YYYY" date={date} />;
};

export default CurrentTime;
