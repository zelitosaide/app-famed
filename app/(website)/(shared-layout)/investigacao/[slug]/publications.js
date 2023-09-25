export default function Publications({ publications }) {
  return (
    <ul>
      {publications.map(function(pub) {
        return (
          <li key={pub._id}>{pub.title}</li>
        );
      })}
    </ul>
  )
}