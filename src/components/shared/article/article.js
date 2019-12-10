import React from "react";
import './article.scss';

const Article = ({img, title, text, altImg}) => {
    return (
        <article className='article'>
            <img src={img} alt={altImg} className="article__img section__img"/>
            <div>
                <h3 className="article__title section__subtitle">{title}</h3>
                <p className="article__text section__text">{text}</p>
            </div>
        </article>
    )
}

export default Article;
