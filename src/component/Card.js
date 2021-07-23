import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import {clicked, clickedAction, noClicked, numsPairsPushAction, numsPushAction} from "../store/reducer";

const Card = ({ num }) => {
    const [toggleClass, setToggle] = useState('')
    const numsPairs = useSelector( ({ numsPairs }) => numsPairs )
    const clickedStatus = useSelector( ({ clickedStatus }) => clickedStatus )
    const start = useSelector( ({ start }) => start )
    const dispatch = useDispatch()

    useEffect(() => {
        if (clickedStatus === noClicked) {
            if (numsPairs.includes(num) && start) {
                setToggle('enable')
            }
            else if (!numsPairs.includes(num) && start) {
               setToggle('disable')
            }
        }
    }, [clickedStatus, start])

    const listenerClick = () => {
        setToggle('enable')

        if (clickedStatus === noClicked) {
            dispatch(clickedAction(clicked))
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