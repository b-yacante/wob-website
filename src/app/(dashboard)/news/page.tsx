'use client'
import NewsComponent from '@/app/components/news-component'
export default function News() {
  return (
    <div className="grid place-items-center">
      {/* LOGO */}
      <div className="h-32 w-full bg-red-400 sm:h-40 md:h-44 lg:h-52 xl:h-64"></div>
      {/* NEWS LIST */}
      <div className="w-full py-3 md:py-6 lg:py-8">
        <NewsComponent title="News" img={<img src="" />}>
          <p>text</p>
        </NewsComponent>
      </div>
    </div>
  )
}
