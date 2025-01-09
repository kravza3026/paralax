'use client'
import styles from './style.module.css';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect,useEffect, useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
export default function index() {


    const rubine = useRef(null);
    const pearl = useRef(null);
    const brands = Array.from({ length: 6 }, (_, i) => i + 1);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            rubine.current,
            {
                left: "-20vw", // Початкова позиція
            },
            {
                left: "-15vw", // Кінцева позиція
                transform: "scale(0.8)",
                filter: "blur(10px)",
                duration:2.5,
                ease: "circ.out",
                scrollTrigger: {
                    trigger: rubine.current,
                    scrub: true,
                    start: "top+=1px top", // Початок анімації
                    end: "150vh top", // Кінець анімації
                },

            }
        );
        gsap.fromTo(
            pearl.current,
            {
                right: "2vw", // Початкова позиція
            },
            {
                right:'8vw', // Кінцева позиція
                top: "105vh",
                duration:5.5,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: pearl.current,
                    scrub: true,
                    start: "top", // Початок анімації
                    end: "1220vh top", // Кінець анімації
                },

            }
        );
    }, []);

    return(
        <div className={`${styles.intro} grid justify-center  mx-auto items-center h-screen `}>
            <div className="bg_block mix-blend-lighten blur-sm max-w-[100vw] absolute inset-0 -z-10">
                <div
                    className="w-[190vw] h-[90vw] absolute z-10 -top-[125%]  -left-[30%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]

                from-blue-700
                via-transparent
                to-transparent">
                </div>

                <img className={'bg_rubin_pearl -z-10 absolute right-1/3 top-[20%]'} src="/images/card.png"
                     alt="rubine"/>
            </div>
            <img ref={rubine} className={'bg_rubin_img mix-blend-lighten blur-sm fixed -z-10 top-1/3 -start-[20vw]'}
                 src="/images/rubine.png"
                 alt="rubine"/>
            <img ref={pearl} className={'bg_rubin_pearl absolute right-[2vw] top-0'} src="/images/pearl.png"
                 alt="pearl"/>
            <div className="content_box grid justify-center items-center">
                <h1 className={'text-6xl font-bold text-center'}>from <span className={'text-lightblue'}>CONCEPT</span>
                    <br/> to <span className={'text-diamond'}>REALITY</span></h1>
                <p className={'text-center mt-10 text-xl text-lightgreen'}>
                    We Engineer your Software Success & Digital Transformation.
                </p>
                <p className={'mt-10 w-1/2 text-center text-md text-white mx-auto'}>
                    At Chromezy, we translate your ideas into market-ready solutions quickly and precisely. Leveraging
                    the power of technology and prioritizing user needs, we deliver products that are both cutting-edge
                    and user-centric.
                </p>
                <ul className={'mt-10 flex gap-16 justify-between w-1/2 mx-auto items-center'}>
                    <li>
                        <div className={'grid justify-center items-center text-center'}>
                            <p className={'font-bold text-2xl bg-gradient-to-r from-[#3C6BFE]  to-[#9D84F2] inline-block text-transparent bg-clip-text'}>200%</p>
                            <p className={'text-sm'}>Revenue Growth</p>
                        </div>
                    </li>
                    <li>
                        <div className={'grid justify-center items-center text-center'}>
                            <p className={'font-bold text-2xl bg-gradient-to-r from-[#3C6BFE]  to-[#9D84F2] inline-block text-transparent bg-clip-text'}>4X</p>
                            <p className={'text-sm'}>Speed to Market </p>
                        </div>
                    </li>
                    <li>
                        <div className={'grid justify-center items-center text-center'}>
                            <p className={'font-bold text-2xl bg-gradient-to-r from-[#3C6BFE]  to-[#9D84F2] inline-block text-transparent bg-clip-text'}>73%</p>
                            <p className={'text-sm'}>New Orders</p>
                        </div>
                    </li>
                    <li>
                        <div className={'grid justify-center items-center text-center'}>
                            <p className={'font-bold text-2xl bg-gradient-to-r from-[#3C6BFE]  to-[#9D84F2] inline-block text-transparent bg-clip-text'}>10K+</p>
                            <p className={'text-sm'}>Active Users</p>
                        </div>
                    </li>

                </ul>
                <div className={'mt-20 w-1/2 mx-auto text-center grid gap-10'}>
                    <p className={'text-center text-white text-sm'}>Clients</p>
                    <p className={'uppercase font-bold text-4xl text-center'}>
                        <span
                            className={'bg-gradient-to-r from-[#7FBBC2] via-[#ECBD79] to-[#DA5A92] inline-block text-transparent bg-clip-text pr-3'}>Brands </span>
                        We’ve Worked with
                    </p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer to</p>
                </div>

            </div>
            <hr className={'border-dashed border-white border-opacity-15 container mx-auto bg-transparent borer-1'}/>
            <div className="brands ">
                <div className={'flex gap-10 justify-center items-center'}>
                    {brands.map((number) => (
                        <img key={number} src={`/images/brands/brand_${number}.png`} alt="brand_${number"/>

                    ))}

                </div>
            </div>

            <div className="slider">
                <Splide
                    options={ {
                        type: 'loop',
                        gap: '10px',
                        drag: 'free',
                        arrows: false,
                        pagination: false,
                        perPage: 6,
                        autoScroll: {
                            pauseOnHover: true,
                            pauseOnFocus: false,
                            rewind: false,
                            speed: 1,
                        }
                    }}
                    extensions={ { AutoScroll } }
                    >
                    {brands.map((number) => (
                        <SplideSlide className={'rounded-2xl bg-[#232142] hover:bg-[#8479E6] py-4 duration-300 flex items-center justify-center'} key={number}>

                            <div className="carousel-itemtext-center flex justify-center items-center">
                                <img src={`/images/brands/brand_${number}.png`} alt="brand_${number"/>
                            </div>

                        </SplideSlide>
                    ))}


                </Splide>
            </div>
        </div>
    )
}