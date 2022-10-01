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




const Solutionsdropdown = ({iso_Drop}) => {
 



  return (
    <div style={{display:iso_Drop?"block":"none"}}    >
           <div className="display-solution" >
      {soldata.map((items) => {
        return (
          <div key={items.id} >
            <h3>{items.h3}</h3>
            <p >
              {items.link.map((ele) => (
                <p
                 className="linksol"
                
                  key={ele.title}
                >{ele.icons}
                  {ele.title}
                </p>
              ))}
            </p>
          </div>
        );
      })}
    </div>
      </div>

  );
}; 

export default Solutionsdropdown;
