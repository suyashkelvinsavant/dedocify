import User from './User/User'
import Home from './Home/Home'
function Page({state}){
    if(state.connected){
        return(
        <User state={state}/>
        );
    }else{
        return(
        <Home/>
        );
    }
}
export default Page;