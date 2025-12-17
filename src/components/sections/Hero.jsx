import { useState } from "react"
import { ChevronDown, Star } from "lucide-react"
import { SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiMongodb } from 'react-icons/si'
import { PERSONAL_INFO, STATS } from "../../utils/constants"
import { scrollTopSection } from "../../hook/useScrollSpy"
import FadeIn from "../animations/FadeIn"
import RadialGradienBackground from '../backgrouds/RadialGradientBackground'

const Hero = () => {


  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      {/* <RadialGradienBackground variant="hero" /> */}
      
      {/* Content COntainer */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* { Left Column Conten } */}
          <div className="text-left">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2.5 px-[18px] py-[11px] mb-8 bg-linear-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-xs md:text-sm text-white tracking-[1.2px]">
                  { PERSONAL_INFO.title } | Based in { PERSONAL_INFO.location}
                </span>
              </div>  
            </FadeIn>
            
            <FadeIn delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
                React.js Developer Portfolio
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="text-lg text-white/70 max-w-[550px] mb-8">
                Building modern scalable web applcation with React, Javascript and cuttin-edge techologies. Transforming idea into excellent digital expirences.
              </p>
            </FadeIn>

            <FadeIn delay={300}>
              <button
                onClick={() => scrollTopSection('contact')}
                className="inline-flex items-center gap-0 mb-12 group"
              >
                <div className="relative z-10 bg-white text-[#212121] rounded-[17px]">
                  Get in Touch
                </div>
              </button>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="">
                {
                  STATS.map((stat, index) => (
                    <div className="" key={index}>
                      <div className="">
                        {stat.value}
                      </div>
                      <p className="">
                        {stat.label}
                      </p>
                    </div>
                  ))
                }
              </div>
            </FadeIn>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Hero
