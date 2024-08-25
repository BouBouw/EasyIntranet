import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import { Welcome } from './views/Welcome';

import { Informations } from './views/Software/Informations';
import { Components } from './views/Software/Components';
import { Networks } from './views/Software/Networks';
import { Checkin } from './views/Software/Checkin';

import { Reinstall } from './views/Update/Reinstall';
import { Drivers } from './views/Update/Drivers';
import { Bios } from './views/Update/Bios';

import { Converter } from './views/Tools/Converter';
import { Socials } from './views/Tools/Socials';
import { ToDo } from './views/Tools/ToDo';
import { Login } from './views/Auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Login/> } />
        <Route path={"/home"} element={ <Welcome/> } />

        <Route path={"/software/informations"} element={ <Informations/> } />
        <Route path={"/software/components"} element={ <Components/> } />
        <Route path={"/software/networks"} element={ <Networks/> } />
        <Route path={"/software/check-in"} element={ <Checkin/> } />

        <Route path={"/computer/os"} element={ <Reinstall/> } />
        <Route path={"/computer/drivers"} element={ <Drivers/> } />
        <Route path={"/computer/bios"} element={ <Bios/> } />

        <Route path={"/tools/converter"} element={ <Converter/> } />
        <Route path={"/tools/socials"} element={ <Socials/> } />
        <Route path={"/tools/to-do"} element={ <ToDo/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
