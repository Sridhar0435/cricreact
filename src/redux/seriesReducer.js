
const iState = {
    passAllMatDataFromReducer: [],
    byId: [],
    sliderData: ""
}

const seriesReducer = (state = iState, action) => {

    switch (action.type) {
        case "GET_ALLMATCHES":
            return {
                ...state,
                passAllMatDataFromReducer: action.payload,
            }
            break;
        case "GET_BY_SERIES_ID":
            return {
                ...state,
                byId: action.payload,
                middleBox: true
            }
            break;
        case "SLIDER_DATA":
            return {
                ...state,
                sliderData: action.payload
            }
    }
    return state;

}
export default seriesReducer;