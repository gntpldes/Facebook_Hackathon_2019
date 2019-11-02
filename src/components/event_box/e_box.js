import React from 'react'; 
import PfPic from './inner_comps/profile_pic'; 
import UserInfo from './user_comps/user_info';

const Box = () => {
    return(
        <div className="EBox">
            <PfPic />
            <UserInfo /> 
        </div>
    ); 
}

export default Box; 