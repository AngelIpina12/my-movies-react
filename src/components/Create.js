import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Create = ({setListState}) => {
    const componentTitle = "Añadir Película";
    const [peliState, setPeliState] = useState({
        title: '',
        description: ''
    })
    const {title, description} = peliState
    const gatherFormData = e => {
        e.preventDefault();
        let target = e.target;
        let title = target.title.value;
        let description = target.description.value;
        let movie = {
            id: new Date().getTime(),
            title,
            description,
        }
        setPeliState(movie);
        setListState(elements => { return [...elements, movie] })
        SaveInStorage("pelis", movie);
    }

  return (
    <>
        <div className="add">
            <h3 className="title">{componentTitle}</h3>
            {(title && description) && "Has creado la pelicula " + title}
            <form onSubmit={gatherFormData}>
                <input 
                    type="text" 
                    id="title"
                    name='title'
                    placeholder="Titulo" />
                <textarea 
                    id="description" 
                    placeholder="Descripción"></textarea>
                <input 
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    </>
  )
}
