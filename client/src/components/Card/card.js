import React from 'react';
import Button from '../Button/button';

function Card({title, link, id, author, image, description, saveBook, deleteBook}) {
    if (!saveBook) {
        return (
            <div id='result-card'>
                <div className='row' id='result-header'>
                    <div className='col-3'>
                        <h4>{title}</h4>
                        <small>
                            <br />Written By:
                            <br />{author}
                        </small>
                    </div>
                    <span className='col-3 offset-6'>
                        <Button href={link}>View</Button>
                        <Button id={id} onClick={(event) => deleteBook(event)}>Delete</Button>
                    </span>
                </div>
                <hr />
                <div className='row'>
                    <div className='col-3'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-9'>
                        <p className='lead'>Description: </p>
                        {description}
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div id='result-card' className="container">
                <div className='row' id='result-header'>
                    <div className='col-8'>
                        <h4>{title}</h4>
                    </div>
                    <span className='col-4'>
                        <Button
                            href={link}
                        >View
                        </Button>
                        <Button
                            id={id}
                            onClick={(event) => saveBook(event)}
                        >Save
                        </Button>
                    </span>
                </div>
                <div className='row'>
                    <div className='col-sm-12 col-md-8'>
                        <small>Written By: {author}</small>
                    </div>
                </div>
                <br/>
                <div className='row'>
                    <div className='col-sm-12 col-md-3 text-center'>
                        <img src={image} alt={title} />
                    </div>
                    <div className='col-sm-12 col-md-9'>
                        <p className='lead'>Description: </p>
                        {description}
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;