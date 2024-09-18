import { title } from "framer-motion/client";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.jpg";
import oImage1 from "../assets/oImage1.jpg";
import oImage2 from "../assets/oImage2.jpg";
import oImage3 from "../assets/oImage3.jpg";

import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  TabletSmartphone,
  Laptop,
  BadgeIndianRupee,
  Shapes,
  TicketXIcon,
  Check,
} from "lucide-react";
import { ShieldEllipsis } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Student", href: "/student" },
  { label: "Offerings", href: "/businessman" },
  { label: "Contact", href: "/contact" },
];

export const businessData = [
  {
    id: "04.",
    icon: <TabletSmartphone />,
    title: "Mobile App Development",
    quote: "Mobile-first mentality: Where every pixel counts.",
    text: "In the digital age, an app takes the lead, A companion to fulfill every need. From shopping to gaming, it's always near, Enhancing experiences, bringing joy clear.",
  },
  {
    id: "05.",
    icon: <PanelsTopLeft />,
    title: "Web Development",
    quote:
      "Designing a website is like building a puzzle; every piece has its place",
    text: "In the digital age, a website's the key, An extension of your marketing spree. Showcasing products with flair and might, Bringing your business to customers' sight.",
  },
  {
    id: "06.",
    icon: <ShieldEllipsis />,
    title: "Collaboration",
    quote: "Collaboration: Where minds meet and magic happens.",
    text: "In the digital realm, collaboration's the song, Harmonizing teams, where bonds grow strong. Pooling ideas, with creativity in flight, Bringing visions to life, in shared delight.",
  },
];
export const studentData = [
  {
    id: "01.",
    icon: <Laptop />,
    title: "Internship",
    quote:
      "Internship: Where learning meets real-world experience, shaping tomorrow's leaders.",
    text: "In the world of bits and bytes, Internship's embrace ignites, From ground zero, paths arise, A two-edged blade, a bright surprise.",
  },
  {
    id: "02.",
    icon: <BadgeIndianRupee />,
    title: "Freelancing",
    quote: "Freelancing: Where passion meets paycheck on your own terms.",
    text: "Freelancing, the art of autonomy, where work meets play, In the digital realm, forging paths in a unique way. From flexible hours to diverse projects, the freedom to sway, Empowering individuals to thrive, seize the day.",
  },
  {
    id: "03.",
    icon: <Shapes />,
    title: "Training",
    quote:
      "Training: Where knowledge is sculpted into skill, shaping the future.",
    text: "In the computer science realm, training bridges the gap, From theory to practice, it maps the path. Coding bootcamps, courses, and labs unfold, Empowering minds with skills, future-proof and bold.",
  },
];

export const dataSB = [
  {
    id: "01.",
    icon: <PanelsTopLeft />,
    title: "Web Development",
    quote:
      "Designing a website is like building a puzzle; every piece has its place",
    text: "In the digital age, a website's the key, An extension of your marketing spree. Showcasing products with flair and might, Bringing your business to customers' sight.",
  },
  {
    id: "02.",
    icon: <TabletSmartphone />,
    title: "Mobile App Development",
    quote: "Mobile-first mentality: Where every pixel counts.",
    text: "In the digital age, an app takes the lead, A companion to fulfill every need. From shopping to gaming, it's always near, Enhancing experiences, bringing joy clear.",
  },
  {
    id: "03.",
    icon: <ShieldEllipsis />,
    title: "Collaboration",
    quote: "Collaboration: Where minds meet and magic happens.",
    text: "In the digital realm, collaboration's the song, Harmonizing teams, where bonds grow strong. Pooling ideas, with creativity in flight, Bringing visions to life, in shared delight.",
  },
];

export const platformLinks = [
  { href: "#", icon: <Facebook /> },
  { href: "https://www.instagram.com/j_monk_devops/", icon: <Instagram /> },
  {
    href: "https://www.linkedin.com/company/j-monk-devops",
    icon: <Linkedin />,
  },
  { href: "#", icon: <Twitter /> },
];

