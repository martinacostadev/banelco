import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <div className='flex place-content-center h-28'>
        <Image src='/img/banelco.jpg' width='150' height='0' />
      </div>
      <div className='flex justify-center bg-gray-100 rounded-xl p-4 text-2xl font-semibold text-blue-700'>
        CAJEROS MAS CERCANOS
      </div>

      <body className='cursor-pointer'>
        <div className='columns-2 mt-4'>
            <div className='flex items-center w-full h-20 bg-gray-100 rounded-l-3xl'>
              <div className='flex items-center w-16 h-full bg-red-700 mr-4 rounded-l-3xl'>
                <Image src='/img/backarrow.svg' width='48' height='48' />
              </div>
              <div className='text-xl whitespace-pre-wrap text-red-700 font-semibold'>
                AV. CORRIENTES 2310{'\n'}140 MTS
              </div>
            </div>

            <div className='flex items-center justify-end w-full h-20 bg-gray-100 rounded-r-3xl'>
              <div className='text-xl whitespace-pre-wrap text-red-700 font-semibold text-right'>
                CALLAO 1720{'\n'}230 MTS
              </div>
              <div className='flex items-center justify-end w-16 h-full bg-red-700 ml-4 rounded-r-3xl'>
                <Image src='/img/forwardarrow.svg' width='48' height='48' />
              </div>
            </div>
        </div>

        <div className='columns-2 mt-4'>
            <div className='flex items-center w-full h-20 bg-gray-100 rounded-l-3xl'>
              <div className='flex items-center w-16 h-full bg-red-700 mr-4 rounded-l-3xl'>
                <Image src='/img/backarrow.svg' width='48' height='48' />
              </div>
              <div className='text-xl whitespace-pre-wrap text-red-700 font-semibold'>
                URIBURU 832{'\n'}430 MTS
              </div>
            </div>

            <div className='flex items-center justify-end w-full h-20 bg-gray-100 rounded-r-3xl'>
              <div className='text-xl whitespace-pre-wrap text-red-700 font-semibold text-right'>
                LARREA 2185{'\n'}1.1 KM
              </div>
              <div className='flex items-center justify-end w-16 h-full bg-red-700 ml-4 rounded-r-3xl'>
                <Image src='/img/forwardarrow.svg' width='48' height='48' />
              </div>
            </div>
        </div>

        <div className='mt-4'>
            <Link href='/'>
              <div className='flex items-center w-full h-20 bg-gray-100 rounded-l-3xl'>
                <div className='flex items-center w-16 h-full bg-red-700 mr-4 rounded-l-3xl'>
                  <Image src='/img/backarrow.svg' width='48' height='48' />
                </div>
                <div className='text-xl text-red-700 font-semibold w-1/3'>
                  VOLVER
                </div>
              </div>
            </Link>
        </div>
      </body>
    </div>
  )
}

export default Home
