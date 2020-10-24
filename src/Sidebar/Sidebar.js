import React, { useEffect, useState } from "react";
import "./sidebar.css";
import { SettingsIcon, Avatar, IconButton } from "@material-ui/core";
import { Chat, DonutLarge, MoreVert, Unsubscribe } from "@material-ui/icons";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "../sidebarchat/SidebarChat";
import db from "../firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../ServiceProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const { roomId } = useParams;
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);
  console.log("rooms", rooms);

  console.log(roomId);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src={user?.photoURL} />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room?.data?.name} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
