'use server'

import GameDescriptionComponent from '@/app/components/game-description'

export default async function FocValiPage() {
  return (
    <div className="mt-8 grid h-full w-full place-items-center">
      <GameDescriptionComponent
        title="Titulo"
        imgUrl="https://static.vecteezy.com/system/resources/previews/021/967/775/original/portable-game-console-in-pixel-art-style-vector.jpg"
        href="https://instagram.com"
        content={
          <p>
            asdasd <br />
            .asd Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae commodi autem eveniet facilis quaerat aut minus quis
            doloribus a quisquam! Voluptas enim ipsam sunt culpa vero eaque
            ullam quasi quidem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Repudiandae commodi autem eveniet facilis quaerat
            aut minus quis doloribus a quisquam! Voluptas enim ipsam sunt culpa
            vero eaque ullam quasi quidem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Repudiandae commodi autem eveniet
            facilis quaerat aut minus quis doloribus a quisquam! Voluptas enim
            <br />
            ipsam sunt culpa vero eaque ullam quasi quidem. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Repudiandae commodi autem
            eveniet facilis quaerat aut minus quis doloribus a quisquam!
            Voluptas enim ipsam sunt culpa vero eaque ullam quasi quidem. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            commodi autem eveniet facilis quaerat aut minus quis doloribus a
            quisquam! Voluptas enim ipsam sunt culpa vero eaque ullam quasi
            quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae commodi autem eveniet facilis quaerat aut minus quis
            doloribus a quisquam! Voluptas enim ipsam sunt culpa vero eaque
            ullam quasi quidem.
          </p>
        }
      />
    </div>
  )
}
