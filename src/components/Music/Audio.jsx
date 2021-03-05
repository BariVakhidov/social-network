import React, {useState} from "react";
import s from "./Music.module.css";
import playIcon from "../../assets/images/play.svg";
import pauseIcon from "../../assets/images/pause.png"

const Audio = ({track, play, playingTrack, stopPlay}) => {
    let [isPaused, setPause] = useState(false);
    return (
        <div className={s.audio}>
            <div className={s.cover}>
                <img src={track.coverImg} alt="" height={50}/>
            </div>
            <div className={s.titleCont}>
                <div className={s.title}>
                    {track.title}
                </div>
                <div className={s.singer}>
                    {track.singer}
                </div>
            </div>
            <div className={s.playCont}>
                <div className={s.play}>
                    {(!playingTrack || track.id !== playingTrack.id || isPaused) && <div onClick={()=>{
                        play(track);
                    setPause(false)}}><img src={playIcon} alt="" height={15}/></div>}
                    {((playingTrack && track.id === playingTrack.id) || isPaused) &&
                        <div onClick={()=> {
                        setPause(true);}}><img src={pauseIcon} alt="" height={15}/></div>}
                </div>
                <div className={s.duration}>
                    {track.duration}
                </div>
            </div>
        </div>
    )
}
export default Audio;