import Card from "./Card";
import {genIsPrime, getCouples, getRandNumbers, mixing} from "../utils";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {debounce} from "lodash";
import {clicked, clickedAction, noClicked, numsClearAction, startAction} from "../store/reducer";

function Wrapper() {
    const [numbers, setNumbers] = useState([])
    const clickedStatus = useSelector( ({ clickedStatus }) => clickedStatus )
    const dispatch = useDispatch()

    useEffect(() => {
        setNumbers(mixing(getCouples(getRandNumbers(genIsPrime()))))
    }, [])

    useEffect(() => {
        debounce(() => {
            dispatch(startAction(true))
        }, 5000, {})()
    }, [])

    useEffect(() => {
        if (clickedStatus === clicked) {
            debounce(() => {
                dispatch(clickedAction(noClicked))
                dispatch(numsClearAction())
            }, 1000)()
        }
    }, [clickedStatus])

    return (
        <div className="game">
          <span className="game__title">
              Mahjong-like game
          </span>
          <div className="game__field">
              {
                  numbers.map( (value, idx) =>
                      <Card key={idx} num={value} />
                  )
              }
          </div>

        </div>
  );
}

export default Wrapper;
