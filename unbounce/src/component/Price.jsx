import "./mystyle.css";
import {FaCheck } from "react-icons/fa";
import {useState} from "react";

let cards = [
    {
      Image:
        "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_launch2X_.png.webp",
      head: "Launch",
      price: "$90",
      offers: [
        " Unlimited landing pages, popups, and sticky bars",
        "Up to 500 conversions?",
        "Up to 20,000 visitors?",
        "1 domain"
      ],
      btn: "Start Building For Free"
    },
    {
      Image:"https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_optimize3x-12X_.png.webp",
      head: "Optimize",
      price: "$135",
      offers: [
        " Unlimited landing pages, popups, and sticky bars",
          " Up to 1,000 conversions?",
          "Up to 30,000 visitors?",
          "5 domains?",
          "30% more conversions"
      ],
      btn: "Start Building For Free"
    },
    {
      Image:
        "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_accelerate3x-12X_.png.webp",
      head: "Accelarate",
      price: "$225",
      offers: [
        "Unlimited landing pages, popups, and sticky bars",
          " Up to 2,500 conversions?",
          "Up to 50,000 visitors?",
          "10 domains?",
          " 30% more conversions"
      ],
      btn: "Start Building For Free"
    },
    {
      Image:
        "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/pricing_grid_icons_concierge3x-12X_.png.webp",
      head: "Concierge",
      price: "$575",
      offers: [
        " Unlimited landing pages, popups, and sticky bars",
          " More than 5,000 conversions?",
          " More than 100,000 visitors?",
          "More than 25 domains?",
        "30% more conversions?",
        "  Dedicated success team"
      ],
      btn: "Contact a specialist"
    }
  ];


  let card2 =[
    {title:"Unbounce",offer:"1.8B",dis:"Billions of leads, sales, and signups for customers"},
    {title:"Smart Builder",offer:"+50%",dis:"Faster landing page creation than old-school builders"},
    {title:"Smart Traffic",offer:"+30%",dis:"More conversions than traditional A/B testing"}
  ]
 
  let Img = [
    "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Group-1.png.webp",
    "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/BRANDED-Unbounce-Landing-Page-Template.png.webp",
    "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Page-1-Copy-6.png.webp",
    "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Landing_Page_Template-V1.png.webp",
    "https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/campaign-monitor-logo-2.png.webp"
  ]


const Price = () => {

  const [ amount,setamount] = useState(0)



const Payforsubscription = (p) => {
if(amount !== 0){
  alert("you have already subscribed");
}else{
  setamount(p)
  alert(`${p}`)
}


}


return (
    <div style={{backgroundColor:"#f4f3f2"}} >
    <p className="font" >Grow your business with Unbounce—free for 14 days</p>
     <div className="flex2" >
        {cards.map((ele,i)=>{
            return(
                <div key={i}  className="box2 offers">
                    <div className="div2" ><img className="img" src={ele.Image} alt="" /></div>
                    <div className="div_hide pic" ><img className="img" src={ele.Image} alt="" /></div>
                    <h1>{ele.head}</h1>
                    <h1>{ele.price}</h1>
                    <div>{ele.offers.map((ele,i)=> <p key={i} > <FaCheck/> {ele}</p> )}</div>
                    <button  onClick={()=>Payforsubscription(ele.price)} className={i===3?"btn2":"btn1"}  >{ele.btn}</button>
                </div>
                
            )
        })}
        
     </div>

          <div  className="box3" >
             <h1  className="set" >How we help you grow</h1>
             <p className="set" >Unbounce was the first landing page builder on the market—and over a decade later,
                 we’re still shakin’ things up. More than 15,000 businesses choose Unbounce because
                  we continue to help them grow smarter.
             </p>
            <div className="flex2" style={{width:"70%",backgroundColor:"#303030",color:"white"}} >
              {card2.map((ele,i)=>{
                return(
                    <div key={i} style={{margin:"20px"}}  >
                        <h2>{ele.title}</h2>
                        <h1 style={{color:"#ffa1a1"}} >{ele.offer}</h1>
                        <h3>{ele.dis}</h3>
                    </div>
                )
              })}
            </div>    

             <div  className="img_flex"  >
                {Img.map((pic,i) => <img style={{width:"120px"}} key={i} src={pic} alt="" />)}
             </div>

          </div>

    </div>
)

}

export default Price;