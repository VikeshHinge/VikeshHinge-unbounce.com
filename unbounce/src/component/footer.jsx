import { Link } from "react-router-dom";
import { AiFillTwitterCircle,AiFillLinkedin,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube } from "react-icons/ai";
import "./footer.css"

let footers = [
  {
    h1: "Product",
    p: [
      "Smart Builder",
      "Preview Smart Builder",
      "Smart Traffic",
      "Smart Copy",
      "Apps and Integrations",
      "Landing Pages",
      "Popups and Sticky Bars",
      "Landing Page Templates",
      "Smart Copy Templates",
      "Integrations",
      "Product Security"
    ]
  },
  {
    h1: "Solutions",
    p: [
      "Ecommerce",
      "SaaS",
      "Agency",
      "Small Businesses",
      "Professional Services",
      "PPC",
      "Social Ads",
      "Email Marketing",
      "Lead Generation"
    ]
  },
  {
    h1: "Company",
    p: [
      "About",
      "Unbounce",
      "Partner",
      "Program",
      "Careers",
      "Integrate",
      "with Us"
    ]
  },
  {
    h1: "Learn",
    p: [
      "What is Conversion Intelligence?",
      "Landing Page Basics",
      "Blog",
      "Resource Center",
      "Landing Page Examples",
      "Landing Page Analyzer",
      "How to Build a Landing Page"
    ]
  },
  {
    h1: "Get in Touch",
    p: ["Contact", "Demo", "Log In", "   Help Center", "Community"]
  }
];

let bottomlink = [
    <AiFillLinkedin size={"40px"} />,
    <AiFillTwitterCircle size={"40px"} />,
    <AiFillGoogleCircle size={"40px"} />,
    <AiFillInstagram size={"40px"} />,
    <AiFillYoutube size={"40px"} />
  ];





const Footer = () => {
  return (
    <>
      <img className="footerIcon" src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-footer-icon-dark.svg" alt="" />
      <div className="footerbox"  >
      {footers.map((ele, i) => {
        return (
          <div  className="Listcontainer">
            <h3 className="listheader">{ele.h1}</h3>
            <div className="brandlist">
              {ele.p.map((ele, i) => (
                <Link className="linkList"  key={i}>{ele}</Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    <div  className="bottom_box"  >
      {bottomlink.map((ele,i)=><Link key={i} style={{color:"gray",textDecoration:"none"}}  >{ele}</Link>)}
    </div>
    </>
  
  );
};

export default Footer;
