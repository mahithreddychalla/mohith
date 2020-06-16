import decode from  'jwt-decode';

var checkRole=()=>{
    let token = localStorage.getItem('token');
    if(token){
        const decodedToken=decode(token);
        if(decodedToken.role=== 'admin'){
                console.log(decodedToken)   
                return true;  
        }else{        
            alert('You don\'t have Permission to access to this Page.');
            return false;
        }
    }else{
        return false;
    }   
  }
  
  export default checkRole;