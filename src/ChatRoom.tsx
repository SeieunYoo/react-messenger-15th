import { useState,useMemo } from "react";
import UserProfile from "./UserProfile";
import styled  from "styled-components";

function ChatRoom(){

    const{messageList,setMessageList} = useMessageList();
    const [changeUser,setChangeUser] = useState<number>(0);

    const ChatWrapper = styled.div
    `
      flex:1;
      display : flex;
      flex-direction:column;
     
    `;

    return(
    <ChatWrapper>
        <UserProfile changeUser={changeUser} setChangeUser = {setChangeUser}/>
        
    </ChatWrapper>
    );