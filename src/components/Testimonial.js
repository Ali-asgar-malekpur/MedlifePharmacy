
import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Testimonal() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
      <>
      <div className='main'>
    <div className='testimonal'>
    <h3 className="start"><span className='BottomLine'>Testi</span>monials</h3>
    <br/>
    <Slider {...settings}>
      <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>SHRUTI</h3>
        <span className='grayy'>26 / EY Employee</span>
      </div>

      <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>SHALINI</h3>
        <span className='grayy'>25 / ICICI</span>
      </div>


            <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 '>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

            <div className='testimonal-card mx-5'>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 greenback'>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 greenback'>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>      <div className='testimonal-card mx-5 greenback'>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>

      <div className='testimonal-card mx-5 greenback'>
        <p className='testimonal-para'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
        <h3 className='centertext'>ANJU MADNANI</h3>
        <span className='grayy'>49 / Homemaker</span>
      </div>  
    </Slider>
  </div>
  </div>
  </>
  )


}

export default Testimonal
