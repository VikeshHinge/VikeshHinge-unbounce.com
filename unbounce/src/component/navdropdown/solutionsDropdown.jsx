import { Link } from "react-router-dom";
import { CgShoppingCart, } from "react-icons/cg";
import { IoCloudyNightOutline ,IoSettingsOutline,IoNavigateOutline,IoEarth,IoStarOutline,IoGlobeOutline} from "react-icons/io5";
import { GoLightBulb,GoLaw } from "react-icons/go";
import { MdMarkAsUnread } from "react-icons/md";
let soldata = [
  {
    id: 0,
    h3: "By Industry",
    link: [
      { title: "Ecommerce",icons:<CgShoppingCart/> },
      { title: "saaS",icons:<IoCloudyNightOutline/> },
      { title: "Agencies",icons:<GoLightBulb/> },
      { title: "Small Buisnesses",icons:<GoLaw/> },
      { title: "Professional Services",icons:<IoSettingsOutline/> }
    ]
  },
  {
    id: 1,
    h3: "By Use Case",
    link: [
      { title: "PPC",icons:<IoNavigateOutline/> },
      { title: "Social Ads",icons:<IoEarth/> },
      { title: "Email Marketings",icons:<MdMarkAsUnread/> },
      { title: "Lead Generations",icons:<IoStarOutline/> },
      { title: "Sell Online" ,icons:<IoGlobeOutline/>}
    ]
  }
];

const Solutionsdropdown = () => {
  let solnstyle = {
    width: "40%",
    display: "flex",
    margin: "auto",
    backgroundColor: "silver",
    textAlign: "start",
    padding: "20px",
    justifyContent: "center",
    gap: "40px",
    backgroundColor:"palevioletred",
  };

  return (
    <div style={solnstyle}>
      {soldata.map((items) => {
        return (
          <div key={items.id} >
            <h3>{items.h3}</h3>
            <h4
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "start"
              }}
            >
              {items.link.map((ele) => (
                <Link
                  style={{ marginTop: "10px", backgroundColor: "grey" }}
                  key={ele.title}
                >{ele.icons}
                  {ele.title}
                </Link>
              ))}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default Solutionsdropdown;
