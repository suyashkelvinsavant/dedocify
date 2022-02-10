import {useMoralis} from 'react-moralis';
import User from './User/User'
import Home from './Home/Home'
function Page(){
    const { isAuthenticated } = useMoralis();
    if(isAuthenticated){
        return(<User/>);
    }else{
        return(<Home/>);
    }
}
export default Page;