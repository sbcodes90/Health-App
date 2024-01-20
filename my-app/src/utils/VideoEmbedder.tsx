import React from 'react'

function VideoEmbedder( id: string) {
  return (
    <iframe
  className="w-full h-full h-full] rounded-2xl"
      src={`https://www.youtube.com/embed/${id}?autoplay=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
      title="Embedded youtube"
    />
  )
}

export default VideoEmbedder