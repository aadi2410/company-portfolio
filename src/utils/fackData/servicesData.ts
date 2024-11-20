type DataType = {
    id: number,
    title: string,
    img: string,
    description: string
}[]
export const servicesData: DataType = [
    {
        id: 1,
        title: "Website Development",
        img:"/images/service/webdev.png",
        description: "Craft dynamic, responsive, and user-friendly websites using the MERN stack (MongoDB, Express, React, and Node.js). I build full-stack web applications that are not only visually appealing but also robust and scalable."
    },
    {
        id: 2,
        title: "App Development",
        img:"/images/service/appdev.png",
        description: "Build scalable and feature-rich web and mobile applications. I focus on creating high-performance apps that cater to both web and mobile platforms, ensuring a consistent and seamless user experience."
    },
    {
        id: 3,
        title: "Fullstack Development",
        img:"/images/service/fulldev.png",
        description: "Ensure smooth integration between all layers of the stack for a cohesive and seamless user experience. I manage both front-end and back-end development to deliver fully integrated apps that are reliable & efficient."
    },
    {
        id: 3,
        title: "UI Development",
        img:"/images/service/uidev.png",
        description: "Design and build visually stunning and intuitive interfaces that provide a seamless user experience. I focus on creating clean, user-friendly designs that engage users while ensuring accessibility and usability."
    },

]