import Image from "next/image";
import Link from "next/link";

export default function CatCard({ cat }) {
  return (
 <div className="catCardContainer">

      <div className="catCardImageWrapper">
       <Image
  src={cat.image}
  alt={cat.name}
  width={400}
  height={200}
  className="catCardImage rounded-md"
        />
      </div>

      <div className="catCardContent">
        <div className="catCardHeader">
          <h3 className="catCardName">{cat.name}</h3>
        </div>

        <div className="catCardDetails">
          <div className="detailItem">
            <span className="detailLabel">Age:</span>
            <span className="detailValue">{cat.age}</span>
          </div>
          <div className="detailItem">
            <span className="detailLabel">Breed:</span>
            <span className="detailValue">{cat.breed}</span>
          </div>
          <div className="detailItem">
            <span className="detailLabel">Gender:</span>
            <span className="detailValue">{cat.gender}</span>
          </div>
        </div>

        <p className="catCardBio">{cat.bio}</p>

        <Link
          href={{pathname: "/applicationform", query: { catId: cat.id },}}className="adoptButton">
          Adopt Me
        </Link>
      </div>
    </div>
  );
}
