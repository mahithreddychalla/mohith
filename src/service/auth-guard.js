
import decode from  'jwt-decode';


 var checkToken=()=>{
  let token = localStorage.getItem('token');
  
  if(token){ 
        const decodedToken=decode(token);
        if(decodedToken.exp< Date.now()/1000){
              console.log(decodedToken)
              console.log(Date.now()/1000)   
               alert('session is expired so please login again');
               return false;
        } 
        return true;
  }
  else{
      return false; 
  }
}

export default checkToken;