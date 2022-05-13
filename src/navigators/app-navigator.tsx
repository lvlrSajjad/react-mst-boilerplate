import * as React from "react";
import { Routes, Route } from "react-router-dom";
import {About, Home} from "../screens";

export function AppNavigator() {
  return (
    <div className="AppNavigator">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
