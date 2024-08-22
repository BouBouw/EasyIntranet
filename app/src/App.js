import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';

import { Welcome } from './views/Welcome';
import { Informations } from './views/Software/Informations';
import { Components } from './views/Software/Components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={ <Welcome/> } />
        <Route path={"/home"} element={ <Welcome/> } />
        <Route path={"/software/informations"} element={ <Informations/> } />
        <Route path={"/software/components"} element={ <Components/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
