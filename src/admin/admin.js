import React from 'react';
import AuthService from '../service/auth-guard';
import RoleService from '../service/role-guard';

class Admin extends React.Component{

    componentDidMount(){
        let auth= AuthService();
        let role=RoleService();
        if(!auth || !role){
            this.props.history.push('/Login');
        }
    } 

    render(){
        return(
            <div>
                <div className="row">
                        <div className="col col-md-2">
                            <a className="nav-item nav-link" href="profile">Profile</a>
                            <a className="nav-item nav-link" href="contact">contact</a>
                            <a className="nav-item nav-link" href="about">About</a>
                        </div>
                        <div className="col col-md-6">
                            {/* <router-outlet></router-outlet> */}
                        </div>
                </div> 
            </div>
        )
    }
}

export default Admin;