import {useState} from 'react'

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState()
    localStorage.setItem(key, initialValue)

    return localStorage.getItem(key)
    
}

console.log(useLocalStorage())
