
const iState = {
    passAllMatDataFromReducer: [],
    byId: [],
    sliderData: "",
    newsApi: "",
    headLinesState: "",
    inLiveScorePage: ""
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
        case "FROM_NEWS_API":
            return {
                ...state,
                newsApi: action.payload
            }
        case "HEAD_LINES":
            return {
                ...state,
                headLinesState: action.payload
            }
        case "LIVE_SCORE_PAGE":
            return {
                ...state,
                inLiveScorePage: action.payload
            }
    }
    return state;

}
export default seriesReducer;