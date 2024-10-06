"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

export function Projects() {
    return (
        <div id="projects">
            <div className="md:text-5xl lg:text-6xl sm:text-3xl font-bold dark:text-white text-3xl mb-4 mt-14 text-center">Projects</div>
            <div className="flex-row flex max-md:flex-col justify-center ">

            <CardContainer className="inter-var">

                <CardBody className="max-sm:text-center bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-3/4  h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="max-sm:mx-auto text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        DevOps Resources Hub
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        A curated hub for DevOps enthusiasts, featuring handpicked resources and tools to accelerate learning in Docker, Kubernetes, CI/CD, and cloud platforms. Deployed with automated CI/CD pipelines for seamless updates.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="https://i.ibb.co/Dz761D3/devops.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://github.com/ashmit4818/DevOps_Resources_Project"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Code →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://dev-ops-resources-project.vercel.app/"
                            target="__blank"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Deployment
                        </CardItem>
                    </div>
                </CardBody>

            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody className="max-sm:text-center bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-3/4  h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        TypeScript Task Management App
                    </CardItem>
                    <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                        A streamlined task management app built with TypeScript, designed to enhance productivity with real-time task tracking and a minimalistic interface. Developed using Vite for fast builds and optimal performance.
                    </CardItem>
                    <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src="https://i.ibb.co/jJSxkgc/typescripttask.png"
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://github.com/ashmit4818/TypeScript_Task_App"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Code →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://typescripttaskapp.netlify.app/"
                            target="__blank"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Deployment
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>

            </div>

        </div>




    );
}
