const initialState={
    dataUser:[],
    dataPayroll:[]
}

const processReducer=(state=initialState,action)=>{
    console.log("State: ",state)
    console.log("action: ",action)

    switch (action.type){
        case "fetchData":
            return {
                ...state,
                dataUser:action.payload.dataUser
            }
        case "addPayrollData":
            return {
                ...state,
                dataPayroll:action.payload.dataPayroll
            }
        default:
            return state
    }
}
export default processReducer