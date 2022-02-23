import React from "react";

import { Routes ,Route, Navigate} from 'react-router-dom';
import Characters from '../components/Domain/CharactersList/Characters';
import CharacterDetails  from "../components/Domain/CharacterDetails/CharacterDetails";
import Episodes from "../components/Domain/Episodes/Episodes";

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/characters" />}></Route>
    <Route path="/characters" element={<Characters />}></Route>
    <Route path="/episodes" element={<Episodes />}></Route>
    <Route path="/characters/:id" element={<CharacterDetails />}></Route>
    <Route element={() => <h2>Page is not found :(</h2>} />
  </Routes>
);
