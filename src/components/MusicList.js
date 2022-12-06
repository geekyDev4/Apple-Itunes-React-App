import { useEffect, useState } from "react";


const MusicList = ({ songs, searchParams, isLoading }) => {
    const [musicList, setMusicList] = useState(songs);
    useEffect(() => {
        setMusicList(songs);
    }, [songs]);

    return (
        <div> {songs && songs.length ?
            musicList.map((song, id) => {
                return <div key={id} className="bg-default text-primary my-3 p-3 music-list-elem" >
                    <div className="d-flex justify-content-between">
                        <div>
                            <h4>{song.artistName}</h4>
                            <div>Track name: {song.trackName}</div>
                        </div>
                    </div>

                </div>
            }) : searchParams && !isLoading ? "No Results found" : ""
        }</div>
    )
}

export default MusicList;