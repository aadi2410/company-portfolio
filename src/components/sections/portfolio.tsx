import SectionTitle from "@components/ui/sectionTitle"
import { useEffect, useState } from "react";
import { portfolioData } from "@utils/fackData/portfolioData";
import SlideUp from "@utils/animations/slideUp";

const Portfolio = () => {
    const [data, setData] = useState(portfolioData)

    const categories: string[] = ["show all"]

    data.forEach(({ category }) => {
        if (!categories.includes(category.toLocaleLowerCase())) {
            categories.push(category.toLocaleLowerCase())
        }
    })

    useEffect(() => {
        setData(portfolioData)
    }, [])


    return (
        <section id="portfolio" className="projects-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>Latest Works</SectionTitle.Name>
                            <SectionTitle.Title>View My Latest <span>Works</span></SectionTitle.Title>
                        </SectionTitle>
                        <div style={{display: 'flex', gap: '12px'}}>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                        </div>
                        <div style={{display: 'flex', gap: '12px'}}>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/work1.jpeg" height='200px'  alt="Project" />
                                        <a href="#" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Portfolio

