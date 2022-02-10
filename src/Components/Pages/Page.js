import {useMoralis, MoralisProvider} from 'react-moralis';
import User from './User/User'
import Home from './Home/Home'

const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;
function Page(){
    const { isAuthenticated } = useMoralis();
    if(isAuthenticated){
        return(
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <User/></MoralisProvider>
        );
    }else{
        return(
            <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Home/>
        </MoralisProvider>
        );
    }
}
export default Page;