import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { SiX } from "react-icons/si";
import { VscGithubInverted } from "react-icons/vsc";

const socialLinks = [
    {
        href: "https://github.com/jolle11",
        icon: <VscGithubInverted />,
        className: "hover:text- m-1.5 text-2xl transition hover:text-hover",
    },
    {
        href: "https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/",
        icon: <FaLinkedinIn />,
        className: "hover:text- m-1.5 text-2xl transition hover:text-linkedin",
    },
    {
        href: "https://jordi0lle.hashnode.dev/",
        icon: <SiHashnode />,
        className: "hover:text- m-1.5 text-2xl transition hover:text-hashnode",
    },
    {
        href: "https://twitter.com/jordi0lle",
        icon: <SiX />,
        className: "hover:text- m-1.5 text-2xl transition hover:text-twitter",
    },
    {
        href: "https://www.instagram.com/jordi0lle/",
        icon: <AiFillInstagram />,
        className: "hover:text- m-1.5 text-2xl transition hover:text-instagram",
    },
];

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8">
            <p className="text-center">Created by Jordi Ollé</p>
            <div className="flex flex-wrap justify-center">
                {socialLinks.map(({ href, icon, className }, index) => (
                    <a key={index} href={href} className={className}>
                        {icon}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Footer;
