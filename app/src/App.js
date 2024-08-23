import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import { Welcome } from './views/Welcome';
import { Informations } from './views/Software/Informations';
import { Components } from './views/Software/Components';
import { Reinstall } from './views/Update/Reinstall';
import { Networks } from './views/Software/Networks';
import { Checkin } from './views/Software/Checkin';
import { Drivers } from './views/Update/Drivers';
import { Bios } from './views/Update/Bios';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Welcome/> } />
        <Route path={"/home"} element={ <Welcome/> } />

        <Route path={"/software/informations"} element={ <Informations/> } />
        <Route path={"/software/components"} element={ <Components/> } />
        <Route path={"/software/networks"} element={ <Networks/> } />
        <Route path={"/software/check-in"} element={ <Checkin/> } />

        <Route path={"/computer/os"} element={ <Reinstall/> } />
        <Route path={"/computer/drivers"} element={ <Drivers/> } />
        <Route path={"/computer/bios"} element={ <Bios/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
