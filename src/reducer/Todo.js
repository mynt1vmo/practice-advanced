import { produce } from "immer";
let current = {
    todos: [],
    status: "All"
};

const reducer = produce((draft = current, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD_ITEM":
            draft.todos.push(payload);
            return draft;
        case "DELETE_ITEM":
            draft.todos = draft.todos.filter((item) => item.id !== payload);
            return draft;
        case "EDIT_TEXT":
            draft.todos = draft.todos.map((item) => {
                if (item.id === payload.id) {
                    item.title = payload.title;
                    return item;
                }
                return item;
            });
            return draft;
        case "IS_COMPLETE":
            draft.todos = draft.todos.map((item) => {
                if (item.id == payload) {
                    item.isCompleted = !item.isCompleted;
                    return item
                }
                return item;
            });
            return draft;
        case "ADD_LIST":
            draft.todos = payload;
            return draft;
        case "CLEAR_COMPLETED":
            draft.status = payload
            if (draft.status === 'Clear') {
                console.log('vao day chua');
                draft.todos = draft.todos.filter((item) => {
                    if (!item.isCompleted) {
                        return item
                    }
                });
            }
            return draft
        default:
            return draft;
    }
});

export default reducer;