import React from 'react';
// import {} from 'react-router'
import axios from 'axios';
import AuthService from '../service/auth-guard';

class UpdateUser extends React.Component{
    state={
        id:'',
        name:'',
        age:''
    }
    componentDidMount(){
        if(!AuthService()){
            this.props.history.push()
        }
        // console.log(this.props.match.params); // router parameters are present in this.props.match.params
        let id=this.props.match.params.id;
        // console.log(id)
        axios.get('http://localhost:3001/api/user/'+id).then(user=>{
            console.log(user.data);
            this.setState({
               ...user.data[0]
            })
        })
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
        axios.put('http://localhost:3001/api/update/'+this.state.id,this.state).then((res)=>{
            console.log(res.data)
            // console.log(this.props)
            this.props.history.push();  //To navigate programmatically.
            // this.context.history.push('/UserList')
            // HashRouter.push('/UserList');
        },(err)=>{
            console.log('error '+err)
        })
        event.preventDefault();
        
    }

    render(){
        return(
            <div>
                 <div className="container"> 
                    <form onSubmit={this.formSubmit}>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" type="text" value={this.state.id} name="id"  readOnly="readonly" />  
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input  className="form-control" type="text"  name="name" value={this.state.name} onChange={this.handleInputChange} />  
                        </div>                       
                        <div className="form-group">
                            <label>Age</label>
                            <input className="form-control" type="text" name='age' value={this.state.age}  onChange={this.handleInputChange} />
                        </div> 
                        <input type="submit" className="btn btn-success" /> 
                    </form>
                </div>
            </div>    
        )
    }
}

export default UpdateUser;
