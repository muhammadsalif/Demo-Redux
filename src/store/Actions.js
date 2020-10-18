export let INCREMENT = "INCREMENT";
export let DECREMENT= "DECREMENT";
export let INCREMENT_BY="INCREMENT_BY"
export let DECREMENT_BY ="DECREMENT_BY"

export const increment=()=>{
    return{ type:INCREMENT}
}
 
export const decrement=()=>{
    return{ type:DECREMENT}
}

export const incrementBy=(value)=>{
    return{ type:INCREMENT_BY,payload:{val:value}}
}

export const decrementBy=(value)=>{
    return{ type:DECREMENT_BY,payload:{val:value}}
}