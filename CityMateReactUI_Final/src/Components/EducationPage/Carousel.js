import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../App.css';
import Slider from "react-slick";

const photos=[
  {
    name:"Photo 1",
    url:"https://www.carmelconvent.org/wp-content/uploads/2019/09/New-Block-2.png",
    caption:"Carmel Convent School, Chandigarh"
  },
  {
    name:"Photo 2",
    url:"https://chandigarhmetro.com/wp-content/uploads/2015/01/St.-Johns-Chandigarh-1280x720.jpg"
  ,caption:"St. Johns High School, Chandigarh"
  },
  {
    name:"Photo 3",
    url:"https://www.sacredheartchd.com/slider/Slider14.jpg"
  ,caption:"Sacred Heart Senior Secondary School, Chandigarh"
  },
  {
    name:"Photo 4",
    url:"https://images.jdmagicbox.com/comp/chandigarh/27/0172p172std11127/catalogue/st-annes-convent-school-chandigarh-sector-32c-chandigarh-cbse-schools-3xdf15f.jpg?clr="
  ,caption:"St. Anne’s Convent School, Chandigarh"
  },
  {
    name:"Photo 5",
    url:"https://chandigarhmetro.com/wp-content/uploads/2016/12/bhawan-vidyalaya-junior-chandigarh__1481433440_122.173.185.98-e1481433555871.jpg"
  ,caption:"Bhavan Vidyalaya, Chandigarh"
  },
  {
    name:"Photo 6",
    url:"https://chandigarhmetro.com/wp-content/uploads/2016/12/Strawberry-Fields-School-Chandigarh.jpg"
  ,caption:"Strawberry Fields High School, Chandigarh"
  },
  {
    name:"Photo 7",
    url:"http://stkabir.co.in/wp-content/themes/stkabirNew/images/body_img.jpg"
  ,caption:"St. Kabir Public School, Chandigarh"
  },
  {
    name:"Photo 8",
    url:"https://d2jg2pri5bpndu.cloudfront.net/schools/covers/870_Vivek-High-School-Sector-38B.png"
  ,caption:"Vivek High School, Chandigarh"
  },
  {
    name:"Photo 9",
    url:"https://www.theindianwire.com/wp-content/uploads/2017/06/635147620150458270_Chitkara-International-School.jpg"
  ,caption:"Chitkara International School, Chandigarh"
  },
  {
    name:"Photo 10",
    url:"https://d2jg2pri5bpndu.cloudfront.net/schools/covers/870_32375a209217f63bc20534aee3f33f0d.jpg"
  ,caption:"St. Stephens School, Chandigarh"
  },
  {
    name:"Photo 11",
    url:"https://lh3.googleusercontent.com/proxy/O-aWs36gqnnqEzuBk4Q4p2W2aTDxp0PqvgJyyZz-PvTFgtCMYKe024BUYSjL2Qo9WQPxIguSbZqA7nv3I-aEYzuWvJ56oSwuh50xA5CAu62fRuVQjDoFyWUnllE"
  ,caption:"G.G.D.S.D.College, Chandigarh"
  },
  {
    name:"Photo 12",
    url:"https://ptcnews-wp.s3.ap-south-1.amazonaws.com/wp-content/uploads/2018/10/dav.jpg"
  ,caption:"M.C.M.DAV Colleges, Chandigarh"
  },
  {
    name:"Photo 13",
    url:"https://www.newzito.com/wp-content/uploads/2020/03/Dev-Samaj-College-of-Education-using-computerized-study-plan.jpg"
  ,caption:"Dev Samaj College of Education, Chandigarh"
  },
  {
    name:"Photo 14",
    url:"https://images.shiksha.com/mediadata/images/1555321881phpNSek4c.jpeg"
  ,caption:"S.G.G.S.College for Women, Chandigarh"
  },
  {
    name:"Photo 15",
    url:"https://chandigarh.directory/wp-content/uploads/college1.jpg"
  ,caption:"S.G.G.S.College, Chandigarh"
  },
  {
    name:"Photo 16",
    caption:"Dev Samaj College for Women, Chandigarh"
  ,url:"https://content.jdmagicbox.com/comp/chandigarh/85/0172p172std15085/catalogue/dev-samaj-college-for-women-chandigarh-sector-45b-chandigarh-colleges-3v076wl.jpg?clr=006600"
  },
  {
    name:"Photo 17",
    url:"https://lh3.googleusercontent.com/proxy/hb0Q0ZgUrKhcp6XEhmDcPCPSZACGB9JUPaRtc585dve7V6zTJ7S7Zxx8kW9WYNS_kLAVpP_KeRvJRT4_qb3pYA"
  ,caption:"Government College for GirlsSector 11, Chandigarh"
  },
  {
    name:"Photo 18",
    url:"https://content3.jdmagicbox.com/comp/chandigarh/22/0172p172std56122/catalogue/government-college-for-boys-chandigarh-sector-11-chandigarh-colleges-24foql5.jpg"
  ,caption:"Government College for BoysSector 11, Chandigarh"
  },
  {
    name:"Photo 19",
    url:"https://cache.careers360.mobi/media/presets/720X480/colleges/social-media/media-gallery/10127/2019/4/18/Campus%20of%20of%20Post%20Graduate%20Government%20College%20for%20Girls_Campus-view.jpg"
  ,caption:"Government College for GirlsSector 42, Chandigarh"
  }, 
  {
    name:"Photo 20",
    url:"https://chandigarhmetro.com/wp-content/uploads/2015/06/dav-college-chandigarh-sector-10.jpg"
  ,caption:"D.A.V.College, Chandigarh"
  }
]
 class Carousel extends Component {
   render(){
    const settings = {
      dots: true,
      fade:true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows:true,
      slidesToScroll: 1,
      className:"slides"
    };
  return (
    <div style={{padding:50}}>
      <Slider {...settings} >
      {photos.map((photo)=>{
        return(
          <div >
          <img width="85%" src={photo.url} captionHeader={photo.caption} style={{paddingLeft:"250px",paddingTop:"50px"}}/>
          <h1 paddingBottom="50px">{photo.caption}</h1>
          </div>
        )
      })}
      </Slider>
    </div>
  )
}
}
export default Carousel
