import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavBar from './navbar/navbar';
import AddUser from './add-user/add-user';
import ListOfUsers from './list-of-users/list-of-users';
import UpdateUser from './update-user/update-user'; 
import Login from './login/login';

import Admin from './admin/admin';

//eslint-disable-next-line
import axiosInterceptor from './service/axiosInterceptor';


class App extends React.Component {

  render(){
        return (
          <Router > 
              <div>
                  <NavBar></NavBar>  
                      <Route exact path="/addUser" component={AddUser} />        
                      <Route path="/UserList" component={ListOfUsers} />
                      <Route path="/updateUser/:id" component={UpdateUser} />
                      <Route path="/Login" component={Login} />
                      <Route path="/admin" component={Admin} />
              </div>
          </Router>
        );
  }     
}

export default App;
