import classes from "./Snippets.module.scss";
import React from "react";
import { NavLink } from "react-router-dom";

const Snippets = () => {
    return (
        <div className={classes.snippetsWrapper}>
            <NavLink
                to={{
                    pathname: '/details/' + 1
                }}>
                <div className={classes.eachSnippet}>
                    <img src="https://upload.wikimedia.org/wikipedia/ru/1/10/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B0_%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8_%22%D0%9D%D0%B0%D0%B2%D0%B0%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%22%2C_%D0%9C%D0%B0%D0%BA%D1%81_%D0%A4%D1%80%D0%B0%D0%B9.jpg" alt="обложка книги" />
                    <h1>Название книги</h1>
                    <p>Автор книги</p>
                </div>
            </NavLink>
        </div>
    )
}

export default Snippets;
