import {useState} from 'react';

 const useLocalStorage = (key, initialValue) => {

    const [storedValue,setStoredValue] = useState( () => {
        const item = window.localStorage.getItem(key);
        console.log(item)
        return item ? (console.log('it working', item), JSON.parse(item))  : initialValue;
    })
    console.log('this is stored', storedValue)


    const setValue = value => {

        setStoredValue(value);

        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

export default useLocalStorage;