import { Routes, Route, Link } from "react-router-dom";
import {Home} from "../Home/Home.js"
import {History} from "../History/History.js"
import {Menu} from "../Menu/Menu.js"
import {Albums} from "../Albums/Albums.js"
import {Members} from "../Members/Members.js"

export function Rutas() {
    return (
      <div>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="members" element={<Members />} />
          <Route path="albums" element={<Albums />} />
        </Routes>
      </div>
    );
  }