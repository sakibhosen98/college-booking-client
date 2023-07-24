import { useEffect, useState } from "react";
import InputFields from "./InputFields";
import SectionTitle from "../../component/SectionTitle/SectionTitle";

const Admission = () => {

    const [colleges, setColleges] = useState([]);
    const [admissonCollege, setAdmissionCollege] = useState('');

    useEffect(() => {
        fetch("category.json")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setColleges(data);
            });
    }, []);

    const handleClick = (name) =>{

        // console.log('college name', name);
        setAdmissionCollege(name);
    }

    return (
        <section>
            <SectionTitle
            subHeading={"Select Your College"}
            heading={"Input Form"}
            ></SectionTitle>
            <div>
            {
                colleges?.map((college, index) => <p className="btn btn-outline border-0 block border-b-4 mt-4 text-2xl font-semibold" onClick={()=> handleClick(college.name)} key={index} >
                     {college.name } 
                    </p> )
            }

            {   
                admissonCollege && 
                <InputFields admissonCollege={admissonCollege} ></InputFields>
            }

        </div>
        </section>
    );
};

export default Admission;