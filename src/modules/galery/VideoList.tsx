"use client";
import Container from "@/components/shared/Container";
import { useState } from "react";
import CloseIcon from "@/assets/icons/close.svg";
import PlayIcon from "@/assets/icons/playButton.svg";
import Image from "next/image";

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videos = {
    items: [
      { id: 1, url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 2, url: "https://www.youtube.com/embed/ysz5S6PUM-U" },
      { id: 3, url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
      { id: 4, url: "https://www.youtube.com/embed/ScMzIvxBSi4" },
      { id: 5, url: "https://www.youtube.com/embed/3fumBcKC6RE" },
      { id: 6, url: "https://www.youtube.com/embed/l9PxOanFjxQ" },
    ],
  };

  return (
    <Container>
      <div className="grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {videos.items.map((video) => (
  <div
    key={video.id}
    className="cursor-pointer overflow-hidden rounded-lg relative"
    onClick={() => setSelectedVideo(video.url)}
  >
    {/* Thumbnail */}
    <Image
      src={`https://img.youtube.com/vi/${video.url.split("/embed/")[1]}/hqdefault.jpg`}
      alt={`video-${video.id}`}
      width={400}
      height={300}
      className="w-full h-60 object-cover hover:scale-105 transition-transform duration-200"
      unoptimized
      priority={false}
    />

    {/* Overlay Layer */}
    <div className="absolute inset-0 bg-black/20"></div>

    {/* Play icon (SVG) */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <PlayIcon />
    </div>
  </div>
))}

      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()} // iç klikdə modal bağlanmasın
          >
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src={selectedVideo + "?autoplay=1"}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div
              className="cursor-pointer absolute -top-3 -right-3"
              onClick={() => setSelectedVideo(null)}
            >
              <CloseIcon />
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default VideoList;
