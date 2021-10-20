const addItem = (payload) => ({
    type: 'add',
    payload
});

const addAll = (payload) => ({
    type: 'addAll',
    payload
})

const deleteItem = (payload) => ({
    type: 'delete',
    payload
});

export { addItem, addAll, deleteItem};
