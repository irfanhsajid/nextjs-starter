import I from "@/components/assets/I";
import II from "@/components/assets/II";
import III from "@/components/assets/III";
import ProjectHandover from "@/components/assets/project-handover";
import Requirements from "@/components/assets/requirements";
import ResearchAndConecptualization from "@/components/assets/research-and-conecptualization";
import SectionHead from "@/components/molecule/section-head";
import WorkCard from "@/components/molecule/work-card";
import { ReactElement } from "react";

const HowWeWork = () => {
    return (
        <section className="bg-[url('/images/backgrounds/StarBackground.svg')] bg-center bg-cover">
            <div className="container section">
                <SectionHead
                    highlighter="How we work?"
                    H2={<>Getting started with us</>}
                    paragraphs={[
                        <>
                            We&apos;ll listen to <span> your goals</span> and complete a free audit to discover if we&apos;re a great fit to work with each other.
                        </>,
                    ]}
                />

                <div className="flex small-gap flex-col pt-[50px]">
                    {
                        WorkProcessStepsData.map((item:
                            {
                                id: number;
                                numberImage: ReactElement;
                                image: ReactElement;
                                title: string;
                                description: ReactElement;
                            }) => {
                            const { id, numberImage, image, title, description } = item;
                            return (
                                <WorkCard key={id}
                                    id={id}
                                    numberImage={numberImage}
                                    image={image}
                                    title={title}
                                    description={description}
                                />
                            )
                        })
                    }
                </div>

            </div>
        </section>
    )
}
export default HowWeWork;

const WorkProcessStepsData = [
    {
        id: 1,
        numberImage: <div className="min-w-[59px]"><I /></div>,
        image: <Requirements />,
        title: "Requirement Analysis",
        description: <>We&apos;d like to get to know more about you and your brand! Understanding <span>your requirements</span> and <span>expectations</span> is key for any project.</>
    },
    {
        id: 2,
        numberImage: <div className="min-w-[117px]"><II /></div>,
        image: <ResearchAndConecptualization />,
        title: "Research & Conceptualization",
        description: <>We base all our work on solid research.Through <span>constant communication</span> , we will draft up ideas for <span>your review and final approval.</span></>
    },
    {
        id: 3,
        numberImage: <div className="min-w-[175px]"><III /></div>,
        image: <ProjectHandover />,
        title: "Project Handover",
        description: <>Once you&apos;re <span>fully satisfied</span> , we will hand over all the files in all the formats and <span>variations you require.</span> We often go the extra mile!.</>
    },
]