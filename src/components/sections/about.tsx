import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"

const About = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row gap-100 align-items-center">
                    {/* START ABOUT IMAGE DESIGN AREA */}
                    <div className="col-lg-5">
                        <SlideUp delay={3}>
                            <div className="about-image-part">
                                <img src="/images/about/about-us.png" height='500px' style={{objectFit: 'cover'}} alt="About Me" />
                                <div className="about-btn btn-one wow fadeInRight delay-0-4s">
                                    <h6>Available for Work</h6>
                                    <div className="circle pulse color-pulse" />
                                </div>
                                <div className="dot-shape">
                                    <img src="/images/shape/about-dot.png" alt="Shape" />
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* / END ABOUT IMAGE DESIGN AREA */}
                    {/* START ABOUT TEXT DESIGN AREA */}
                    <div className="col-lg-7">
                        <div className="about-content-part rel z-2 rmb-55">
                            <SectionTitle className="mb-35">
                                <SectionTitle.Name>About Me</SectionTitle.Name>
                                <SectionTitle.Title> A passionate <span>full-stack developer</span> turning <span>ideas</span> powerful, visually, and user-friendly web apps.</SectionTitle.Title>
                                <SectionTitle.Description>Hello, I’m Full-Stack and Front-End Developer with a passion for building dynamic, user-friendly web applications. I specialize in crafting seamless user experiences and creating robust backend solutions. Whether it's designing interactive interfaces or developing scalable systems, I combine creativity with technical skills to bring your ideas to life</SectionTitle.Description>
                            </SectionTitle>
                            <SlideUp delay={2}>
                                <ul className="list-style-one two-column">
                                    <li>user-friendly web app</li>
                                    <li>creativity with technical expertise</li>
                                    <li>Expert in React, React Hooks, Redux, and React Router</li>
                                    <li>Builds responsive and seamless user experiences</li>
                                    <li>Focus on performance optimization and maintainability</li>
                                    <li>Specializes in creating fast, scalable, and interactive UIs</li>
                                </ul>
                            </SlideUp>
                        </div>
                    </div>
                    {/* / END ABOUT TEXT DESIGN AREA */}
                </div>
            </div>
        </section>

    )
}

export default About