// Core
import React from "react";

// Antd
import {Spin} from "antd";

export default function ProductsSpin() {
  return <Spin className="loader" size="large" tip="Loading..."/>;
}
