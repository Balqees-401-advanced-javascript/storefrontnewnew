import superagent from 'superagent';


let productApi = 'https://rowaid-server.herokuapp.com/api/v1/products'; 
let categoryApi = 'https://rowaid-server.herokuapp.com/api/v1/categories';


export const getRemoteData =() => dispatch => {

    return superagent.get(productApi)
        .then(data => {
            dispatch(getAction(data.body))
        });
}


export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const getRemoteDataCategory =() => dispatch => {

    return superagent.get(categoryApi)
        .then(data => {
            console.log('ggggg',data);
            dispatch(getActionCategory(data.body))
        });
}


export const getActionCategory = payload => {
    return {
        type: 'GETCategory',
        payload: payload
    }
}