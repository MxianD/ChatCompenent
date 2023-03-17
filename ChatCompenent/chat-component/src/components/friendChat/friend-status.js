import React, { useState, useEffect } from "react";
import useFriendStatus from "./usefriendstatus";
export default function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);
    if (isOnline === null) {
        return 'Loading...';
    }
    return isOnline ? 'Online' : 'Offline';
}