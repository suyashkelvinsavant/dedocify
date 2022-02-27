import User from './User/User'
import Home from './Home/Home'
import About from './About/About';
import Pricing from './Pricing/Pricing';
import Terms from './Terms/Terms'

function Page({state,ekey,cid,files,setFiles,setEkey,page}){
    if(page === "about"){
        return(<About/>);
    }
    if(page === "pricing"){
        return(<Pricing/>);
    }
    if(page === "terms"){
        return(<Terms/>)
    }
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