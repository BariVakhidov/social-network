import React, {Reducer, useReducer} from "react";
import music1 from "../../assets/images/music1.jpg";
import music2 from "../../assets/images/music2.jpg";
import music3 from "../../assets/images/music3.jpg";
import music4 from "../../assets/images/music4.jpeg";
import Audio from "./Audio";

export interface Track {
    id: number,
    duration: string,
    singer: string,
    title: string,
    coverImg: string
}
interface MusicState {
    count: number;
    music: Array<Track>;
    playingTrack: Track | null;
}
const initialState: MusicState = {
    count: 0,
    music: [
        {   id:1,
            duration: "4:30",
            singer: "Dawid Bowie",
            title: "Let's dance",
            coverImg: music1
        },
        {
            id:2,
            duration: "5:35",
            singer: "Korn",
            title: "Twisted transistor",
            coverImg: music2
        },
        {
            id:3,
            duration: "3:50",
            singer: "Slipknot",
            title: "Duality",
            coverImg: music3
        },
        {
            id:4,
            duration: "4:11",
            singer: "Elvis Presley",
            title: "A Little Less Conversation",
            coverImg: music4
        }
    ],
    playingTrack : null
};

const reducer:Reducer<MusicState, any > = (state, action) => {
    switch (action.type) {
        case "increment":
            return {
                ...state,
                count: state.count + 1
            }
        case "decrement":
            return {
                ...state,
                count: state.count - 1
            }
        case "play":
            return {
                ...state,
                playingTrack: action.track
            }
        case "stopPlay":
            return {
                ...state,
                playingTrack: {...state.playingTrack, playingTrack: null}
            }
        case "pause":
            return {
                ...state
            }
        default:
            return state
    }
}
const Music = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const play = (track:Track) => dispatch({type: "play", track});
    const stopPlay = () => dispatch({type: "stopPlay"});
    return (
        <div>
            {state.music.map(m => <Audio key={m.title}
                                         track={m}
                                         playingTrack={state.playingTrack} play={play} stopPlay={stopPlay}/>)}
        </div>
    );
};
export default Music;

