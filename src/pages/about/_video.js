import React from 'react'

import { VideoPlayer } from 'Components'
export const Video = () => (
  <VideoPlayer
    controls
    youtubeConfig={{ playerVars: { autoplay: 1 } }}
    light="https://elementor.thelandingfactory.com/wp-content/uploads/2018/01/videos-placeholder_0003_Layer-6.jpg"
    url="https://www.youtube.com/watch?v=NpEaa2P7qZI"
  />
)
