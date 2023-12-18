import './Card.css';


const Card = ({data}) => {
//    const { image, level, title, user, rating, students, modules, duration} = cources;
   
    const hours = (duration) => {
        const milliseconds = duration  * 1000; 
        const date = new Date(milliseconds);
      
        const hours = date.getUTCHours();
        const minutes = date.getUTCMinutes();
        const hoursMinutes = `${hours} h ${minutes} m`;
      
        return hoursMinutes;
      }


    return (
        <>
        <ul className="cards">
            {data.map(({id, image, level, title, user, rating, students, modules, duration})=>
                <li key={id}>
                    <div className="card">
                            <div className="image__container">
                                <img
                                src={image}
                                alt=""
                                />
                                <div className="level">{level}</div>
                            </div>
                            <h3 className="card__title">{title}</h3>

                            <div className="card__info">
                                <div className="user">
                                <img
                                    src={user.avatar}
                                    alt={user.name}
                                />
                                <p>{user.name}</p>
                                </div>
                                <div className="rating">
                                <p>{rating}</p>
                                </div>
                            </div>

                            

                            <div className="card__info">
                                <div>{students} Student</div>
                                <div>{modules} Modules</div>
                                <div>{hours(duration)}</div>
                            </div>
                    </div> 
                </li>
            )}
         </ul>
       </>
                        
    )
}

export default Card