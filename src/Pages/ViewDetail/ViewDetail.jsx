import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ViewDetail = () => {
  const detailId = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  const collegeDetail = details.find((detail) => detail.id === detailId.id);
  console.log('detail',collegeDetail);

  return (
    <section>

      <div className=" ">
        <div className="card bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={collegeDetail && collegeDetail.collegeImage} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{collegeDetail && collegeDetail.name}</h2>
            <p>
              <span className="font-semibold">Rating :</span> {collegeDetail && collegeDetail.rating}
            </p>
            <p>
              <span className="font-semibold">Admission Date :</span>{" "}
              {collegeDetail && collegeDetail.admissionDate}
            </p>
            <p>
              <span className="font-semibold">Events: </span> {collegeDetail && collegeDetail.events}
            </p>
            <p>
              <span className="font-semibold">Research History : </span>{" "}
              {collegeDetail && collegeDetail.researchHistory}
            </p>
            <p>
              <span className="font-semibold">Sports : </span> {collegeDetail && collegeDetail.sports}
            </p>
            <p>
              <span className="font-semibold">College Description : </span> {collegeDetail && collegeDetail.collegeDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewDetail;