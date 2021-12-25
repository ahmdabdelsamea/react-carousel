import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

import data from '../data/data';
import './carousel.css';

export const Carousel = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== data.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === data.length) {
			setSlideIndex(1);
		}
	};

	const prevSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(data.length);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className='container-slider'>
			{data.map((item, index) => {
				return (
					<div
						key={item.id}
						className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
					>
						<img src={item.imgUrl} alt={item.title} />
					</div>
				);
			})}

			<button onClick={nextSlide} className='btn-slide next'>
				<FaArrowCircleRight />
			</button>
			<button onClick={prevSlide} className='btn-slide prev'>
				<FaArrowCircleLeft />
			</button>

			<div className='container-dots'>
				{Array.from({ length: data.length }).map((item, index) => (
					<div
						onClick={() => moveDot(index + 1)}
						className={slideIndex === index + 1 ? 'dot active' : 'dot'}
					></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
