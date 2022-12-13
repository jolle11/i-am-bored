import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { VscGithubInverted, VscTwitter } from "react-icons/vsc";

const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-center p-8">
			<p className="text-center">Created by Jordi Ollé</p>
			<div className="flex flex-wrap justify-center">
				<a href="https://github.com/jolle11" className="m-1.5 text-2xl transition hover:text-hover">
					<VscGithubInverted />
				</a>
				<a
					href="https://www.linkedin.com/in/jordi-oll%C3%A9-ballest%C3%A9-8398b181/"
					className="hover:text- m-1.5 text-2xl transition hover:text-linkedin"
				>
					<FaLinkedinIn />
				</a>
				<a
					href="https://jordi0lle.hashnode.dev/"
					className="hover:text- m-1.5 text-2xl transition hover:text-hashnode"
				>
					<SiHashnode />
				</a>
				<a
					href="https://twitter.com/jordi0lle"
					className="hover:text- m-1.5 text-2xl transition hover:text-twitter"
				>
					<VscTwitter />
				</a>
				<a
					href="https://www.instagram.com/jordi0lle/"
					className="hover:text- m-1.5 text-2xl transition hover:text-instagram"
				>
					<AiFillInstagram />
				</a>
			</div>
		</div>
	);
};

export default Footer;
