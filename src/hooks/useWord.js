import axios from "axios";
import { useEffect, useState } from "react"


export const TOPICS = {
    CHUCK: 'chuck',
    USELESSFACTS: 'useless',
    TECH: 'tech'
}
export function useWord(topic) {
    const [word, setWord] = useState('');

    useEffect(() => {
        if (!topic) {
            return;
        }
        if (topic === TOPICS.CHUCK) {
            axios.get('https://api.chucknorris.io/jokes/random').then(res => {
                setWord(res.data.value)
            })
            return
        }
        if (topic === TOPICS.USELESSFACTS) {
            axios.get('https://uselessfacts.jsph.pl/random.json').then(res => {
                setWord(res.data.text)
            })
            return
        }
        axios.get('https://techy-api.vercel.app/api/json').then(res => {
            setWord(res.data.message)
        })
    }, [topic])

    return word;
}

