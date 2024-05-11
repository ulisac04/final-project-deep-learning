import HeroCard from '../components/HeroeCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import {getHeroesByName} from '../helpers/getHeroesByName'

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);


  const {searhType, formState, onInputChange, onResetForm} = useForm({searhType: q});
  const onSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`?q=${searhType.toLowerCase().trim()}`);
    onResetForm();
  }
  
  return (
    <>
      <h1>Busqueda</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form className='d-flex' onSubmit={(event) => onSearchSubmit(event)} >
            <input type="text" value={searhType} onChange={onInputChange} placeholder="search hero" className="form-control" name="searhType" autoComplete="off" />
            <button className="btn btn-outline-primary">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            heroes.length === 0 && q !== '' && (
            <div className="alert alert-danger">
            No hero with <b>{q}</b>
            </div>)
          }
          {
             q === '' && (
              <div className="alert alert-primary">
                Search hero
              </div>)
          }
          
          

          {
            heroes.map(hero =>(
              <HeroCard key={hero.id} {...hero} />
            ))
            
          }

        </div>
      </div>

    </>
  )
}

export default SearchPage
