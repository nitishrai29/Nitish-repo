
import AddUser from './CrudMern/component/AddUser';

// import NotFound from './Component/NotFound'; 

import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
// import Privateroutes from 'c:/users/maacn/downloads/privateroutes (1)';

function App() {
  // const [isAuth] = useAuth(false)

  return (
    <>
    <UserContext>
    <BrowserRouter>
      
      <Switch>
        <Route exact path="/add" component={AddUser} />
        
        <Route exact path={`/edit/:id`} component={EditUser}/>
        <Route exact path='/login' component={StudentLogin}/>

        {/* <ProtectedRoute path="/get" component={AllUser} /> */}

        {/* <Route exact path={`/get/update/:id`} component={EditUser}/> */}

        <Route exact path="/get" component={ProtectedRoute} />

        
      </Switch>
    </BrowserRouter>
    </UserContext>
    
    </>
  );
}

export default App;