export const convertTimeStampToDate=(s)=>{
    let d=new Date(s);
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

export const convertTimeStampToTime=(s)=>{
    let d=new Date(s);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}