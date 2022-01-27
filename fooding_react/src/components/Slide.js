import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import styled from 'styled-components';
// const StyledSlider = styled(Slider)`
//     .slick-slide div{
//       outline: none; 
//     }
// `;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="photo1.png" alt="imgslider" className="center"/>
          </div>
          <div>
            <img src="photo2.png" alt="imgslider" className="center"/>
          </div>
          <div>
            <img src="photo3.png" alt="imgslider" className="center" />
          </div>
          <div>
            <img src="photo4.png" alt="imgslider" className="center" />
          </div>
          <div>
            <img src="photo5.png" alt="imgslider" className="center"/>
          </div>
        </Slider>
      </div>
    );
  }
}

