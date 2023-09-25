import Link from "next/link";

export default function Publications({ publications }) {
  return (
    <ul className="grid grid-cols-1 gap-y-7">
      {publications.map(function(pub) {
        return (
          <li 
            key={pub._id}
            className="p-3 bg-[#ffffff] divide-y divide-[#78ba78] rounded shadow-sm shadow-[#ddeedd] border border-[#ddeedd]"
          >
            <Link 
              href={pub.url} 
              target="_blank"
              className="text-base font-bold pb-3 block text-[#178415] hover:underline"
            >
              {pub.title}
            </Link>
            <p>
              {pub.authors.join(", ")}
            </p>
          </li>
        );
      })}
    </ul>
  )
}