import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const List = ({listState, setListState}) => {
    // const [listState, setListState] = useState([]);

    const [edit, setEdit] = useState(0);

    useEffect(() => {getMovies()}, []);

    const getMovies = () => {
        let movies = JSON.parse(localStorage.getItem("pelis"));
        setListState(movies);
        return movies;
    }

    const deleteMovie = (id) => {
        let moviesStored = getMovies();
        let newListMovies = moviesStored.filter(movie => movie.id !== parseInt(id));
        setListState(newListMovies);
        localStorage.setItem("pelis", JSON.stringify(newListMovies));
    }

    return (

    <>
        {listState != null ? 
            listState.map(movie => {
                return (
                    <article key={movie.id} className="peli-item">
                        <h3 className="title">{movie.title}</h3>
                        <p className="description">{movie.description}</p>

                        <button className="edit" onClick={() => setEdit(movie.id)}>Editar</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Borrar</button>
                        {edit === movie.id && (<Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState}/>)}
                    </article>
                    );
                })
        : <h2>No hay peliculas para mostrar</h2>
        }
    </>
  )
}