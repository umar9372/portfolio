import { ContactInfo, Experience, PersonalInfo, ProjectComplete, Skills, Testimonial, TotalFollowers } from "@/types/main";


// Define constants for data
export const PROJECT_COMPLETE: ProjectComplete = {
    title: "Project Complete",
    value: 100,
    completedProjects: "12+",
    description: "Completed 12+ Projects",
    strokeColor: "#17C964"
};

export const TOTAL_FOLLOWERS: TotalFollowers = {
    title: "Total Followers",
    followers: "2.5K",
    imageSrc: "/assets/images/hearts.png",
    imageAlt: "hearts"
};

export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Shaikh Mohd Umar",
    headline: [
        "JAVA Full Stack Developer",
        "Frontend Developer",
        "Backend Developer"
    ]
};

export const EXPERIENCE: Experience = {
    years: 1,
    label: "y"
};

export const SKILLS: Skills = {
    count: 15
};

export const TESTIMONIAL: Testimonial = {
    title: "Testimonial",
    imageSrc: "/assets/images/testimonial.png",
    imageAlt: "testimonial"
};

export const CONTACT_INFO: ContactInfo[] = [
    {
        src: "/assets/images/linkedin.png",
        alt: "linkedin",
        link : "https://www.linkedin.com/in/shaikh-umar-15a134290/"
    },
    {
        src: "/assets/images/telegram.png",
        alt: "telegram",
        link : "https://t.me/UmarShaikh"
    },
    {
        src: "/assets/images/google.png",
        alt: "google",
        link : "shaikhkumar7276@gmail.com"
    },
    {
        src: "/assets/images/call.png",
        alt: "phone",
        link : "+919372796050"
    }
];
