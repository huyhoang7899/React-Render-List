import React from 'react';

class FollowFriendListItem extends React.Component {
    render() {
        return (
            <div className="follow-friend-list d-flex bd-highlight align-items-center">
                <img className="bd-highlight" src="https://picsum.photos/35" alt="Avatar Friend"></img>
                <div className="bd-highlight">
                    <p style={{ margin: 0, textAlign: "left" }}>{this.props.user}</p>
                    <p style={{ color: "#999999" }}>Gợi ý cho bạn</p>
                </div>
                <p className="bd-highlight ml-auto mr-3" style={{ color: "#1876F2" }}>Theo dõi</p>
            </div>
        )
    }
}

export default FollowFriendListItem