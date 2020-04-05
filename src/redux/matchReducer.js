const matchDetailState = {
    matchData: "",
    summary: "",
    scorecard: "",
    commentary: "",
    statistics: {},
    table: {},
    displaySummary: true,
    displayScoreCard: false,
    displayCommentary: false,
    displayStatistics: false,
    displayTable: false,
    tabActive: 0,
    seriesTeams: "",
    matchLiveData: ""
}

const matchDetailReducer = (state = matchDetailState, action) => {
    switch (action.type) {
        case "GET_SINGLE_MATCH_DATA":
            return {
                ...state,
                matchData: action.payload
            }
            break;
        case "GET_SUMMARY":
            return {
                ...state,
                summary: action.payload,
                displaySummary: true,
                displayScoreCard: false,
                displayCommentary: false,
                displayStatistics: false,
                displayTable: false,
                tabActive: 0
            }
            break;
        case "GET_SCORE_CARD":
            return {
                ...state,
                scorecard: action.payload,
                displaySummary: false,
                displayScoreCard: true,
                displayCommentary: false,
                displayStatistics: false,
                displayTable: false,
                tabActive: 1
            }
            break;
        case "GET_COMMENTARY":
            return {
                ...state,
                commentary: action.payload,
                displaySummary: false,
                displayScoreCard: false,
                displayCommentary: true,
                displayStatistics: false,
                displayTable: false,
                tabActive: 2
            }
            break;
        case "GET_STATISTICS":
            return {
                ...state,
                statistics: action.payload,
                displaySummary: false,
                displayScoreCard: false,
                displayCommentary: false,
                displayStatistics: true,
                displayTable: false,
                tabActive: 3
            }
        case "TABLE":
            return {
                ...state,
                table: action.payload,
                displaySummary: false,
                displayScoreCard: false,
                displayCommentary: false,
                displayStatistics: false,
                displayTable: true,
                tabActive: 4
            }
        case "SERIES_TEAMS":
            return {
                ...state,
                seriesTeams: action.payload
            }
        case "MATCH_LIVE_HIGH_LIGHTS":
            return {
                ...state,
                matchLiveData: action.payload

            }
        // case "MATCH_SCORE_CARD":
        //     return {
        //         ...state,
        //         scorecard: action.payload
        //     }
    }
    console.log(state)
    return state;
}

export default matchDetailReducer;