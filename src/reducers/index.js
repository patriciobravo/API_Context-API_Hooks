const reducer = (state, action) => {

        switch(action.type){
            case 'SET_CHARACTERS':
                return {
                    ...state,
                    CharactersBraking:[ ...state.CharactersBraking, action.payload]
                };
            default:
                return state;
        }
};

export default reducer;