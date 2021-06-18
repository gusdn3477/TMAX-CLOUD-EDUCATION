import { useState } from 'react';

export default function WhyKey(){    

    const [userList, setUserList] = useState([
        {id:1, name : "빌 게이츠"},
        {id:2, name : "스티브 잡스"},
        {id:3, name : "홍길동"},
        {id:4, name : "엘론 머스크"},
    ])
    
    return (
        <div>
            {
                userList.map((item, index) => (
                    <input 
                        type="text" 
                        placeholder={item.name} 
                        style={{display : "block"}}>
                    </input>
                ))
            }
        </div>
    );
}