import React , {useState,useEffect}from 'react';
import MyContext from '../../utils/Context';
import { UserdetailsService } from '../../modules/Dashboard/service';


export default function NameProvider(props) {
    const [user , setUser] = useState({});
    // async function fetchUserDet() {
    //     let res = await UserdetailsService();
    //     try {
    //         if(res.meta.status >= 200 && res.meta.status <300){
    //             setUser(res.data);
               
    //         }
    //     }
    //     catch(error){
    //         console.log(error);
    //     }

    // }

    // useEffect(() => {
    //     fetchUserDet();
    // },[])


    return (
<MyContext.Provider
value={{
    userName : user,
    setUserNow : User => {
     setUser(User);
    //  console.log(User) 
    }
}}>
{props.children}
     </MyContext.Provider>
    )
}
