import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Info from './pages/Info';
import About from './pages/About';
import Destination from './pages/Destination';
import DestinationDetails from './pages/DestinationDetails';
import Layout from './components/Layout';
import Host from './pages/Host/Host';
import Income from './pages/Host/Income';
import Dashboard from './pages/Host/Dashboard';
import Reviews from './pages/Host/Reviews';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route />
          <Route element={<Layout />}>
            <Route path='/' element={<Info />} />
            <Route path='/host' element={<Host />}>
              <Route path='/host/income' element={<Income />} />
              <Route path='/host/reviews' element={<Reviews />} />
              <Route path='/host/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='/about' element={<About />} />
            <Route path='/destination' element={<Destination />} />
            <Route path='/data/:id' element={<DestinationDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
