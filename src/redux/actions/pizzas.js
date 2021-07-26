import axios from "axios"

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload

})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    let sortTemp = ''
    if(sortBy === 'popular'){
        sortTemp = 'rating'
    } else if (sortBy === 'alfabet'){
        sortTemp = 'name'
    } else if (sortBy === 'price'){
        sortTemp = 'price'
    }

    axios.get(`http://localhost:3001/pizzas?${category !== 0 ? 'category=' + category : ''}&_sort=${sortTemp}&_order=desc`)
        .then(({data}) => {
       dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
})
