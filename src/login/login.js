import React from 'react';
import axios from 'axios';

class Login extends React.Component{

    state={
        email:'',
        password:''
    } 
    
    handleInputChange=(event)=>{
         let name=event.target.name;
         let value=event.target.value;
         this.setState({
             [name]:value
         })
    }

    formSubmit=(event)=>{
        console.log(this.state);
        axios.post('http://localhost:4000/customers/login',this.state)
                    .then(res=>{
                        let data=res.data;
                        console.log(data)
                        if(data.success){
                            // console.log(data.token)
                            localStorage.setItem('token',data.token);
                            // console.log(this.props)
                            // this.props.history.push('/UserList');
                            this.props.history.goBack();  
                            // this.props.history.goForward();        
                        }else{
                            alert(data.message);
                        } 
                    },(err)=>{
                        console.log('error '+err)
                    })
        event.preventDefault(); 
    }
    
    render(){
        return(
            <div>
                 <div className="container">
                    <form  onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>UserId</label> 
                            <input className="form-control" type="text" onChange={this.handleInputChange} name="email" />  
                        </div>
                        <div className="form-group">
                            <label>Passowrd</label>
                            <input className="form-control" type="password" onChange={this.handleInputChange} name="password" />
                        </div>
                        <input type="submit" className="btn btn-success" />
                    </form>
                 </div>   
            </div>
        )
    }
}

export default Login;