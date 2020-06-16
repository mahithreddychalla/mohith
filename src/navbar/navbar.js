import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';


class NavBar extends Component{
    
    logOut(){
        localStorage.removeItem('token');
        // console.log(this.props)
        this.props.history.push('/Login')
    }

    render(){
        const navStyle={
             backgroundColor:'rgba(16, 11, 82, 0.88)'
        }
        return(
            <div>
                <nav className="navbar navbar-expand-lg " style={navStyle}>
                    <a className="navbar-brand" href="/">React</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                          {/* <Link className="nav-item nav-link" to='/'>Home</Link> */}
                          <Link className="nav-item nav-link" to="/addUser">Add User</Link>
                          <Link className="nav-item nav-link" to="/UserList">User List</Link>
                          {/* <Link className="nav-item nav-link" to="/admin">Admin</Link> */}
                          <Link className="nav-item nav-link" to="/Login">Login</Link>
                          <div className="nav-item nav-link" onClick={this.logOut.bind(this)}>LogOut</div>
                    </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(NavBar);