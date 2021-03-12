import useLocalStorage from './useLocalStorage'



const useDarkMode = (param) => {

    const [mode, setMode] = useLocalStorage ('Dark Mode',param);


    return [mode, setMode]
}

export default useDarkMode