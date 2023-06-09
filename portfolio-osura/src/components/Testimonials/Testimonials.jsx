import "./Testimonials.scss";
const data = [
  {
    id: 1,
    name: "Tom Durden",
    title: "Senior Developer",
    img:
      "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "src/assets/twitter.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
  },
  {
    id: 2,
    name: "Alex Kalinski",
    title: "Co-Founder of DELKA",
    img:
      "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "src/assets/youtube.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
    featured: true,
  },
  {
    id: 3,
    name: "Martin Harold",
    title: "CEO of ALBI",
    img:
      "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    icon: "src/assets/linkedin.png",
    desc:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
  },
];

export default function Testimonials() {
  return (
  <div className="testimonials" id="testimonial">
    <h1>Testimonial</h1>
    <div className="container">
      {data.map((d)=>(

        <div className={d.featured ? "card featured" : "card"}>
        <div className="top">
          <img src={d.icon} className="left" />
          <img src={d.img} 
          className="user" />
          <img src="src/assets/youtube.png" className="right" />
         
        </div>
        <div className="center">{d.desc}</div>
        <div className="bottom">
          <h3>{d.name}</h3>
          <h4>{d.title}</h4>
         
        </div>
      </div>
    ))}
    </div>
  </div>
  )
}
