// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Github, Instagram, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Umar Shaikh",
    headline: ["Developer", "DSA", "System Design"],
    avatarSrc: "/assets/images/me-avatar.png",
    info: [
        {
            label: "Location",
            value: "Mumbai, INDIA",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "10th, October, 2001",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "IST time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "umar9372",
            icon: <Github />,
            link : 'https://github.com/@umar9372'
        },
        {
            label: "Figma",
            value: "Umar Shaikh",
            icon: <Instagram />,
            link : 'https://instagram.com/u_m_a_r_shk'
        },
    ],
};
