'use serve'
import NewsComponent from '@/app/components/news-component'
export default async function News() {
  return (
    <div className="grid place-items-center">
      {/* LOGO */}
      <div className="grid h-32 w-full place-items-center bg-complement border-dark rounded-lg border-4 sm:h-40 md:h-44 lg:h-52 xl:h-64">
        <img src="/wob.svg"  alt="WoB Logo" className='w-32 h-32 md:w-36 md:h-36 lg:w-48 lg:h-48 xl:w-52 xl:h-52 2xl:w-64 2xl:h-64 object-contain' />
      </div>
      {/* NEWS LIST */}
      <div className="w-full space-y-3 py-3 md:space-y-4 md:py-6 lg:space-y-8 lg:py-8">
        <NewsComponent
          title="News"
          date="01/01/2024"
          content="text"
          imgURL="/"
        ></NewsComponent>
        <NewsComponent
          title="News"
          date="01/01/2024"
          content="text"
          imgURL="/"
        ></NewsComponent>

      </div>
    </div>
  )
}
