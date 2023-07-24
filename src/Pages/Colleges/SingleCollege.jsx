import { Link } from "react-router-dom";

const SingleCollege = ({college}) => {
  console.log(college)
  const {name,admissionDate,id, collegeImage,rating,researchHistory} = college;
  return (
    <div className="card bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={collegeImage} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>Rating: {rating}</p>
    <p>Admission Date: {admissionDate}</p>
    <p>Research History: {researchHistory}</p>
    <div className="card-actions">
    <div className="text-center">
    <Link to={`/${id}`} className="btn btn-outline border-0 border-b-4 mt-4">View Details</Link >
      </div>
    </div>
  </div>
</div>
  );
};

export default SingleCollege;