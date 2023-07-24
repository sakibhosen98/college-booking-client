import { useEffect, useState } from "react";
import MySingleData from "./MySingleData";

const Mycollege = () => {

    // const email = 'sujon@gmail.com';
    const [admissionData, setAdmissionData] = useState([]);


    useEffect(() => {
        try {
            fetch('http://localhost:5000/admissions')
                .then(res => res.json())
                .then(data => {
                    setAdmissionData(data);
                    console.log(data);
                })
        } catch (error) {
            console.log("error", error.message);
        }
    }, [])

    return (
        <div>
            <h1 className='text-4xl '>Total Admission Applied {admissionData.length} </h1>
            
           <div className="overflow-x-auto w-full">
        <table className="table w-full border-2">
          {/* head */}
          <thead>
            <tr className="text-xl">
              <th></th>
              <th>Picture</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No</th>
              <th>Address</th>
              <th>College Name</th>
              <th>Subject</th>
              <th>Birthday</th>
            </tr>
          </thead>
          <tbody>
          {
                admissionData.map(singleData => <MySingleData 
                    key={singleData._id}
                    singleData={singleData}
                    ></MySingleData> )
            }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Mycollege;