const teamState = {
    teamRed: ""
}


const TeamReducer = (state = teamState, action) => {
    switch (action.type) {
        case "TEAM_ID":
            return {
                ...state,
                teamRed: action.payload
            }
    }
    return state;
}
export default TeamReducer;
