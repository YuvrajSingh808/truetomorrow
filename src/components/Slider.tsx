import { useState } from "react";
import furniture from "../assets/furniture.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@material-tailwind/react";

export default function SliderInfo() {
    const length = 10;
    const [hoverArray, setHoverArray] = useState(Array.from({ length }, () => false));
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        className: "w-[96%] mx-auto gap-x-4 py-10 flex items-center justify-center",
        leftArrow: <div className="w-0 h-0"></div>,
        rightArrow: <div className="w-0 h-0"></div>,
        pauseOnHover: false,
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full mx-auto my-10">
                <div className="flex flex-col items-center justify-center w-3/5">
                    <p className="text-4xl text-center w-1/2 uppercase font-bold">INTRODUCING ZERO</p>
                    <p className="text-xl text-center my-4 w-2/3">World’s only air-purifying home textiles that purifies your indoor spaces in an eco-frienldy, cost-efficient and seamless manner.</p>
                </div>
                <div className="w-full flex items-center justify-center">

                    <Slider {...settings}>
                        {Array.from({ length }, (_, i) => (
                            <div className="flex items-center justify-center relative w-1/3  py-10 mx-16" onMouseEnter={() => setHoverArray(Array.from({ length }, (_, j) => i === j))} onMouseLeave={() => setHoverArray(Array.from({ length }, () => false))}>
                                <img src={furniture} alt="furniture" className="w-11/12 mx-auto transition-all duration-500 hover:scale-110 hover:opacity-100 opacity-50" />
                                <Button className={`bg-blue-900 absolute top-[80%] left-[32%] ${hoverArray[i] ? "opacity-100" : "opacity-0"} transition-all duration-500`} variant="filled" size="md" ripple={true}>
                                    View Collection
                                </Button>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}