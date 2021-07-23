export const numsPushAction = (payload) => ({ type: 'nums/push', payload})
export const numsPairsPushAction = (payload) => ({ type: 'numPairs/push', payload})
export const numsClearAction = () => ({ type: 'nums/clear'})
export const clickedAction = (payload) => ({ type: 'clicked', payload})
export const startAction = (payload) => ({ type: 'start', payload})

const defaultState = {
    nums: [],
    numsPairs: [],
    clicked: false,
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
            const { numPairs, nums } = state

            const count = nums.reduce((acc, val) => {
                if (val === action.payload) {
                    acc++
                }
                return acc
            }, 0)

            if (count === 2) {
                numPairs.push(action.payload)
            }

            return Object.assign(state, { numPairs })
        }

        case 'nums/clear': {
            const { nums } = state

            nums.length = 0

            return Object.assign(state, { nums })
        }

        case 'clicked': {
            let { clicked } = state

            clicked = action.payload

            return Object.assign(state, { clicked })
        }

        default: {
            return state
        }
    }
}