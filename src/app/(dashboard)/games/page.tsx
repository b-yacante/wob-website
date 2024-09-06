'use server'

import ImageGradient from '@/app/components/image-gradient'

export default async function Games() {
  return (
    <div className="mt-8 grid h-full w-full grid-cols-1 place-items-center gap-y-8 p-5 md:grid-cols-2 md:gap-x-6">
      <ImageGradient
        href="/games/foc-vali"
        imgUrl="https://static.vecteezy.com/system/resources/previews/021/967/775/original/portable-game-console-in-pixel-art-style-vector.jpg"
        title="Titulo"
        subtitle="subtitle"
      ></ImageGradient>
      <ImageGradient
        href="/games/juego2"
        imgUrl="https://static.vecteezy.com/system/resources/previews/021/967/775/original/portable-game-console-in-pixel-art-style-vector.jpg"
        title="Titulo"
        subtitle="subtitle"
      ></ImageGradient>
    </div>
  )
}
