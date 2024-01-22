import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedin.png"
import twitter from "../assets/twitter.png"
import github from "../assets/github.png"
import hackerrank from "../assets/hackerrank.png"




const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/r-rahul-karan-750911204/?trk=people-guest_people_search-card"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src={linkedin} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com/rahul.karan.5015?mibextid=ZbWKwL"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={facebook} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com/invites/contact/?i=1kofzg0k5xl6l&utm_content=te51nx7"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={instagram} />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 w-8 "
          href="https://github.com/RahulkaranR/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src={github} className=" rounded-lg " />
        </a>
        <a
          className="hover:opacity-50 transition duration-500 w-8 "
          href="https://www.hackerrank.com/profile/karanrahul2001"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="HackerRank-link" src={hackerrank} className=" rounded-lg " />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  