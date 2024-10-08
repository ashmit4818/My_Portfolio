import { GlareCard } from "./ui/glare-card";
import { FaDocker } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa6";
import { TbBrandCpp } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiGithubactions } from "react-icons/si";
// import { SiKubernetes } from "react-icons/si";
import React from "react";

export function Skills() {
    return (
        <div id="skills" className="pb-20">
            <div className="md:text-5xl lg:text-6xl sm:text-3xl font-bold dark:text-white text-3xl mb-20 mt-14 max-sm:mt-20 text-center">Skills</div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 mx-20 max-sm:mx-5  justify-items-center">
                <GlareCard className="flex flex-col items-center justify-center">
                    <TbBrandCpp size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">C++</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <FaHtml5 size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">HTML</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <FaCss3 size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">CSS</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <IoLogoJavascript size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">JavaScript</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SiTypescript size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">TypeScript</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <FaGitAlt size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">Git</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <FaReact size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">React</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SiExpress size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">Express.js</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <FaDocker size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">Docker</p>
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SiGithubactions size={50} color={"white"}/>
                    <p className="text-white font-bold text-xl mt-4">Github Actions</p>
                </GlareCard>


            </div>

        </div>

    );
}
