import { useEffect, useState } from "react";
import SingleClgSection from "./SingleClgSection";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";

const CollegesSection = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCollege")
      .then((res) => res.json())
      .then((data) => {
        setColleges(data.slice(0,3));
      });
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"See Our Colleges"}
        heading={"Popular Colleges"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {colleges.map((college) => (
        <SingleClgSection key={college.id} college={college}></SingleClgSection>
      ))}
      </div>
    </section>
  );
};

export default CollegesSection;