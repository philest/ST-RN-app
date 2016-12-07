/*
 * credits to Dan Abramov, the author of Redux, which is the flux-like library
 * that we're using in this project. These functions are a simple abstraction
 * for updating objects with a new values without a value-mutating side-effect
 * more info:
 *  http://redux.js.org/docs/recipes/reducers/RefactoringReducersExample.html#combining-reducers-by-slice
 */



// update the value of single object
// e.g.:
//   updateObject({age:21, name: 'Aubrey', {age:22}}
//       ( => {age:22, name:'Aubrey'} )
//
export function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}


// here we must provide a function as the updateItemCallback to update the item
// in question. probably a call to updateObject
export function updateItemInArray(array, itemId, updateItemCallback) {
    const updatedItems = array.map(item => {
        // we don't want to update this item
        if(item.id !== itemId) {
            return item;
        }
        // this is the item we update :)
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });

    return updatedItems;
}
