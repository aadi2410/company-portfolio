import SectionTitle from "@components/ui/sectionTitle"
import { useEffect, useState } from "react";
import { portfolioData } from "@utils/fackData/portfolioData";

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
                                        <img src="/images/projects/groovepacker.jpeg" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://app.groovepacker.com/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/finominal.jpeg" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://finominal.com/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/koko.jpeg" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://www.kokomusic.com/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                        </div>
                        <div style={{display: 'flex', gap: '12px'}}>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/element.jpeg" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://aibot.elementtechnologies.net/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/evren.png" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://www.evren.co/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/lucidya.png" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://lucidya.com/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                        </div>
                        <div style={{display: 'flex', gap: '12px'}}>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/rtat.png" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://www.ramtourandtravelservices.in/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/docile.png" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://play.google.com/store/apps/details?id=com.EndUserApp&pcampaignid=web_share" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
                                    </div>
                                </div>
                                <div className="project-item style-two wow fadeInUp delay-0-2s" style={{flex: 1,}}>
                                    <div className="project-image">
                                        <img src="/images/projects/registerkro.png" height='250px' style={{objectFit: 'cover'}}  alt="Project" />
                                        <a href="https://www.registerkaro.in/" target="_blank" className="details-btn"><i className="far fa-arrow-right" /></a>
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

