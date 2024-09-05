'use serve'

import NewsComponent from '@/app/components/news-component'
export default async function News() {
  return (
    <div className="grid place-items-center">
      {/* LOGO */}
      <div className="h-32 w-full bg-red-400 sm:h-40 md:h-44 lg:h-52 xl:h-64"></div>
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
