
const scientists = [
  {
    name: "Maria Skłodowska-Curie",
    imageId: "szV5sdG",
    profession: "physicist and chemist",
    awards: "Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal",
    discovered: "polonium (element)"
  },
  {
    name: "Katsuko Saruhashi",
    imageId: "YfeOqp2",
    profession: "geochemist",
    awards: "Miyake Prize for geochemistry, Tanaka Prize",
    discovered: "a method for measuring carbon dioxide in seawater"
  }
]

function InfoCard({ person }) {
  return (
    <section className="profile" key={person.imageId}>
      <h2>{person.name}</h2>
      <img
        className="avatar"
        src={`https://i.imgur.com/${person.imageId}s.jpg`}
        alt={`${person.name}`}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {`${person.profession}`}
        </li>
        <li>
          <b>Awards: 4 </b>
          {`${person.awards}`}
        </li>
        <li>
          <b>Discovered: </b>
          {`${person.discovered}`}
        </li>
      </ul>
    </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      {scientists.map((person) => InfoCard({person}))}
    </div>
  )
}
