import getConfig from 'next/config'
import { SimpleImg } from 'react-simple-img'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function SpeakerImage({ id }) {
  const imageUrl = `${publicRuntimeConfig.rootFolder}/images/speakers/Speaker-${id}.jpg`
  return (
    <SimpleImg
      src={imageUrl}
      animationDuration="1"
      width={200}
      height={200}
      applyAspectRatio="true"
    />
  )
}
