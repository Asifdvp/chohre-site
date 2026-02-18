"use client";
import Container from "@/components/shared/Container";
import { useState, useEffect } from "react";
import CloseIcon from "@/assets/icons/close.svg";
import PlayIcon from "@/assets/icons/playButton.svg";
import Image from "next/image";

// YouTube URL-dən video ID-ni çıxar
function getYoutubeId(url: string): string {
  if (url.includes("watch?v=")) return url.split("watch?v=")[1].split("&")[0];
  if (url.includes("/embed/")) return url.split("/embed/")[1].split("?")[0];
  return "";
}

// Embed URL-ə çevir
function toEmbedUrl(url: string): string {
  const id = getYoutubeId(url);
  return `https://www.youtube.com/embed/${id}`;
}

const VideoList = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Scroll bağla
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedVideo]);

  const videos = {
    items: [
      { id: 1, url: "https://www.youtube.com/watch?v=ZgufgwnDYvc" },
      { id: 2, url: "https://www.youtube.com/watch?v=DRHObyB8P0w" },
      { id: 3, url: "https://www.youtube.com/watch?v=ZdetHaK2u3s" },
      { id: 4, url: "https://www.youtube.com/watch?v=XLdJ7QORfL4&pp=0gcJCYcKAYcqIYzv" },
      { id: 5, url: "https://www.youtube.com/watch?v=6-OxofOW_lg" },
      { id: 6, url: "https://www.youtube.com/watch?v=6KW2SpUJX1A" },
    ],
  };

  return (
    <Container>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {videos.items.map((video) => {
          const videoId = getYoutubeId(video.url);
          return (
            <div
              key={video.id}
              className="cursor-pointer overflow-hidden rounded-lg relative h-60"
              onClick={() => setSelectedVideo(video.url)}
            >
              <Image
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={`video-${video.id}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-200"
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <PlayIcon />
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-[90vw] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full rounded-md shadow-lg"
              src={`${toEmbedUrl(selectedVideo)}?autoplay=1`}
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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