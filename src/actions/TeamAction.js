var config = {
    headers: new Headers({
        "x-rapidapi-host": "dev132-cricket-live-scores-v1.p.rapidapi.com",
        "x-rapidapi-key": "f9e86c1dcdmsh81b584bae5260e0p19795cjsnb26c4be792a1"
    }),
}
export const teamActionById = (teamid) => {
    return async (dispatch) => {
        var fetchData = await fetch(`https://dev132-cricket-live-scores-v1.p.rapidapi.com/teamplayers.php?teamid=${teamid}`, config);
        var toJson = await fetchData.json()
        dispatch({ type: "TEAM_ID", payload: toJson });
    }

}