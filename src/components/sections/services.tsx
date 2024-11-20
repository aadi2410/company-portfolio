import SectionTitle from "@components/ui/sectionTitle"
import SlideUp from "@utils/animations/slideUp"
import { servicesData } from "@utils/fackData/servicesData"

const Services = () => {
    return (
        <section id="services" className="services-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <SectionTitle className="text-center mb-60">
                            <SectionTitle.Name>Services</SectionTitle.Name>
                            <SectionTitle.Title> My <span>Special Service</span> For your Website Development</SectionTitle.Title>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row gap-3 gap-sm-0">
                    {
                        servicesData.map(({ description, img, id, title }) =>
                            <Card key={id} description={description} img={img} title={title} id={id} />
                        )
                    }
                </div>
            </div>
        </section>

    )
}

export default Services

type CardPropsType = {
    title: string,
    img: string,
    description: string,
    id: number
}
const Card = ({ title, img, description, id }: CardPropsType) => {
    return (
        <div className="col-lg-3 col-sm-6">
            <SlideUp delay={id} className='service-parent-div'>
                <div className="service-item">
                    <div className="content">
                        <img src={img} />
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}