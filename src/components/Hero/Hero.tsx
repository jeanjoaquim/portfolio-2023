import React from 'react';

type HeroProps = {
    
};

const Hero:React.FC<HeroProps> = () => {
    
    return(
        <section id="home" className='w-[95%] mx-auto h-screen flex
        flex-col justify-center relative'>
            <div className='relative w-fit'>
                <h1 className='font-bold text-[3.2rem] leading-[3,2rem] min-[350px]:text-[4rem] min-[350px]:leading-[4rem]
                 min-[479px]:text-[5rem] min-[479px]:leading-[5rem] md:text-[8rem] md:leading-[8rem] lg:text-[10rem]
                  lg:leading-[10rem] min-[1400px]:text-[13rem] min-[1400px]:leading-[13rem] uppercase'
                  translate='no'>
                    creative
                </h1>
                <h1 className='font-bold text-[3.2rem] leading-[3.2rem] min-[350px]:text-[4rem] min-[350px]:leading-[4rem]
                 min-[479px]:text-[5rem] min-[479px]:leading-[5rem] md:text-[8rem] md:leading-[8rem] lg:text-[10rem]
                  lg:leading-[10rem] min-[1400px]:text-[13rem] min-[1400px]:leading-[13rem] uppercase'
                  translate='no'>
                    animated
                </h1>
                <h1 className=' font-bold text-[3.2rem] leading-[3,2rem] min-[350px]:text-[4rem] min-[350px]:leading-[4rem]
                 min-[479px]:text-[5rem] min-[479px]:leading-[5rem] md:text-[8rem] md:leading-[8rem] lg:text-[10rem]
                  lg:leading-[10rem] min-[1400px]:text-[13rem] min-[1400px]:leading-[13rem] uppercase'
                  translate='no'>
                    websites
                </h1>
                <p className='absolute text-[6.2rem] min-[479px]:text-[10rem] md:text-[13rem] lg:text-[15rem]
                 min-[1400px]:text-[18rem] font-bold top-0 right-0 text-accent-color-light z-[-1] '>&</p>
            </div>
            <p className='w-[270px] mt-[5px] min-[350px]:w-[350px] min-[479px]:text-[1.2rem] md:text-[1.3rem] md:w-[100%] min-[1400px]:text-[1.5rem] '>Jean Joaquim • Front-End Developer & UX/UI Designer</p>
            <a>
                <button className='absolute bottom-[30px] right-[30px] w-[75px] h-[75px] min-[350px]:w-[90px] min-[350px]:h-[90px] bg-accent-color rounded-full flex items-center justify-center cursor-pointer '>
                    <svg className="w-[40px] absolute  " width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.28022 24.5146C10.1955 23.5993 11.6795 23.5993 12.5948 24.5146L25 36.9198L37.4052 24.5146C38.3205 23.5993 39.8045 23.5993 40.7198 24.5146C41.6351 25.4299 41.6351 26.9139 40.7198 27.8292L26.6573 41.8917C25.742 42.8069 24.258 42.8069 23.3427 41.8917L9.28022 27.8292C8.36493 26.9139 8.36493 25.4299 9.28022 24.5146Z" fill="#FFFFFF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M25 7.42188C26.2944 7.42188 27.3438 8.47121 27.3438 9.76562V38.2812C27.3438 39.5757 26.2944 40.625 25 40.625C23.7056 40.625 22.6562 39.5757 22.6562 38.2812V9.76562C22.6562 8.47121 23.7056 7.42188 25 7.42188Z" fill="#FFFFFF"/>
                    </svg>
                </button>
            </a>
        </section>
    )
}
export default Hero;