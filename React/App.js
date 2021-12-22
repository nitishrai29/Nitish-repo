
import AddUser from './CrudMern/component/AddUser';

// import NotFound from './Component/NotFound'; 

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import AllUser from './CrudMern/component/AllUser';
// import EditUser from './CrudMern/component/EditUser';
import tri from './CrudMern/component/try';
import EditUser from './CrudMern/component/StudentEdit';
// import studentLogin from './CrudMern/component/studentLogin';
import StudentLogin from './CrudMern/component/studentLogin';
// import { useAuth } from './CrudMern/component/routes/isLogin';

import ProtectedRoute from './CrudMern/component/routes/protectedRoutes';
import {LoginContext} from './CrudMern/component/LoginContext.js';

import UserContext from './CrudMern/component/LoginContext'
// import logout from './CrudMern/component/Logout';
import Logout from './CrudMern/component/Logout';
import Home from './CrudMern/component/Home';
import Links from './CrudMern/component/Links';
// import Privateroutes from 'c:/users/maacn/downloads/privateroutes (1)';

function App() {
  // const [isAuth] = useAuth(false)

  return (
    
    <UserContext>
      <>
    <Router>
      
      <Routes>
        <Route exact path="/add" element={<AddUser/>} />
        <Route exact path="/home" element={<ProtectedRoute component={Home}/>} />
        
        <Route exact path={`/edit/:id`} element={<EditUser/>}/>
        <Route exact path='/login' element={<StudentLogin/>}/>
        <Route exact path='/logout' element={<Logout/>}/>
        <Route exact path='/links' element={<ProtectedRoute component={Links}/>}/>

        {/* <ProtectedRoute path="/get" component={AllUser} /> */}

        {/* <Route exact path={`/get/update/:id`} component={EditUser}/> */}

        <Route exact path="/get" element={<ProtectedRoute component={AllUser}/>} />

      </Routes>
      
    </Router>
    </>
    </UserContext>
    
    
  );
}

export default App;