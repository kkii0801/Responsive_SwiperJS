import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Slider(){
	console.log("component in");
	let [device, setDevice]=useState("");
	useEffect(() => {
		let Resize=() => {
			if(window.innerWidth >= 1024) {
				if(device !== "desktop"){
					setDevice("desktop");
				}
			}
			else{
				if(device !== "mobile"){
					setDevice("mobile");
				}
			}
		}

		Resize();

		window.addEventListener("resize", Resize);
		
	});

	if(device === ""){ return( <p>Loading...</p>)}
	else{
		return (
			device === "mobile" ?
			<Swiper
				slidesPerView={1}
				spaceBetween={20}
				centeredSlides={true}
				initialSlide={2}
				pagination={true}
				breakpoints={{
					640: {
						slidesPerView: 2
					},
					768: {
						slidesPerView: 4
					},
					1024: {
						slidesPerView: 5
					}
				}}
				modules={[Pagination]}
				className="swiper mySwiper"
			>
				<SwiperSlide>Slide1</SwiperSlide>
				<SwiperSlide>Slide2</SwiperSlide>
				<SwiperSlide>Slide3</SwiperSlide>
				<SwiperSlide>Slide4</SwiperSlide>
				<SwiperSlide>Slide5</SwiperSlide>
				<SwiperSlide>Slide6</SwiperSlide>
				<SwiperSlide>Slide7</SwiperSlide>
				<SwiperSlide>Slide8</SwiperSlide>
				<SwiperSlide>Slide9</SwiperSlide>
			</Swiper>
			: <div className="swiper mySwiper">
				<div className="swiper-wrapper">
					<SwiperSlide>Slide1</SwiperSlide>
					<SwiperSlide>Slide2</SwiperSlide>
					<SwiperSlide>Slide3</SwiperSlide>
					<SwiperSlide>Slide4</SwiperSlide>
					<SwiperSlide>Slide5</SwiperSlide>
					<SwiperSlide>Slide6</SwiperSlide>
					<SwiperSlide>Slide7</SwiperSlide>
					<SwiperSlide>Slide8</SwiperSlide>
					<SwiperSlide>Slide9</SwiperSlide>
				</div>
			</div>
	);
	}

	
}

export default Slider;