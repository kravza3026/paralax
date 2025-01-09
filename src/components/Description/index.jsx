import styles from './style.module.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLayoutEffect, useRef } from 'react';
export default function Index() {
    const phrases = ['Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'At blanditiis fugit id nisi non recusandae similique suscipit voluptate.', ' A aliquam asperiores cumque ducimus enim itaque magnam mollitia possimus sapiente vitae.']
    const pearl2 = useRef(null);
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            pearl2.current,
            {
                right: "20vw", // Початкова позиція
            },
            {
                right:'1vw', // Кінцева позиція
                top: "15vh",
                zIndex: 1,
                transform: "scale(2)",
                filter: "blur(10px)",
                duration:5.5,
                ease: "sine.out",
                scrollTrigger: {
                    trigger: pearl2.current,
                    scrub: true,
                    start: "top-=1000vh", // Початок анімації
                    end: "top+=100vh top", // Кінець анімації
                },

            }
        );

    }, [])
    return (

        <div className={` h-screen container relative mx-auto py-36`}>
            <div className={' w-full mx-auto justify-center items-center grid '}>
                <img ref={pearl2} className={'bg_rubin_pearl absolute right-[-70vw] top-[20vh]'} src="/images/pearl.png"
                     alt="pearl"/>

            </div>
            <div className={`${styles.description} z-20 relative`}>

                {
                    phrases.map((phrase, index) => {
                        return <AnimatedText key={index}>{phrases}</AnimatedText>
                    })
                }
            </div>
        </div>
    )
}

function AnimatedText({children}) {
    const text = useRef(null);
    const pearl = useRef(null);
    useLayoutEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from(text.current, {

            scrollTrigger: {
                trigger: text.current,
                scrub: true,
                    start: "0px bottom",
                    end: "bottom+=100px bottom",
                },

                opacity: 0,
                left: "-200px",
                ease: "power3.Out"
            });


        }, [])
        return(
                           <p ref={text}>{children}</p>

        )
}