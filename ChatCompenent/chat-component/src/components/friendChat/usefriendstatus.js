import React, { useState, useEffect } from "react";
export default function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null);
    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline);
        }
        ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
        return () => {
            ChatAPI.unscribeToFriendStatus(props.friend.id, handleStatusChange);
        };
    });
    return isOnline;
}