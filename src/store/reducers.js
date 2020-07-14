let initialState = {itemFromApi: [] , categoryFromApi: []};

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
        case 'GET':
            state.itemFromApi=[...payload.results];
            return {categoryFromApi:state.categoryFromApi , itemFromApi:state.itemFromApi} ;    
        case 'GETCategory':
            state.categoryFromApi=[...payload.results];
            return {categoryFromApi:state.categoryFromApi , itemFromApi:state.itemFromApi} ;    
            default:
                return state;
            }
}