import React, { useEffect } from 'react';
import anime from 'animejs';

function About() {
  useEffect(() => {
    const animation = anime({
      targets: '.staggering-grid-demo .el',
      scale: [
        { value: 0.1, easing: 'easeOutSine', duration: 500 },
        { value: 1, easing: 'easeInOutQuad', duration: 1200 }
      ],
      delay: anime.stagger(200, { grid: [14, 5], from: 'center' })
    });

    return () => {
      animation.pause();
    };
  }, []);

  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white  dark:bg-dark">
        <div className="container mx-auto">
          <span className="text-primary text-center mb-2 block text-lg font-semibold" data-aos="fade-up">
            About Me
          </span>
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                      alt=""
                      className="w-full rounded-2xl" data-aos="fade-down"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src="https://i.ibb.co/rfHFq15/image-2.jpg"
                      alt=""
                      className="w-full rounded-2xl" data-aos="fade-up"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2" data-aos="fade-up">
                  <div className="relative z-10 my-4">
                    <div className="staggering-grid-demo"> {/* Wrap SVG with div and add class name */}
                      <img
                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                        alt=""
                        className="w-full rounded-2xl" data-aos="fade-left"
                      />
                      <span className="absolute -right-7   -bottom-12k z-[-1] ">
                        <svg
                          width={134}
                          height={106}
                          viewBox="0 0 134 106"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg" 
                          className="taggering-grid-demo" 
                        >
                          {[...Array(80)].map((_, index) => <>
                            <circle
                              key={index}
                              cx={(index % 14) * 14 + 1.66667}
                              cy={(Math.floor(index / 14) * 14) + 1.66667}
                              r="1.66667"
                              transform={`rotate(-90 ${((index % 14) * 14) + 1.66667} ${(Math.floor(index / 14) * 14) + 1.66667})`}
                              fill="#3056D3"
                              className="el"
                            />
                          </>
                          
                          )}
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary" data-aos="fade-down">
                  Derkaoui Yassir
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]" data-aos="fade-left">
                  Passionate About Full-Stack Development
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6" data-aos="fade-up">
                  I'm a fast learner and self-starter. Determined to acquire
                  the skills needed to succeed in this field
                </p>
                <a
                  href="#" data-aos="fade-down"
                  className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
