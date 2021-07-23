import Card from "./Card";
import {genIsPrime, getCouples, getRandNumbers, mixing} from "../utils";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {debounce} from "lodash";
import {clickedAction, numsClearAction, startAction} from "../store/reducer";

function Wrapper() {
    const [numbers, setNumbers] = useState([])
    const clicked = useSelector( ({ clicked }) => clicked )
    const dispatch = useDispatch()

    useEffect(() => {
        setNumbers(mixing(getCouples(getRandNumbers(genIsPrime()))))
    }, [])

    useEffect(() => {
        debounce(() => {
            dispatch(startAction(true))
        }, 6000, {})()
    }, [])

    useEffect(() => {
        if (typeof clicked !== "boolean") {
            debounce(() => {
                dispatch(clickedAction(true))
                dispatch(numsClearAction())
            }, 1500)()
        }
    }, [clicked])

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
