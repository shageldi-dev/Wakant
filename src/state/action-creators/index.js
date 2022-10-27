export const addCounter=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"add",
            payload:amount
        })
    }
}

export const minusCounter=(amount)=>{
    return(dispatch)=>{
        dispatch({
            type:"minus",
            payload:amount
        })
    }
}