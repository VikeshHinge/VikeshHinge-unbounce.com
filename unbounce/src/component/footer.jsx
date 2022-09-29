import { Link } from "react-router-dom";
import { AiFillTwitterCircle,AiFillLinkedin,AiFillGoogleCircle,AiFillInstagram,AiFillYoutube } from "react-icons/ai";


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
    "Security",
    "Privacy Policy",
    "Terms of Service",
    <AiFillLinkedin size={"40px"} />,
    <AiFillTwitterCircle size={"40px"} />,
    <AiFillGoogleCircle size={"40px"} />,
    <AiFillInstagram size={"40px"} />,
    <AiFillYoutube size={"40px"} />
  ];

let footerstyle = {
    display:"flex",
    width:"100%",
    justifyContent:"space-around",
    backgroundColor:"#ffffff",
    textAlign:"start",
    marginTop:"30px"
}

let linkstyle = {
    display:"flex",
    textAlign:"start",
    marginTop:"30px",
    textDecoration:"none",
    fontSize:"13px",
    color:"gray"
}

const Footer = () => {
  return (
    <>
      <img style={{width:"150px",display:"block",marginLeft:"60px",marginTop:"40px"}} src="https://unbounce.com/wp-content/themes/unbounce2019/assets/img/unbounce-footer-icon-dark.svg" alt="" />
      <div style={footerstyle}  >
      {footers.map((ele, i) => {
        return (
          <div>
            <h3>{ele.h1}</h3>
            <div>
              {ele.p.map((ele, i) => (
                <Link style={linkstyle}  key={i}>{ele}</Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
    <div   style={{display:"flex",justifyContent:"end",gap:"10px" ,marginBottom:"60px" }}   >{bottomlink.map(ele=><Link style={{color:"gray",textDecoration:"none",}}  >{ele}</Link>)}</div>
    
    </>
  
  );
};

export default Footer;
