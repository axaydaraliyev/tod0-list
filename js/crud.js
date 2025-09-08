export function getTodo(array, id){
    const result = array.find((el)=>el.id==id);
    return result;
}

export function addTodo(array, newTodo) {
    const result = [...array, newTodo];
    return result;
}

export function deleteTodo(array, id){
    const result = array.filter((el)=>el.id !=id);
    return result;
}

export function updete(array, id, updeteTodo) {
    const result = array.map((el)=>{
        if(el.id === id){
            return updeteTodo;
        }else {
            return el;
        }
    });
    return result;
}