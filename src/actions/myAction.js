// export const myAction = (name) => {
//     return {
//         type: "CHANGE_NAME",
//         payload: name
//     }
// }
// export const myAction = (name) => {
//     return async (dispatch) => {
//         var config = {
//             headers: new Headers({
//                 "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "f9e86c1dcdmsh81b584bae5260e0p19795cjsnb26c4be792a1"
//             }),
//         }
//         var data = await fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php", config);
//         var toJson = await data.json();
//         if (typeof name === "undefined") {
//             dispatch({ type: "GET_ALLMATCHES", payload: toJson.matchList.matches })
//         } else {
//             dispatch({ type: "GET_ALLMATCHES", payload: toJson.matchList.matches[name] })
//         }


//     }
// }
var config = {
    headers: new Headers({
        "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": "f9e86c1dcdmsh81b584bae5260e0p19795cjsnb26c4be792a1"
    }),
}
export const myAction = (name) => {
    return async (dispatch) => {

        var data = await fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/series.php", config);
        var toJson = await data.json();

        var startDate = Date.parse("01/01/2020");//mm/dd/yyyy 10/18/2020
        var AllMatchSeries = toJson.seriesList.series.filter(item => {
            return Date.parse(item.startDateTime) >= startDate;
        });
        if (typeof name === "undefined") {
            dispatch({ type: "GET_ALLMATCHES", payload: AllMatchSeries })
        } else {
            dispatch({ type: "GET_ALLMATCHES", payload: AllMatchSeries[name] })
        }


    }
}

export const sliderAction = () => {
    return async (dispatch) => {

        var data = await fetch("https://dev132-cricket-live-scores-v1.p.rapidapi.com/matches.php", config);
        var toJson = await data.json();
        var matches = toJson.matchList.matches.filter(item => {
            return item;
        })
        dispatch({ type: "SLIDER_DATA", payload: matches })
    }
}


export const getBySeriesId = (index) => {
    console.log(index)
    return async (dispatch) => {

        var data = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/matchseries.php?seriesid=${index}`, config);
        var toJson = await data.json();
        var idsFilter = toJson.matchList.matches.filter(item => {
            return item.series.id === parseInt(index);
        })
        dispatch({ type: "GET_BY_SERIES_ID", payload: idsFilter })
    }
}