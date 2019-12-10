import React from "react";
import './relationship.scss';
import Article from "../shared/article/article";
import html from './html.svg';
import css from './css.svg';
import js from './javascript.svg';

const Relationship = () => {
    return (
        <section className="section relationship" id="relationship">
            <h2 className="section__title relationship__title">About my relationships with web-development</h2>
            <div className="articles">
                <Article img={html} title="I'm in love with HTML" text="Hypertext Markup Language (HTML)
                            is the standard markup language for creating web pages and web applications." altImg="sign HTML" />
                <Article img={css} altImg="sign css" text="Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML."
                         title="CSS is my best friend"/>
                <Article img={js} altImg="sign js" text="JavaScript is a high-level, interpreted programming language. It is a language which is also characterized as dynamic, weakly typed, prototype-based and multi-paradigm." title="JavaScript is my passion" />

            </div>
        </section>
    )
}

export default Relationship;
