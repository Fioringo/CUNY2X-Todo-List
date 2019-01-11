export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const EDIT = "EDIT";

export const createEntry = (value = "", id = 0) => {
    return {
        type: ADD,
        id,
        value
    }
}

export const edit = (value) => {
    return {
        type: EDIT,
        value
    }
}