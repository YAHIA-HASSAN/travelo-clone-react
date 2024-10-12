import React from "react";
import '@dotlottie/player-component'; // استيراد المكتبة

const VideoSection = () => {
    return (
        <section className="video_area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="video_wrap text-center">
                            <h3>Enjoy Video</h3>
                            <div className="video_icon">
                                <a
                                    className="popup-video video_play_button"
                                    href="https://youtu.be/a4d5CbK0b3A?si=xKu9QSjyS_Wq36GE"
                                    target="_blank" // إضافة هذا لفتح الفيديو في نافذة جديدة
                                    rel="noopener noreferrer" // تحسين الأمان
                                >
                                    <dotlottie-player
                                        src="https://lottie.host/be8c66c9-2279-4ad7-ad12-8943c2b797ac/735MqftyDr.json"
                                        background="transparent"
                                        speed="1"
                                        style={{ width: "10vw", height: "10vw" }}
                                        loop
                                        autoplay
                                    ></dotlottie-player>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
