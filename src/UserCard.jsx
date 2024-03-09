const UserData = [
    {
        name:"Amanda",
        city:"New York",
        desc:"Front-End Developer",
        skills:["UI / UX",
        "Front End Development", "CSS", "JavaScript", "React",
        "Node"] ,
        online: false,
        profile:"images/img1.jpg",
    },
    {
        name:"James",
        city:"Texas",
        desc:"Back-End Developer",
        skills:["Spring Boot",
        "Back End Development", "Node JS", "JavaScript", "Next JS",
        "Docker"] ,
        online: true,
        profile:"images/img2.jpg",
    },
    {
        name:"Peter",
        city:"Mexico",
        desc:"Data Analyst",
        skills:["Tableu",
        "Power BI", "Pandas", "Python", "REST API",
        "Azure"] ,
        online: true,
        profile:"images/img3.jpg",
    }
]

function User(props) {
    return (
        <div className="card-container">
            <span className={props.online ?"pro online": "pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h5>{props.city}</h5>
            <p>{props.desc}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">following</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill,index) =>(<li key={index}>{skill}</li>))}
                </ul>
            </div>
        </div>
    )
}


export const UserCard = () => {
  return <>
  {
    UserData.map((user,index)=>(
        <User key={index} name={user.name}
        city={user.city}
        desc={user.desc}
        skills={user.skills}
        profile={user.profile}
        online={user.online}  />
    ))
  }
  </>

  
}
