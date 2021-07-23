export const clicked = 'clicked'
export const noClicked = 'noClicked'

export const numsPushAction = (payload) => ({ type: 'nums/push', payload})
export const numsPairsPushAction = (payload) => ({ type: 'numPairs/push', payload})
export const numsClearAction = () => ({ type: 'nums/clear'})
export const clickedAction = (payload) => ({ type: 'clickedStatus', payload})
export const startAction = (payload) => ({ type: 'start', payload})

const defaultState = {
    nums: [],
    numsPairs: [],
    clickedStatus: noClicked,
    start: false,
}

export function reducer(state = defaultState, action) {

    switch(action.type) {

        case 'start': {
            let { start } = state

            start = true

            return Object.assign(state, { start })
        }

        case 'nums/push': {
            const { nums, numsPairs } = state

            if (!numsPairs.includes(action.payload)) {
                nums.push(action.payload)
            }

            return Object.assign(state, { nums })
        }

        case 'numPairs/push': {
            const { numsPairs, nums } = state

            const count = nums.reduce((acc, val) => {
                if (val === action.payload) {
                    acc++
                }
                return acc
            }, 0)

            if (count === 2) {
                numsPairs.push(action.payload)
            }

            return Object.assign(state, { numsPairs })
        }

        case 'nums/clear': {
            const { nums } = state

            nums.length = 0

            return Object.assign(state, { nums })
        }

        case 'clickedStatus': {
            let { clickedStatus } = state

            clickedStatus = action.payload

            return Object.assign(state, { clickedStatus })
        }

        default: {
            return state
        }
    }
}