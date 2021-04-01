import React, {useEffect, useState} from 'react';
import s from "../ProfileInfo.module.css";


const   ProfileStatusWithHooks = props => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };


    return (
        <div>
            {!editMode &&
            <div className={props.status ? s.status : s.withoutStatus}>
                {props.isOwner &&
                <span onDoubleClick={activateEditMode}>{props.status || "status"}</span>}
                {!props.isOwner && <span> {props.status || "status"}</span>}
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true} onChange={onStatusChange} value={status} onBlur={deactivateEditMode}
                />
            </div>
            }
        </div>
    );
}

export default ProfileStatusWithHooks;
