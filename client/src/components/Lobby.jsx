import React, { useCallback, useState } from "react";

export const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [roomid, setRoomid] = useState("");

  const handleubmitForm = useCallback((e) => {
    e.preventDefault();
    console.log(email, roomid);
  });
  return (
    <div>
      <form onSubmit={handleubmitForm}>
        <label htmlFor="email"> Email Id</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <label htmlFor="room"> Room Number</label>
        <input
          type="text"
          id="room"
          value={roomid}
          onChange={(e) => {
            setRoomid(e.target.value);
          }}
        />

        <button>Join</button>
      </form>
    </div>
  );
};
