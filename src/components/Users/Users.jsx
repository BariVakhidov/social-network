import React from 'react';
import s from "./Users.module.css"
import * as axios from "axios";
import userPhoto from '../../assets/images/pepe.png'

class Users extends React.Component {
    componentDidMount() {
        alert("Did mount");
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        alert("Did update");
    }

    render() {
        return (
            <div>
                {this.props.users.map(u =>
                    <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.isFollow ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>Unfollow</button> : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}
                    </div>
                </span>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                    </span>
                </span>
                    </div>)}
            </div>
        );
    }
}

export default Users;