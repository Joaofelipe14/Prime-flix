import{ BrowserRouter,Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Filme from './pages/Filme';
import Headar from './components/Header';


function RoutesApp(){
    return (
        <BrowserRouter>
        <Headar/>
         <Routes>
            <Route path="/" element={  <Home/>} />
            <Route path="/filme/:id" element={  <Filme/>}/>
         </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp ;