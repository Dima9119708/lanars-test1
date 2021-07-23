const isPrime = num => {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) return false;
    }

    return num;
}

const random = num => Math.floor(Math.random() * num)

export function genIsPrime(length = 99) {
    return Array(length)
                .fill(null)
                .map((_, i) => isPrime(i + 2))
                .filter(val => val)
}

export function getRandNumbers(numbers, length = 15) {
    const randomNumbers = []

    generateRand()

    function generateRand(start = 0) {
        for (let i = start; i < length; i++) {
            const randIdx = random(numbers.length)
            const num = numbers[randIdx]

            if (randomNumbers.includes(numbers[randIdx])) {
                generateRand(i)
                return false
            }

            randomNumbers.push(num)
        }
    }

    return randomNumbers
}

export function getCouples(numbers) {
    return numbers.concat(numbers)
}

export function mixing(numbers) {
    const randAdd = ['push', 'unshift']

    return numbers.reduce((acc, val) => {
        const idx = random(randAdd.length)
        const method = randAdd[idx]

        acc[method](val)

        return acc
    }, [])
}