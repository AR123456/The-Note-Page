// run code when component updates with useEffect
import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "almost home", id: 1 },
    { title: "memory gospel", id: 2 },
    { title: "this wild darkness", id: 3 },
  ]);
  const [age, setAge] = useState(20);

  const addSong = (title) => {
    setSongs([...songs, { title, id: uuid() }]);
  };
  // takes a call back and runs every time the component renders or
  // re renders    like to communicate with a DB or end point
  // it runs any time any state updates not just addSons
  // to limit need to pass in param that is the array of data we
  // want to watch or run when state updates
  useEffect(() => {
    console.log("useEffect hook ran ", songs);
  }, [songs]);
  // can run a use effect more than one time
  useEffect(() => {
    console.log("useEffect hook ran ", age);
  }, [age]);
  return (
    <div className="song-list">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong={addSong}></NewSongForm>
      <button onClick={() => setAge(age + 1)}>Add one to age : {age}</button>
    </div>
  );
};

export default SongList;
