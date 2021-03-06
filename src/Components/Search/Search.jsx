import classes from "./Search.module.scss";
import makeApiRequest from "../../makeApiRequest";
import SnippetsContainer from "../Snippets/SnippetsContainer";
import React, { useState } from 'react';

const Search = ({ showLoadingAnimation, stopLoadingAnimation, value }) => {
    let currentInputValue;
    let isTimerStarted = false;
    let timerId;

    const [serverData, setServerData] = useState(currentInputValue);
    const inputValue = React.createRef();
    const allSnipets = React.createRef();

    if (window.location.href.includes('works')) {
        console.log(333);
        currentInputValue = window.location.href.split('works/')[1];
        // makeApiRequest(currentInputValue, setServerData, stopLoadingAnimation);
    }

    function showAllBooks() {
        allSnipets.current.style.display = 'block';
        if (currentInputValue !== undefined) {
            showLoadingAnimation();
            const currentUrl = window.location.href.split('?');
            window.location.href = currentUrl[0];
        }
    }

    function setTimerId() {
        isTimerStarted = true;
        timerId = setTimeout(() => {
            makeApiRequest(currentInputValue, setServerData, stopLoadingAnimation);
            isTimerStarted = false;
        }, 1000);
    }

    function catchInputChanges() {
        currentInputValue = inputValue.current.value.replace(/ /g, "+").toLowerCase();
        if (!isTimerStarted) {
            setTimerId();
        } else {
            clearTimeout(timerId);
            setTimerId();
        }
    }

    return (
        <div className={classes.searchInput}>
            <div className={classes.searchBlock}>
                <input
                    type="text"
                    onChange={catchInputChanges}
                    ref={inputValue}
                    placeholder='type title of the book here'
                />
                <button onClick={showAllBooks}>SEARCH</button>
            </div>
            <SnippetsContainer
                buttonRef={allSnipets}
                data={serverData}
                value={value}
                currentInputValue={currentInputValue}
            />
        </div>
    )
}

export default Search;
