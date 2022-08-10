import './App.css';
import Welcome from './pages/Welcome'
import PlanLayout from './pages/Layouts/PlanLayout'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PhoneConfirmation from './pages/PhoneConfirmation'
import CodeConfirm from './pages/CodeConfirm'
import AllowNotification from './pages/AllowNotification'
import AppLayout from './pages/Layouts/AppLayout'
import Home from './pages/Home'
import Explore from './pages/Explore'
import Profile from './pages/Profile'

function App() {
  return (
    <BrowserRouter>

      {/* <Route exact path={['/', '/invite', '/get_username', '/code_confirm', '/allow_notification']}> */}
        <PlanLayout>
          <Routes>
            <Route exact="true" path="/" element={<Welcome/>} />
            <Route exact="true" path="/invite" element={<PhoneConfirmation/>} />
            <Route exact="true" path="/code_confirm" element={<CodeConfirm/>} />
            <Route exact="true" path="/allow_notification" element={<AllowNotification/>} />
          </Routes>
        </PlanLayout>
      {/* </Route> */}

      {/* <Route exact path={['/home']}> */}
        <AppLayout>
          <Routes>
            <Route exact="true" path='/home' element={<Home/>} />
            <Route exact="true" path='/explore' element={<Explore/>} />
            <Route exact="true" path='/profile' element={<Profile/>} />
          </Routes>
        </AppLayout>
      {/* </Route> */}

    </BrowserRouter>
  );
}

export default App;
