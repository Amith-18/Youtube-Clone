import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
    return (
        <div className='play-video'>
            <video src={video1} controls autoPlay muted></video>
            <h3>Best Youtube channel To Learn Web Development</h3>
            <div className='play-video-info'>
                <p>222 views &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt="" />125</span>
                    <span><img src={dislike} alt="" />2</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt="" />
                <div>
                    <p>Amith</p>
                    <span>1M Subcribers</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-desc">
                <p>Channel that makes learning Easy</p>
                <p>Subscribe Amith to watch More Tutorial about 3D printing</p>
                <hr />
                <h4>222 Comments</h4>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comments">
                    <img src={user_profile} alt="" />
                    <div>
                        <h3>Jack <span>1 day ago</span></h3>
                        <p>Very Impressive video</p>
                        <div className='comment-action'>
                            <img src={like} alt="" />
                            <span>222</span>
                            <img src={dislike} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayVideo