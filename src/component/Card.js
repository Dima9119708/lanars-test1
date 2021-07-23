import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {clickedAction, numsPairsPushAction, numsPushAction} from "../store/reducer";

const Card = ({ num }) => {
    const [toggleClass, setToggle] = useState('')
    const numsPairs = useSelector( ({ numsPairs }) => numsPairs )
    const clicked = useSelector( ({ clicked }) => clicked )
    const start = useSelector( ({ start }) => start )
    const dispatch = useDispatch()

    useEffect(() => {
        if (typeof clicked === "boolean") {
            if (numsPairs.includes(num) && start) {
                setToggle('enable')
            }
            else if (!numsPairs.includes(num) && start) {
               setToggle('disable')
            }
        }
    }, [clicked, start])

    const listenerClick = () => {
        setToggle('enable')

        if (typeof clicked === 'boolean') {
            dispatch(clickedAction(' '))
        }

        dispatch(numsPushAction(num))
        dispatch(numsPairsPushAction(num))
    }

    return (
        <div onClick={start ? listenerClick : null} className="game__card">
            <div className={`game__opacity ${toggleClass}`}/>
            { num }
        </div>
    );
};

export default Card;