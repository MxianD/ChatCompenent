import React, { useState, useEffect } from "react";
import useFriendStatus from "./usefriendstatus";
const friendList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
];
function ChatRecipientPicker() {
    const [recipientID, setRecipientID] = useState(1);
    const isRecipientOnline = useFriendStatus(recipientID);
    return (
        <>
            <Circle color={isRecipientOnline ? 'green' : 'red'}></Circle>
            <select
                value={recipientID}
                onChange={e=>setRecipientID(NUmber(e.target.value))}
            >
                {friendList.map(friend => (
                    <option key={friend.id} value={friend.id}>
                        {friend.name}
                    </option>
                ))}
            </select>
        </>
    )
}