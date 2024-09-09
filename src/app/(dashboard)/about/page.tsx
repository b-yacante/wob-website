'use server'
import MemberCard from '@/app/components/member-card'

export default async function About() {
  return (
    <div className="grid place-items-center">
      {/* LOGO */}
      <div className="h-32 w-full bg-red-400 sm:h-40 md:h-44 lg:h-52 xl:h-64"></div>
      {/* CONTENT */}
      <div className="py-12">
        <div className="space-y-5 md:text-lg">
          <p>
            At WoB, we are an independent game development studio driven by a
            deep passion for creating unique gaming experiences. Our journey
            began with the vision of crafting our own games, with a distinct
            focus on one key element: ranged weapons. Whether it's bows,
            pistols, or any other form of distance combat, this theme is at the
            heart of what we do.
          </p>
          <p>
            The name WoB stands for Way of Bow, inspired by the concept of The
            Way of the Bow. This philosophy shapes the foundation of our studio
            and influences the games we create. Every project we undertake is
            centered around this core idea, where ranged weapons play a pivotal
            role in gameplay, no matter the genre.
          </p>
          <p>
            Our mission is to explore various genres while staying true to our
            signature style of combat mechanics. We aim to push boundaries,
            experiment with different game types, and develop titles that offer
            something fresh and exciting for both casual players and dedicated
            fans of ranged combat alike.
          </p>
          <p>
            At WoB, we are not just developing games; we are building a
            community of players who share our love for this unique style of
            play. We are excited to embark on this journey with you and are
            grateful to all those who will join us as we continue to innovate
            and create.
          </p>
        </div>
      </div>
      <div className="pb-3">
        <h1 className="text-lg md:text-2xl">Members</h1>
      </div>
      <div className="my-4 space-y-4">
        <MemberCard
          name="Braian Maximiliano Yacante"
          imgUrl="/"
          instagram="/"
          github="/"
          twitter="/"
          position="Programmer, Game Designer, Game Artist & Game Composer"
        />
      </div>
    </div>
  )
}
