function reducer(state, action) {
    if (action.type == 'inc') {
        return {
            counter: state.counter + 1,
            name: "Himansu"
        }
    }
    else if (action.type == 'dec') {
        return {
            counter: state.counter - 1
        }
    }
}
export default reducer;