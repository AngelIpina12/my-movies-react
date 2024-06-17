import React from 'react'

export const Edit = ({movie, getMovies, setEdit, setListState}) => {
    const titleComponent = "Editar película";

    const saveEdition = (e, id) => {
        e.preventDefault();
        let target = e.target;
        const storedMovies = getMovies();
        const index = storedMovies.findIndex(peli => peli.id === id);
        let movie = {
            id,
            title: target.title.value,
            description: target.description.value,
        }
        storedMovies[index] = movie;
        localStorage.setItem("pelis", JSON.stringify(storedMovies));
        setListState(storedMovies);
        setEdit(0);
    }

  return (
    <div className='edit_form'>
        <h3 className='title'>{titleComponent}</h3>
        <form onSubmit={e => saveEdition(e, movie.id)}>
            <input  type='text' 
                    name='title'
                    className='edited_title'
                    defaultValue={movie.title}/>
            <textarea name='description'
                    className='edited_description'
                    defaultValue={movie.description}/>
            <input  type='submit'
                    className='edit'
                    value='update'/>
        </form>
    </div>
  )
}
