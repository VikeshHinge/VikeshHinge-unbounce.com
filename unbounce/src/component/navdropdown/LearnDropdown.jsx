import { Link } from "react-router-dom";
let container = [
  {
    id: 0,
    h1: "Conversion Intelligence Resources",
    p1:"Learn how AI can help you get more leads, sign-ups, and sales from your campaigns.",
    link: [
      { title: "What is a Conversion Intelligence" },
      { title: "The Ultimate Optimization Guide" },
      { title: "Why AI in Marketing Matters"},
      { title: "Conversionn Benchmark Report" },
      { title: "Conversions Insights" }
    ],
    img: "false"
  }, 
  {
    id: 1,
    h1: "Marketing Fundamentals",
    p1:"Explore a library of resources to help you build higher-converting landing pages and grow your business.",
    link: [
      { title: "What is Landing Page" },
      { title: "Landing Page Examples" },
      { title: "Customer Stories & Case Studies" },
      { title: "Blog" },
      { title: "Resource Library" }
    ],
    img: "false"
  },
  {
    id: 2,
    h1: "AI Marketing for Small Buisness Report",
    p1: "Break free of AI skepticism. Learn why businesses are adopting AI-powered tools at a surprising rate.",
    link: [{ title: "Read the report" }],
    img: "https://unbounce.com/photos/smb-nav-promo.png"
  }
];



const Learndropdown = ({isl_Drop}) => {
 



  return (
    <div  style={{display:isl_Drop?"block":"none"}}  >
      <div className="display-pro" >
        {container.map((items) => {
          return (
            <div key={items.id}>
              <h4 style={{textAlign:"start"}}>{items.h1}</h4>
              <p style={{fontSize:"14px",width:"70%",textAlign:"center"}} >{items.p1}</p>
              <h4 style={{display:"flex",flexDirection:"column",textAlign:"start"}}>
                {items.link.map((ele,i) => {
                return (
                        <Link className="DDlink" key={i}> {ele.title}</Link>
                     )}
                )
               }
              </h4>
              <div>
                <img style={{width:"80%"}}  src={items.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Learndropdown;