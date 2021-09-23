import './App.css';
import { useState, useEffect } from 'react';
import Users from './components/Users'
import Countries from './components/Countries';

/* User Information */
const userInfo = {
  website:'www.dis.gov.bd', 
  userName:"Md Tobibur Rohman", 
  phone:'+8801722527364', 
  eMail:'wdtobibur96@gmail.com', 
  address:'Dhaka, Bangladesh'
}
/* Products Array */
const products = [
  {name: 'HP Premium', brand:'HP', price: 53000, quality: 65, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Pre Two', brand:'HP', price: 55000, quality: 61, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Laptop', brand:'HP', price: 65000, quality: 60, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Five', brand:'HP', price: 45000, quality: 55, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Four', brand:'HP', price: 25000, quality: 50, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Three', brand:'HP', price: 75000, quality: 45, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Laptop Two', brand:'HP', price: 85000, quality: 40, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Laptop One', brand:'HP', price: 60000, quality: 35, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Premium', brand:'HP', price: 35000, quality: 30, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'HP Desktop', brand:'HP', price: 45000, quality: 25, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'},
  {name: 'Accer Premium', brand:'Accer', price: 50000, quality: 20, desc:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'}
]
/* App Component */
function App() {
  return (
      <div className="app">
        <div className="container p-5">
          <div className="row">
            <Person {...userInfo}></Person>
            <Person website='www.dis.gov.bd' userName="Md Tobibur Rohman" phone='+8801722527364' eMail='wdtobibur96@gmail.com' address='Dhaka, Bangladesh'></Person>
            <Person website='www.dis.gov.bd' userName="Md Tobibur Rohman" phone='+8801722527364' eMail='wdtobibur96@gmail.com' address='Dhaka, Bangladesh'></Person>
            <Person website='www.dis.gov.bd' userName="Md Tobibur Rohman" phone='+8801722527364' eMail='wdtobibur96@gmail.com' address='Dhaka, Bangladesh'></Person>
          </div>
          {/* Product Component Section */}
          <div className="row">
              {
                products.map(product => <Products {...product}></Products>)
              }
          </div>
          <div className='row'>
            <Counter></Counter>
          </div>
          {/* Users Component Declaration */}
          <Users></Users>
          {/* Countries Component Declaration */}
          <Countries></Countries>
        </div>
          
      </div>
  )
}

/* Counter Component */

const Counter = () =>{
  /* UseState Declaration */
  const [count, setCount] = useState(50)
  /* Handle Increment Declaration */
  const handleIncrement = () =>{
    let newCount = count + 1
    setCount(newCount)
  }
  useEffect(() => {
    console.log('Counter from Useeffect: ', count)
  }, [count])
  /* Handle Decrement Declaration */
  const handleDecrement = () => setCount(count - 1)

  return(
      <div className='counter'>
          <h4>Count: {count}</h4>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
      </div>
  )
}


/* Products Component */
const Products = (props) =>{
  console.log(props)
  return(
      <div className="col-sm-6 mb-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Price: {props.price} Taka</li>
              <li className="list-group-item">Brand: {props.brand}</li>
              <li className="list-group-item">Quantity: {props.quality}</li>            </ul>
            <p className="card-text">{props.desc}</p>
          </div>
        </div>
     </div> 
  )
}

/* Person Component */
const Person = (props) =>{
  console.log(props)
  return(
    <div className='pesrson col-md-3'>
        <h6>Name: {props.userName}</h6>
        <p>Phone: {props.phone}</p>
        <p>E-Mail: {props.eMail}</p>
        <p>Website: {props.website}</p>
        <p>Address: {props.address}</p>
    </div>
  )
}

export default App;
