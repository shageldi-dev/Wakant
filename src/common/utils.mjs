export const convertTimeStampToDate=(s)=>{
    let d=new Date(s);
    return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
}

export const convertTimeStampToTime=(s)=>{
    let d=new Date(s);
    return `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
}

export const getImageFullUrl=(path)=>{
    return `http://wakant.com.tm:8001/${path}`;
}

export function isNull(value){
    return typeof value === 'undefined' || value === null
}

export const getRegionById=(list,id)=>{
    if(isNull(list) || list.length<=0 || isNull(id)){
        return "";
    } else {
        try{
            return list.find(it=>Number(it.id)===Number(id));
        } catch (e){
            return "";
        }
    }
}

export const setMaxLengthLines=(count)=>{
    return {
         overflow: "hidden",
        display: "-webkit-box",
        lineClamp: "2",
        WebkitBoxOrient: "vertical",
    }
}

export function getLanguageValue(key, item, language){
    try{
        if(!item || typeof item === "undefined" || item==null){
            return "";
        }
        if(language==='ru'){
            let value = item[`${key}Ru`];
            if(value && typeof value !== 'undefined' && value!=null){
                return value;
            } else {
                return item[`${key}`];
            }
        }
        return item[`${key}`];
    } catch(err){
        return "";
    }
}