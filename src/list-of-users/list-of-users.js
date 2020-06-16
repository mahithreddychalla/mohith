import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import AuthService from '../service/auth-guard';


class ListOfUsers extends Component{
    constructor(props){
        super(props);
        axios.get('http://localhost:4000/customers').then(result=>{
            // console.log(result);
            if(result.data instanceof Array){ 
                //if token is not there then response comes back is not array. so we need to check whether result is array type or not, otherwise map function gives you error.
                // console.log('token there')
                this.setState({
                    users:result.data
                })
            }else{ 
                // console.log('token not there') 
            }
        })
    }
    
    componentDidMount(){
       let auth= AuthService();        
       if(!auth){
           this.props.history.push('/UserList')
       }
    }
    
    state={
        id:'1',
        name:'mohith',
        age:'23',
        users:[]
    }
    
    stateDisplay=()=>{
        console.log(this.state);
    }

    deleteUser=(id)=>{
        //  console.log(id)
         let users=[...this.state.users];
         let index= users.findIndex((user,index)=>{return user.id===id});
         users.splice(index,1);
         this.setState({users:users})
         axios.delete(''+id).then(data=>{
             console.log(data);
            //  this.props.navigation.navigate('UserList')
         })
    }
    
    render(){

       let userList=this.state.users.map(user=>{
            return( <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td><Link to={'/updateUser/'+user.id}><button className="btn btn-primary">Update</button></Link></td> 
                        <td><button className="btn btn-success"  onClick={this.deleteUser.bind(this,user.id)}>Delete</button></td>
                    </tr>
                  )  
       })


        return(
            <div>
                 <div className="container">
                        <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>EMAIL</th>
                                        <th>Update</th>
                                        <th>DELETE</th>
                                    </tr>
                                </thead>  
                                <tbody>
                                    {userList}
                                </tbody>
                      </table>
                      <button onClick={this.stateDisplay}>click</button>
                 </div>   
            </div>
        )
    }
}

export default ListOfUsers;