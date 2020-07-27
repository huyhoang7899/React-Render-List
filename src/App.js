import React from 'react';
import logo from './logo.svg';
import './App.css';
import RecommendedFriends from './components/RecommendedFriends';
import FollowFriendListItem from './components/FollowFriendListItem';

function App() {
  const friends = ["huyhoang", "camtuanh", "lanhuong", "vancong"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <RecommendedFriends />
        {
          friends.map((item, index) => <FollowFriendListItem key={index} user={item}/>)
        }
        
      </header>
    </div>
  );
}

export default App;
