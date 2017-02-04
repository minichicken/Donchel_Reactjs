export const INSERT = 'INSERT';
export const REMOVE = 'REMOVE';
export const CHECKED = 'CHECKED';
export const MODIFY = 'MODIFY';
export const SET_TITLE = 'SET_TITLE';

export function insert() {
    return {
        type: INSERT
    }
}

export function remove(index) {
    return {
        type: REMOVE,
        itemIndex: index
    }
}

export function checked(index) {
    return {
        type: CHECKED,
        itemIndex: index
    }
}

export function modify(title, index) {
    return {
        type: MODIFY,
        itemTitle: title,
        itemIndex: index
    }
}

export function setTitle(value) {
    return {
        type: SET_TITLE,
        title: value
    }
}