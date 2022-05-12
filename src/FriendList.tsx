import styled  from "styled-components";
import {useState , useCallback} from "react";
import { FriendItem } from "./type";
import user from "./data/user.json";
import {Header,Input,FriendWrapper,FriendContainer,FriendProfile,FriendName,FriendIntro} from "./BasicListDesign";

function FriendList(){

    const [search, setSearch] = useState<string>("");
    const [friendList, setFriendList] = useState<FriendItem[]>(user); 
  
    const onChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {setSearch(event.target.value)},[]);
   
    const searchFriend = friendList.filter((friend) => {
        return friend.name.includes(search);
      });

   
    return(
       <div id ="Wrapper">
         <Header>친구 목록</Header>
             <Input
           onChange={onChange}
           value={search}
           type="text"
           placeholder="🔎친구 검색"
           autoFocus = {true}
           spellCheck="false"
           />
           <FriendWrapper>
              {
              searchFriend.map((friend)=> (
              
              <FriendContainer>
              <FriendProfile src = {friend.profile}/>
              <FriendName>{friend.name}</FriendName>
              <FriendIntro introLength ={friend.intro.length}>{friend.intro}</FriendIntro>
              </FriendContainer>
              
              ))
              }
            </FriendWrapper>

       </div> 
    );

}

export default FriendList;