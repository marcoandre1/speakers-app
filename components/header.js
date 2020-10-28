import getConfig from 'next/config'

// Only holds serverRuntimeConfig and publicRuntimeConfig
const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()

export default function Header() {
  return (
    <div className="bg-gray-200 rounded-md mb-6 p-6 pt-12 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 text-center mb-6 md:mb-0">
          <h6 className="uppercase">October 19-20&nbsp;&nbsp;2019</h6>
          <h6 className="uppercase">San Jose, California</h6>
        </div>
        <div className="col-span-2 text-center md:text-right">
          <div className="flex justify-center md:justify-end">
            <img
              src={`${publicRuntimeConfig.rootFolder}/SVCClogo.png`}
              alt="SVCClogo"
            />
          </div>
          <h2>Silicon Valley Code Camp 2019</h2>
        </div>
      </div>
    </div>
  )
}
