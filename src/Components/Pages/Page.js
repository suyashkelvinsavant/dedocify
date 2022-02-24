import User from './User/User'
import Home from './Home/Home'

function Page({state,ekey,cid,files,setFiles,setEkey}){

    if(state.connected){
        return(
        <User state={state} ekey={ekey} cid={cid} setFiles={setFiles} files={files} setEkey={setEkey}/>
        );
    }else{
        return(
        <Home/>
        );
    }
}
export default Page;