import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function SpeakerFavoriteButton({
  isFavorite,
  onFavoriteToggle,
}) {
  const rootPath = `${publicRuntimeConfig.rootFolder}`
  return (
    <div
      className={isFavorite ? 'heartredbutton' : 'heartdarkbutton'}
      onClick={onFavoriteToggle}
    >
      <img src={`${rootPath}/heart-${isFavorite ? 'red' : 'dark'}.png`} />
    </div>
  )
}
