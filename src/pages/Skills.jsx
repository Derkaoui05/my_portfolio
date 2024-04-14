import { RiFlutterFill } from "react-icons/ri";
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaPython, FaReact } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
function Skills() {
  return (
    <>
     <section className="pb-12 pt-20 bg-white h-screen dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto" >
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary" data-aos="fade-down">
                Our Skills
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]" data-aos="fade-up" >
                What I can Do
              </h2>
              <p className="text-base text-body-color dark:text-dark-6" data-aos="fade-up">
                During my training, they are different languages I learned and I am able to work with them
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <SkillCard
            title="HTML5"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaHtml5 className="fill-white w-9 h-9"/>
            } 
          />
          <SkillCard
            title="CSS3"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaCss3  className="fill-white w-9 h-9"/>
            }
          />
          <SkillCard
            title="JavaScript"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <IoLogoJavascript  className="fill-white w-9 h-9" />

            }
          />
          <SkillCard
            title="React JS"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaReact className="fill-white w-9 h-9"  />
            }
          />
          <SkillCard
            title="TailWind CSS"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <BiLogoTailwindCss className="fill-white w-9 h-9" />
            }
          />
          <SkillCard
            title="Bootstrap"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaBootstrap className="fill-white w-9 h-9" />
              
            }
          />
              <SkillCard
            title="C#"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <TbBrandCSharp className="text-white w-9 h-9" />
              
            }
          />
              <SkillCard
            title="JAVA"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaJava className="fill-white w-9 h-9" />
              
            }
          />
              <SkillCard
            title="PYTHON"
            details="We dejoy working with discerning clients, people for whom quality, service, integrity & aesthetics."
            icon={
              <FaPython className="fill-white w-9 h-9" />
              
            }
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Skills


const SkillCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full  card px-4 md:w-1/2 lg:w-1/3" >
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10 hover:bg-primary cursor-pointer" data-aos="zoom-in">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary ">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
