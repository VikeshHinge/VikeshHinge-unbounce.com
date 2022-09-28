import { Link } from "react-router-dom";
import { GrCentos, GrCopy, GrDirections } from "react-icons/gr";
import { IoRocketOutline,IoExtensionPuzzleOutline,IoLogoAppleAr,IoNotificationsOutline,IoDocumentsOutline} from "react-icons/io5";

let container = [
  {
    id: 0,
    h1: "Conversion Intelligence Platform",
    p1:
      "The AI-powered platform for effortlessly creating your highest-converting marketing campaigns.",
    link: [
      { title: "Smart Builder", icons: <GrCentos/> },
      { title: "Smart Copy", icons: <GrCopy/> },
      { title: "Smart Traffic", icons: <GrDirections/> },
      { title: "Conversion Intelligence Features", icons: <IoRocketOutline/> },
      { title: "Apps and integrations", icons: <IoExtensionPuzzleOutline/> }
    ],
    img: "false"
  },
  {
    id: 1,
    h1: "Classic Unbounce",
    p1:
      "The original drag-and-drop landing page platform for experienced marketers.",
    link: [
      { title: "Classic Builder", icons: <IoLogoAppleAr/> },
      { title: "Popus & Sticky Bars", icons: <IoNotificationsOutline/> },
      { title: "Templets" , icons: <IoDocumentsOutline/>},
      { title: "Classic Unbounce Features" , icons: <IoRocketOutline/>}
    ],
    img: "false"
  },
  {
    id: 2,
    h1: "Recession Marketing Survival Toolkit",
    p1:
      "Don’t get lost in the wilderness. Here’s how you can rely on landing pages for more sales, leads, and clicks.",
    link: [{ title: "learn more" }],
    img: "https://unbounce.com/photos/big-nav-block-347x224-v2_2X.jpg"
  }
];

let mainboxstyle ={
    display:"flex",
    justifyContent:"center",
    gap:"30px",
    width:"75%",
    margin: "auto",
    padding:"20px",
   border:"2px solid",
   
};


const Productdropdown = (prop) => {


  return (
    <>
      <div style={mainboxstyle}>
        {container.map((items) => {
          return (
            <div style={{border:"1px solid",width:"30%",textAlign:"center",}} key={items.id}>
              <h2>{items.h1}</h2>
              <p  style={{fontSize:"12px"}} >{items.p1}</p>
              <h4
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start"
                }}
              >
               {items.link.map((ele) => {
                return (
                        <Link style={{marginTop:"15px",marginLeft:"20px",fontSize:"18px",textDecoration:"none",color:"black"}} 
                        key={ele.title}> {ele.icons} {ele.title}</Link>
                     )}
                )
               }
                
              </h4>
              <div>
                <img style={{ width: "90%" }} src={items.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Productdropdown;

