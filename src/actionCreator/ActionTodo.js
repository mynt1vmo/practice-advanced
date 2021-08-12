function addTodoItem(item) {
    return {
        type: "ADD_ITEM",
        payload: item
    };
}

function removeItem(id) {
    return {
        type: "DELETE_ITEM",
        payload: id
    };
}

function editText(text) {
    return {
        type: "EDIT_TEXT",
        payload: text
    };
}

function markCompelted(id) {
    return {
        type: "IS_COMPLETE",
        payload: id
    };
}

function setList(list) {
    return {
        type: "ADD_LIST",
        payload: list
    };
}

function clearCompleted(action) {
    return {
        type: "CLEAR_COMPLETED",
        payload: action
    };
}

export { addTodoItem, removeItem, editText, markCompelted, setList, clearCompleted };