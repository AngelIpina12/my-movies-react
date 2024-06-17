import React, { useState } from 'react'

export const Search = ({listState, setListState}) => {
  const [search, setSearch] = useState('');
  const [notFounded, setNotFounded] = useState(false);
  const searchMovie = (e) => {
    setSearch(e.target.value)
    let foundMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLowerCase());
    })
    if(search.length <= 1 || foundMovies <= 0){
      foundMovies = JSON.parse(localStorage.getItem("pelis"));
      setNotFounded(true);
    }else{
      setNotFounded(false);
    }
    setListState(foundMovies);
  }

  return (
    <>
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(notFounded === true && search.length > 1) && (
              <span className='not-founded'>No se ha encontrado ninguna coincidencia</span>
            )}
            <form>
                <input type="text"
                        id="search_field"
                        name='search'
                        autoComplete='off'
                        value={search}
                        onChange={searchMovie}/>
                <button id="search">Buscar</button>
            </form>
        </div>
    </>
  )
}
