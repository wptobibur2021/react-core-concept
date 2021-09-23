import {useState, useEffect} from 'react'

function Users() {
    const [users, setUser] = useState([])
    console.log(users)
    useEffect(() => {
        fetch('https://randomuser.me/api/?results=28')
        .then(res => res.json())
        .then(data => setUser(data.results))
       
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
               
                users.map(user => <SingleUser key={user.id.value} {...user} index='key'></SingleUser>)
            }
        
        {/*            
            {
                users.map(user => {
                    <div className="col">
                        <div className="card">
                            <img src='' className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{user.name.title}</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                   
                })
            } */}
            
        </div>
    )
}

const SingleUser = (props) =>{
    return(
        <div className="col-md-3">
            <div className="card">
            <img src={props.picture.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.name.title} {props.name.first} {props.name.last}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
    </div>
    )
}

export default Users