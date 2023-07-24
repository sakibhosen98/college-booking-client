import { Link } from "react-router-dom";

const SingleClgSection = ({college}) => {
  const {name, id, admissionDate, events, collegeImage, rating, sports, researchHistory} = college;
  console.log("single", college)
  return (
    <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={collegeImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p><span className="font-semibold">Rating :</span> {rating}</p>
    <p><span className="font-semibold">Admission Date :</span> {admissionDate}</p>
    <p><span className="font-semibold">Events: </span> {events}</p>
    <p><span className="font-semibold">Research History : </span> {researchHistory}</p>
    <p><span className="font-semibold">Sports : </span> {sports}</p>
    <div className="card-actions">
    <div className="text-center">
      <Link to={`/${id}`} className="btn btn-outline border-0 border-b-4 mt-4">View Details</Link >
      </div>
    </div>
  </div>
</div>
  );
};

export default SingleClgSection;