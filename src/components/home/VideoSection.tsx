
const VideoSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="relative w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          preload="metadata"
        >
          <source
            src="https://res.cloudinary.com/dalbjrgto/video/upload/v1748283879/0422_1_fdpyie.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay for better text readability if needed in future */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default VideoSection;
