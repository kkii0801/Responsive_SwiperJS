# Responsive_SwiperJS
사용된 도구 : React, JavaScript, Swiper <br />
:point_right: [Responsive_SwiperJS](https://responsive-swiper-js.vercel.app/)

***

## 주요 컴포넌트 설명

1. App.js
2. Slider.js

***

## App.js

### 코드 설명
```
import Slider from "./Slider";
import './css/style.css';

function App(){
	return(
		<>
			<h1 className="title">plugins :: SwiperJS Multi Slider</h1>
			<div className="container">
				<div id="sub_slider">
					<Slider />
				</div>
			</div>
		</>
	);		
}

export default App;
```
Slider 컴포넌트를 현재 디렉토리의 Slider.js 파일에서 임포트합니다. 이 컴포넌트는 슬라이더 기능을 제공합니다. <br />
style.css 파일을 임포트하여 CSS 스타일을 적용합니다.
***

## Slider.js

### 코드 설명
```
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
```

### 작동 예시
