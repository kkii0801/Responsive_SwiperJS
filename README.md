# Responsive_SwiperJS
사용된 도구 : React, JavaScript, Swiper <br />
:point_right: [Responsive_SwiperJS](https://responsive-swiper-js.vercel.app/)

***

### 작동 예시
<div align="center"><img src="https://github.com/kkii0801/Readme_files/blob/main/Res_JS/responsive_swiperjs.gif?raw=true"></div>

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
```
React의 useEffect와 useState 훅을 가져옵니다. <br />
Swiper 라이브러리의 슬라이더 컴포넌트와 CSS를 가져옵니다.
```
function Slider(){
	console.log("component in");
	let [device, setDevice]=useState("");
```
device 상태를 초기값 ""로 설정하여 현재 장치 유형을 저장합니다.
```
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
```
컴포넌트에 진입할 때 Resize 함수를 정의하여 화면 크기에 따라 device 상태를 업데이트합니다. <br />
Resize 함수는 화면 너비가 1024픽셀 이상이면 "desktop", 그렇지 않으면 "mobile"로 설정합니다. <br />
Resize 함수를 즉시 호출하여 초기 장치 유형을 설정하고, resize 이벤트 리스너를 추가하여 창 크기 변경 시 상태를 업데이트합니다.
```
	if(device === ""){ return( <p>Loading...</p>)}
```
device가 아직 설정되지 않은 경우 로딩 메시지를 표시합니다.
```
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
device가 "mobile"인 경우 Swiper 컴포넌트를 렌더링하고, 슬라이드 수와 간격을 설정합니다. 화면 크기에 따라 슬라이드 수가 조정됩니다. <br />
"desktop"인 경우 기본적인 div 구조를 사용하여 슬라이드를 렌더링합니다. <br /><br />

### 요약
화면 크기에 따라 다른 슬라이더를 제공하는 반응형 슬라이더 컴포넌트를 구현합니다. <br />
Swiper 라이브러리를 사용하여 애니메이션과 페이지네이션 기능을 추가하고, 사용자가 다양한 장치에서 슬라이더를 원활하게 사용할 수 있습니다. <br />
