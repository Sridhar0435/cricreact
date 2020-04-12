var config = {
    headers: new Headers({
        "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": "f9e86c1dcdmsh81b584bae5260e0p19795cjsnb26c4be792a1"
    }),
}

export const getMatchAction = (seriesId, matchId) => {
    console.log()
    return async (dispatch) => {
        var data = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/match.php?seriesid=${seriesId}&matchid=${matchId}`, config);
        var toJson = await data.json();
        dispatch({ type: "GET_SINGLE_MATCH_DATA", payload: toJson });
    }
}

export const getSummaryBasedOnTab = (tabName, sid, mid) => {
    return async (dispatch) => {
        if (tabName === "GET_SUMMARY") {
            console.log(tabName)
            var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/seriesstandings.php?seriesid=${sid}`, config);
            var toJson = await fetchData.json();
            dispatch({ type: tabName, payload: toJson });
        } else if (tabName === "GET_SCORE_CARD") {
            console.log("scordCardAction")
            var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php?seriesid=${sid}&matchid=${mid}`, config);
            var toJson = await fetchData.json();
            dispatch({ type: tabName, payload: toJson });

        } else if (tabName === "GET_COMMENTARY") {
            console.log("Commentary")
            var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/comments.php?seriesid=${sid}&matchid=${mid}`, config);
            var toJson = await fetchData.json();
            dispatch({ type: tabName, payload: toJson });
        } else if (tabName === "GET_STATISTICS") {
            console.log(tabName)
            dispatch({ type: tabName, payload: "GET_STATISTICS_ACTION" });
        } else if (tabName === "TABLE") {
            console.log(tabName)
            dispatch({ type: tabName, payload: "TABLE_ACTION" });
        }
    }
}

export const getSeriesTeamNames = (seiresid) => {
    return async (dispatch) => {
        console.log("getSeriesTeamNames")
        var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/seriesteams.php?seriesid=${seiresid}`, config);
        var toJson = await fetchData.json();
        dispatch({ type: "SERIES_TEAMS", payload: toJson });
    }
}

export const matchLiveAndHighLightAction = (seriesId, matchId) => {
    return async (dispatch) => {
        console.log("matchLiveAndHighLightAction");
        var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/matchdetail.php?seriesid=${seriesId}&matchid=${matchId}`, config);
        var toJson = await fetchData.json();
        dispatch({ type: "MATCH_LIVE_HIGH_LIGHTS", payload: toJson })
    }
}

export const partnerShipAction = (sId, mId, inningsId) => {
    return async (dispatch) => {
        var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/partnerships.php?seriesid=${sId}&matchid=${mId}&innid=${inningsId}`, config);
        var toJson = await fetchData.json();
        dispatch({ type: "PARTNER_SHIP", payload: toJson })
    }
}
// export const scordCardAction = (sid, mid) => {
//     return async (dispatch) => {
//         console.log("scordCardAction")
//         var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/scorecards.php?seriesid=${sid}&matchid=${mid}`, config);
//         var toJson = await fetchData.json();
//         dispatch({ type: "MATCH_SCORE_CARD", payload: toJson });
//     }
// }

// export const commentaryAction = (sid, mid) => {
//     return async (dispatch) => {
//         console.log("Commentary")
//         var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/comments.php?seriesid=${sid}&matchid=${mid}`, config);
//         var toJson = await fetchData.json();
//         dispatch({ type: "GET_COMMENTARY", payload: toJson });
//     }
// }