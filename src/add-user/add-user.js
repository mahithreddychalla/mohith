import React,{Component} from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
import AuthService from '../service/auth-guard';

class AddUser extends Component{
    state={
            
            name:'',
            email:''
          }
    formSubmit=(event)=>{
        // const data = new FormData(event.target);
        // console.log(data)
        console.log(this.state)
        axios.post('http:localhost:4000/customers/add', this.state)
        .then((res)=>{
            console.log(res.data)
            this.props.history.push({pathname:'/UserList'})
        },(err)=>{
            console.log('error '+err)
        })
        event.preventDefault();
    }
    
    handleInputChange=(event)=>{
        // console.log(event.target.value) //value of input tag
        // console.log(event.target.name) //name of input tag
        let name=event.target.name;
        let value=event.target.value;
        this.setState({
              [name]:value  
        })
    }

    componentDidMount(){
        let auth= AuthService();
        if(!auth){
            this.props.history.push();
        }
    }

    render(){
        return(
              <div className="container"> 
                    <form onSubmit={this.formSubmit}>
                        {/* <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" type="text" name="id" onChange={this.handleInputChange} />
                        </div> */}
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" type="text" name="name" onChange={this.handleInputChange} />  
                        </div> 
                        <div className="form-group">
                            <label>email</label>
                            <input className="form-control" type="text" name="email" onChange={this.handleInputChange} />
                        </div> 
                       
                        <Link to="/UserList" className="btn btn-success" >Addusers</Link>
                    </form>
             </div> 
        )
    }
}

export default AddUser;