export const communityLinks = [
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact Us" },
  { href: "/businessman", text: "Businessman" },
  { href: "/student", text: "Student" },
];
export const blogLinks = [{ href: "/blog", text: "Blogs" }];

export const boxData = [
  {
    icon: <Check />,
    title: "Intuitive User Interface",
    text: "An intuitive user interface is designed for ease of use, allowing users to navigate effortlessly. It minimizes the learning curve, making interactions simple and efficient.",
  },
  {
    icon: <Check />,
    title: "Seamless Integration",
    text: "Seamless integration ensures that different systems work together flawlessly, providing a unified experience. It eliminates disruptions, enhancing efficiency and workflow continuity.",
  },
  {
    icon: <Check />,
    title: "Advanced Automation",
    text: "Advanced automation streamlines complex tasks, reducing manual effort and errors. It enhances productivity by enabling faster and more accurate processes.",
  },
  {
    icon: <Check />,
    title: "Customizable Workflows",
    text: "Customizable workflows allow users to tailor processes to their specific needs, improving efficiency. They offer flexibility, adapting to diverse tasks and preferences.",
  },
];

export const studentPageData = [
  {
    image: image1,
    icon: <Check />,
    title: "Internship",
    subtitle: "Bridging the Gap Between Learning and Industry",
    text: "Embark on a journey where theoretical knowledge meets hands-on experience. Our internships provide a launchpad for future leaders, offering invaluable exposure to real-world challenges. In the world of technology, our internships ignite potential, turning beginners into innovators.",
    quote:
      "From ground zero, a new path emerges. A two-edged blade, a bright surprise—preparing you for tomorrow.",
  },
  {
    image: image2,
    icon: <Check />,
    title: "Freelancing",
    subtitle: "Freedom to Create, Freedom to Earn",
    text: "Freelancing offers the flexibility to balance passion and profession. Work on diverse projects at your own pace, setting your terms. Whether you’re an early bird or a night owl, freelancing empowers you to thrive in the digital landscape, with autonomy at its core.",
    quote:
      "The art of autonomy—where passion meets paycheck, and opportunity knows no bounds.",
  },
  {
    image: image4,
    icon: <Check />,
    title: "Training",
    subtitle: "Equipping You for Tomorrow’s Tech World",
    text: "Our training programs turn knowledge into action. From coding bootcamps to advanced tech courses, we equip you with the skills to excel. Whether you're diving into coding or mastering new technologies, we pave the way for a bright and future-proof career.",
    quote:
      "From theory to practice, we bridge the gap, empowering you to shape the future with confidence.",
  },
];

export const dataSBe = [
  {
    title: "Innovation",
    text: "Constantly pushing boundaries, embracing new technologies to deliver innovative solutions that exceed client expectations.",
  },
  {
    title: "Integrity",
    text: "Upholding the highest ethical standards, transparency, and honesty in all our dealings and relationships.",
  },
  {
    title: "Collaboration",
    text: "Fostering strong partnerships, internally and externally, to leverage collective expertise and ensure successful outcomes.",
  },
];

export const offeringPageData = [
  {
    image: oImage1,
    icon: <Check />,
    title: "Custom Apps",
    subtitle:
      "Bespoke applications crafted to match your specific requirements",
    text: "Our custom app development service focuses on creating unique solutions that align with your business goals.",
    quote:
      "From concept to deployment, we ensure a seamless development process tailored to your needs.",
  },
  {
    image: oImage2,
    icon: <Check />,
    title: "Enterprise Software",
    subtitle: "Scalable and robust software solutions for large organizations",
    text: "We specialize in building enterprise-grade software that supports complex business operations efficiently.",
    quote:
      "Our solutions are designed to enhance productivity and streamline workflows for maximum efficiency.",
  },
  {
    image: oImage3,
    icon: <Check />,
    title: "Mobile Applications",
    subtitle: "Innovative mobile app development for iOS and Android platforms",
    text: "Our mobile app development services cater to the growing demand for intuitive and user-friendly applications.",
    quote:
      "We utilize the latest technologies to deliver high-quality mobile apps that resonate with your target audience.",
  },
];
