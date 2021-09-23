import {useState, useEffect} from 'react'

export default function Countries() {
    /* UseState Declaration */
    const [countries, setCountries] = useState([])
    console.log(countries)
    /* UseEffect Declaration */
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    return (
        <div className="row row-cols-1 row-cols-md-3 mt-3 g-4">
            {
                countries.map(country => <Country key={country.name} {...country}></Country>)
            }
        </div>
    )
}

const Country = (props) =>{
    return(
        <div className="col-md-3">
            <div className="card">
                <img src={props.flag} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Region: {props.region}</li>
                        <li className="list-group-item">Subregion: {props.subregion}</li>
                        <li className="list-group-item">Population: {props.population}</li>
                        <li className="list-group-item">Capital: {props.capital}</li>
                        <li className="list-group-item">Languages: {props.languages[0].name}</li>
                        <li className="list-group-item">NativeName: {props.nativeName}</li>
                        <li className="list-group-item">Currencies: {props.currencies[0].symbol}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
