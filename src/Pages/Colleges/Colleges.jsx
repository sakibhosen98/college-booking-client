import Cover from "../Shared/Cover/Cover";
import collegeImg from "../../assets/images/banner/banner2.jpg";
import { useEffect, useState } from "react";
import SingleCollege from "./SingleCollege";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allCollege")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setColleges(data);
      });
  }, []);

  return (
    <section>
      <div className="">
      <Cover img={collegeImg} title="Our College"></Cover>
      </div>
      <SectionTitle
        subHeading={"Join Our Colleges"}
        heading={"Our Popular Colleges"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {colleges.map((college) => (
        <SingleCollege key={college.id} college={college}></SingleCollege>
      ))}
      </div>
    </section>
  );
};

export default Colleges;
