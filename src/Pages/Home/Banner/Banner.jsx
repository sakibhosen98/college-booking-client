import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/images/banner/banner1.jpg';
import img2 from '../../../assets/images/banner/banner2.jpg'
import img3 from '../../../assets/images/banner/banner2.jpg'

const Banner = () => {
  return (
    <Carousel>
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
            </Carousel>
  );
};

export default Banner;