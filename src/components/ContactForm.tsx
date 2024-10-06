"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils/cn";
import {
    IconBrandGithub,
    IconBrandGoogle,
    IconBrandOnlyfans,
} from "@tabler/icons-react";
import Image from "next/image";

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div id="contact" className="  mx-20 max-sm:mx-10 rounded-none md:rounded-2xl p-4  md:p-8 pb-0 shadow-input bg-white dark:bg-black">
            <h2 className="font-bold text-5xl text-neutral-800 dark:text-neutral-200 ">
                Give Feedback
            </h2>
            <p className="text-neutral-600 text-md max-w-md mt-2 dark:text-neutral-300">
            Join the fun and help us shake the web! Spot a bug? Share your brilliant feedback here and let's make the site unstoppable! 🚀💡
            </p>

            <form className="mt-8" method="POST" action="https://formspree.io/f/mrbgzlvk">
                <div className="flex flex-row max-md:flex-col">
                    <div className="flex w-full p-3 flex-col mb-4">
                        <div className="mb-3">
                        <LabelInputContainer className="mb-3">
                            <Label htmlFor="name">Name</Label>
                            <Input name="username" required id="name" placeholder="Ashmit" type="text"/>
                        </LabelInputContainer>

                        <LabelInputContainer className="mb-3">
                            <Label htmlFor="email">Email</Label>
                            <Input name="email" required id="email" placeholder="ashmit.dev.io@gmail.com" type="email"/>
                        </LabelInputContainer>
                        <LabelInputContainer  className="mb-3">
                            <Label htmlFor="subject">Subject</Label>
                            <Input name="subject" required id="subject" placeholder="Subject" type="textarea"/>
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-3">
                            <Label htmlFor="message">Message</Label>
                            <Input name="message"  required id="message" placeholder="Message" type="text"/>
                        </LabelInputContainer>
                        </div>
                        <button
                    className="mt-1/3 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient/>
                </button>




                    </div>
                    <div className="w-full p-3 space-y-2 md:space-y-3 ">

                        <Image src="https://i.ibb.co/NNhwTdZ/contact.png" className="mx-auto my-15 max-md:hidden max-sm:hidden" alt="hey" width={300} height={300}/>
                        
                        

                    </div>
                </div>



                <div
                    className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full"/>

                <div className="flex flex-col space-y-4">
                    
                    
                    
                </div>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
