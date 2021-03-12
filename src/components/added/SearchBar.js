import React from 'react'
import styled from 'styled-components'


const StyleSearchBar = styled.input`
    width:60%;
    padding:1%;
    margin:2%;
    background-color:#eceae0;
`


const SearchBar = props =>{
    function searchFunc(){
        let input = document.querySelector('#searchBar').value;
        input = input.toLowerCase().trim();
        let allTitles = document.querySelectorAll('.plant-card');
        for (let i=0; i<allTitles.length ;i++){
            if (allTitles[i].childNodes[1].textContent.toLowerCase().includes(input)) {
                allTitles[i].style.display=''
            }
            else{
                allTitles[i].style.display='none';
            }
        }
    }

    return (
    <StyleSearchBar id='searchBar' type='text' placeholder='Search for plants...' onKeyUp={searchFunc}/>
    )
}


export default SearchBar