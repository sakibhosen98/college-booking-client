import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';

const Gellery = () => {
  const [collegeImgs, setCollegeImgs] = useState([]);

  useEffect( ()=> {
    fetch('category.json')
    .then(res => res.json())
    .then(data => {
      console.log('home',data)
      setCollegeImgs(data)
    })
  },[])

  return (
    <section>
      <SectionTitle
        subHeading={"Admission Our College"}
        heading={"College Gellery"}
      ></SectionTitle>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {/* <SwiperSlide><img src={img1} alt="" /></SwiperSlide> */}
      {
        collegeImgs.map((data,index) => <SwiperSlide key={index}>
          <img src={data.collegeImage} alt="" />
        </SwiperSlide>)
      }
      
    </Swiper>
  </section>
  );
};

export default Gellery;