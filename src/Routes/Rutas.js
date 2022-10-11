import { Routes, Route, Link } from "react-router-dom";
import {Home} from "../Home/Home.js"
import {History} from "../History/History.js"
import {Menu} from "../Menu/Menu.js"
import {Albums} from "../Albums/Albums.js"

import {Musicos} from "../Musicos/Musicos.js"

export function Rutas() {
    return (
      <div>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="musicos" element={<Musicos />} />
          <Route path="albums" element={<Albums />} />
        </Routes>
      </div>
    );
  }