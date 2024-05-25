import { StarIcon } from '@heroicons/react/24/outline'
import { Container } from '@mui/material'
import React from 'react'
import Masonry from 'react-layout-masonry'
import firstImage from '../Images/1.jpg'
import secondImage from '../Images/2.jpg'
import thirdImage from '../Images/3.jpg'
import fourthImage from '../Images/4.jpg'
import fifthImage from '../Images/5.jpg'
import sixthImage from '../Images/6.jpg'
import seventhImage from '../Images/7.jpg'
import eighthImage from '../Images/8.jpg'
import ninthImage from '../Images/1.jpg'

const Review = () => {
    const reviews = [
        {
            stars : "5",
            comment: "Absolutely blown away by the AI Content Generator from TechWiz! It effortlessly transformed my ideas into engaging and polished content. Say goodbye to writer's block!",
            customer : {
                name: "Sarah Thompson",
                avatar: firstImage,
                intro: "TechWiz Innovations"
            }
        },
        {
            stars : "5",
            comment: "Content Generator is a game-changer! It understands context and delivers spot-on content. My team's productivity has soared since we started using it.",
            customer : {
                name: "Alex Rodriguez",
                avatar: secondImage,
                intro: "DataCraft Solutions"
            }
        },
        {
            stars : "5",
            comment: "Kudos to Insightful Marketing's AI Content Generator! It saved me hours of brainstorming, generating high-quality content in minutes. My clients are impressed!",
            customer : {
                name: "Emily Chen",
                avatar: thirdImage,
                intro: "Insightful Marketing"
            }
        },
        {
            stars : "5",
            comment: "Generator is like having a brilliant writing assistant. It adapts to my style, understands nuances, and consistently delivers top-notch content.",
            customer : {
                name: "Jason Patel",
                avatar: fourthImage,
                intro: "Quantum Creations"
            }
        },
        {
            stars : "5",
            comment: "Visionary Tech's AI Content Generator is a must-have for content creators. It not only enhances efficiency but also maintains the creativity needed for impactful content.",
            customer : {
                name: "Mia Thompson",
                avatar: fifthImage,
                intro: "Visionary Tech"
            }
        },
        {
            stars : "5",
            comment: "InnovateX Dynamics' AI Content Generator is a marvel. It took our content game to the next level, generating content that resonates with our audience. Impressive",
            customer : {
                name: "Daniel Park",
                avatar: sixthImage,
                intro: "InnovateX Dynamics"
            }
        },
        {
            stars : "5",
            comment: "Exceeded my expectations. It's like having a writing wizard on my team. Consistently delivers quality content.",
            customer : {
                name: "Lauren Miller",
                avatar: seventhImage,
                intro: "Pinnacle Insights"
            }
        },
        {
            stars : "5",
            comment: "Synthetix Solutions' AI Content Generator is a lifesaver for content marketers. It understands industry jargon and effortlessly crafts content that aligns with our brand.",
            customer : {
                name: "Kevin Johnson",
                avatar: eighthImage,
                intro: "Synthetix Solutions"
            }
        },
        {
            stars : "5",
            comment: "Insightful Innovations' AI Content Generator is a genius tool! It adapts to our changing content needs, providing a seamless experience. Say hello to stress-free content creation!",
            customer : {
                name: "Olivia Richards",
                avatar:ninthImage,
                intro: "Insightful Innovations"
            }
        },
    ]
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
    <Container>
        <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
            <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 text-center mx-auto">
                <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">Lets take a look at what people thinks </h3>
            </div>
        </div>
        <Masonry
            columns={{ 640: 1, 768: 2, 1024: 3, 1280: 3 }}
            gap={24}
            className="mb-8"
            >
                {reviews.map((item,index)=>{
                    return(
                        <div key={index} className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                            <div className="flex items-center pb-4">
                                <div className="flex gap-x-1 text-yellow-500">
                                    <StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" /><StarIcon className="h-4" />
                                </div>
                                <span className="text-sm text-slate-500 dark:text-slate-300 ms-5">{item.stars} Stars</span>
                            </div>
                            {item.comment && <div className="pb-5"><p className="text-base/7 font-normal text-slate-500 dark:text-slate-300">{item.comment}</p></div>}
                            <div className="flex items-center">
                                <div className="inline-flex flex-shrink-0 h-12 w-12 rounded-full overflow-hidden outline outline-1 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                                    <img src={item.customer?.avatar} alt="" />
                                </div>
                                <div className="ms-5">
                                    <h6 className="text-sm/snug font-bold text-slate-600 dark:text-slate-100">{item.customer?.name}</h6>
                                    <span className="text-sm text-slate-400">{item.customer?.intro}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </Masonry>
    </Container>
</section>
  )
}

export default Review
