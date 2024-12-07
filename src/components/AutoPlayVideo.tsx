import { useEffect, useRef, useState } from "react";

const AutoPlayVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const videoElement: HTMLVideoElement | null = videoRef.current;
    const handlePlayPause = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement!.play();
        } else {
          videoElement!.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlayPause, {
      threshold: 0.5, // 50% of the video must be visible for it to play
    });

    observer.observe(videoElement!);

    // Cleanup observer when component unmounts
    return () => {
      observer.unobserve(videoElement!);
    };
  }, []);

  return (
    <div className="relative">
      <video
        ref={videoRef}
        width="600"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls={false}
        muted
        tabIndex={-1}
        className="rounded-xl"
      >
        <source
          src="https://ik.imagekit.io/ikmedia/example_video.mp4"
          type="video/mp4"
        />
      </video>
      <div
        className="absolute top-[42%] left-[48%]"
        onClick={() =>
          isPlaying ? videoRef.current!.pause() : videoRef.current!.play()
        }
      >
        <img
          src={`icons/${isPlaying ? "pause" : "play"}.svg`}
          alt={isPlaying ? "pause" : "play"}
        />
      </div>
    </div>
  );
};

export default AutoPlayVideo;
