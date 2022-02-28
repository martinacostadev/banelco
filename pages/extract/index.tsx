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
        SELECCIONA EL IMPORTE
      </div>

      <div className='flex justify-center mt-4 bg-red-700 rounded-3xl p-4 text-xl font-semibold text-white'>
        MÁXIMO DISPONIBLE: 4000
      </div>

      <body className='cursor-pointer'>
        <div className='columns-2 mt-4'>
            <div className='flex items-center w-full h-20 bg-gray-100 rounded-l-3xl'>
              <div className='flex items-center w-16 h-full bg-red-700 mr-4 rounded-l-3xl'>
                <Image src='/img/backarrow.svg' width='48' height='48' />
              </div>
              <div className='text-xl text-red-700 font-semibold w-1/3'>
                1000
              </div>
            </div>

            <div className='flex items-center justify-end w-full h-20 bg-gray-100 rounded-r-3xl'>
              <div className='text-xl text-red-700 font-semibold w-1/3 text-right'>
              OTRO{'\n'}IMPORTE
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
              <div className='text-xl text-red-700 font-semibold w-1/3'>
                2000
              </div>
            </div>

            <div className='flex items-center justify-end w-full h-20 bg-gray-100 rounded-r-3xl'>
              <div className='text-xl text-red-700 font-semibold w-1/3 text-right'>
                3000
              </div>
              <div className='flex items-center justify-end w-16 h-full bg-red-700 ml-4 rounded-r-3xl'>
                <Image src='/img/forwardarrow.svg' width='48' height='48' />
              </div>
            </div>
        </div>

        <div className='columns-1 mt-4'>
            <div className='flex items-center w-1/2 h-20 bg-gray-100 rounded-l-3xl'>
              <div className='flex items-center w-16 h-full bg-red-700 mr-4 rounded-l-3xl'>
                <Image src='/img/backarrow.svg' width='48' height='48' />
              </div>
              <div className='text-xl text-red-700 font-semibold w-1/3'>
                4000
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

      <Link href='https://twitter.com/martindevaluado'>
        <div className='flex flex-col justify-center items-center mt-8'>
          <h2 className='mb-8 text-xl font-semibold text-blue-800'>Hecho con ❤️ by @martindevaluado</h2>
        </div>
      </Link>
    </div>
  )
}

export default Home
