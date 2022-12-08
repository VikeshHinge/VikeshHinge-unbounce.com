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
      { title: "Smart Builder", icons: <GrCentos  size={"25px"}  /> },
      { title: "Smart Copy", icons: <GrCopy  size={"25px"}  /> },
      { title: "Smart Traffic", icons: <GrDirections  size={"25px"}  /> },
      { title: "Conversion Intelligence Features", icons: <IoRocketOutline  size={"25px"}  /> },
      { title: "Apps and integrations", icons: <IoExtensionPuzzleOutline  size={"25px"}  /> }
    ],
    img: "false"
  },
  {
    id: 1,
    h1: "Classic Unbounce",
    p1:
      "The original drag-and-drop landing page platform for experienced marketers.",
    link: [
      { title: "Classic Builder", icons: <IoLogoAppleAr  size={"25px"} /> },
      { title: "Popus & Sticky Bars", icons: <IoNotificationsOutline  size={"25px"}  /> },
      { title: "Templets" , icons: <IoDocumentsOutline  size={"25px"}  />},
      { title: "Classic Unbounce Features" , icons: <IoRocketOutline   size={"25px"}  />}
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





const MinProductdropdown = () => {



  return (
    <div >
      <div className="display-pro" >
        {container.map((items) => {
          return (
            <div key={items.id}>
              <h2>{items.h1}</h2>
              <p  style={{fontSize:"12px",width:"70%",margin:"auto"}} >{items.p1}</p>
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  marginLeft:"10px",
                  gap:"10px"
                }}
              >
               {items.link.map((ele) => {
                return (
                        <Link className="DDlink"
                        key={ele.title}> {ele.icons} {ele.title}</Link>
                     )}
                )
               }
                
              </p>
              <div>
                <img style={{ width: "90%" }} src={items.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MinProductdropdown;
