import { IoReturnDownForwardSharp, IoCreateOutline,IoDocumentsOutline} from "react-icons/io5";
import { TbArrowsShuffle } from "react-icons/tb";
import "./Home.css";



const card = [
{   icon:<IoCreateOutline  size={"60px"} color={"blue"}/>,
    h1:"Oh. And get way better results, too.",
    p:"Make landing pages, popups, and sticky bars on your own. Unbounce has easy-to-use builders for any skill level—plus personalized recommendations to help you optimize every step of the way.",
    link:"Create Your Page"
},
{   icon:<IoDocumentsOutline size={"60px"}  color={"blue"}/>,
    h1:"… And write your copy",
    p:"Writer’s block is so… Uh, what’s the word? With AI copywriting tools, you can instantly generate, remix, and expand content for anything—like landing pages, ads, emails—in seconds.",
    link:"Write Your Copy"
},
{   icon:<TbArrowsShuffle size={"60px"}  color={"blue"}/>,
    h1:"… And optimize your traffic",
    p:"Improve your results with the click of a button. Unbounce routes your visitors to the best landing page for people like them and—on average—gets you 30% more sales and signups.",
    link:"Optimize Your Traffic"
},
]


const card2 = [
    {   icon:"https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Group-29612-1.png.webp",
        h1:"For search ads",
        p:"Google isn’t a wishing well. By pairing each ad with a dedicated landing page, you can increase your quality score, reduce your cost per click, and turn your search dollars in results.",
        link:"For search ads"
    },
    {   icon:"https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Group-29613.png.webp",
        h1:"For social media",
        p:"  You don’t need to slide into their DMs. Send your Facebook,  Instagram, and LinkedIn visitors to targeted, mobile-optimized landing pages that persuade them to make the first move." ,
        link:"For social media"
    },
    {   icon:"https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Mask-group-5.png.webp",
        h1:"For email marketing",
        p:"Unsubscribe from unsubscribes. Match every email campaign with a relevant landing page to give your visitors the clearest path from inbox to action. (And so you don’t end up in “Spam.”)",
        link:"For email marketing"
    }
    ]

let card3 = [
    {h1:"Start building pagesfor free",
    h4:"Build landing pages, popups, and sticky bars with your free 14-day trial. Cancel anytime.",
    btn:"Start Building Pages"
},
{h1:"Start writing with AI—also free",
h4:"Use AI to instantly generate copy for your marketing campaigns. No credit card required.",
btn:"Start Writting With AI"
}
]


const Homepg = () => {

    return (
        <div >
           <div className="bckcolor grid"  >
             <div className="block" ><p>Smart marketing tools to grow your business</p></div>
             <div className="imgbox"><img  className="img" src="https://unbounce.com/photos/New-banner_2x_cropped_top.png" alt="" /></div>
             <div className="hideme"><img  className="img" src="https://unbounce.com/photos/New-banner_2x_cropped_top.png" alt="" /></div>
             <div className="absoliueblk" >
                <p>Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart 
                features that let you create beautiful, high-performing marketing campaigns in just a few minutes.
                </p>
                <div  style={{display:"flex",gap:"10px"}}>
                    <button className="Btn1" >Building Landing Page</button>
                    <button  className="Btn2">Write With AI</button>
                </div>
             </div>
             <div className="hideme extra" >
                <p>Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart 
                features that let you create beautiful, high-performing marketing campaigns in just a few minutes.
                </p>
                <div>
                    <button className="Btn1" >Building Landing Page</button>
                    <button  className="Btn2">Write With AI</button>
                </div>
             </div>
           </div>
      
         <div  className="Box2">
            <h1>Build landing pages faster with AI</h1>
            <p>Unbounce landing pages have helped businesses turn billions of visitors into leads, sales, and signups. (Literally.) Combining that data with AI, Unbounce lets you create 
                custom landing pages twice as fast as old-school builders.
            </p>
            <p>Oh. And get way better results, too.</p>
         </div>

         <div className="Flexbox" >{card.map((ele)=>{
                return(
                    <div key={ele.h1} >
                        <div>{ele.icon}</div>
                        <h2>{ele.h1}</h2>
                        <p>{ele.p}</p>
                        <button  className="Btn3"   >  <IoReturnDownForwardSharp size={"20px"}/>  {ele.link}</button>
                    </div>
                )
              })}</div>

          <div  className="Box2 BBox2" >
            <h1>Get more customers from every channel</h1>
            <p>Search, social, email—and everything between. However you market your brand online,
                 Unbounce lets you create visitor experiences that get more people buying whatever you’re selling.
            </p>
          </div>

          <div className="Flexbox" >{card2.map((ele)=>{
                return(
                    <div  key={ele.h1}>
                        <img style={{width:"70%"}} src={ele.icon} alt="" />
                        <h3>{ele.h1}</h3>
                        <p>{ele.p}</p>
                        <button  className="Btn3">  <IoReturnDownForwardSharp size={"20px"}/>  {ele.link}</button>
                    </div>
                )
              })}</div>

              <div className="director" >
                <div className="Flexbox" >
                    <img style={{width:"120px"}} src="https://unbounce.com/wp-content/webp-express/webp-images/doc-root/photos/Claire-Seymour.png.webp" alt="" />
                    <p style={{fontSize:"30px"}} >"I’m a one-person marketing team, so I can’t dive super deep into everything. Unbounce lets me quickly build campaigns on my own and provides all the insights I need to make informed decisions."</p>
                </div>
                 <h2 >Claire Seymour, <h5  style={{color:"gray"}}  >Director of Marketing</h5> </h2>
              </div>
              
              <div className="card3" >
                {card3.map((ele) => {
                    return(
                        <div key={ele.h1} className="cardofcard3" >
                            <h1>{ele.h1}</h1>
                            <p>{ele.h4}</p>
                            <button >{ele.btn}</button>
                        </div>
                    )
                })}
              </div>

        </div>
    )
}

export default Homepg;