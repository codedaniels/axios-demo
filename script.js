const BASE_URL = 'http://api.reactprototypes.com';
const API_KEY = '?key=c318demouser';

// comes out to http://api.reactprototypes.com/todos/?key=c318demouser

// AXIOS GET LIST OF ALL CURRENT TO DO ITEMS
axios.get(`${BASE_URL}/todos${API_KEY}`).then(getTodoData);

function getTodoData( response ) {
    console.log('Response:', response)
};

// AXIOS ADD ITEM EXAMPLE
// const newItem = {
//     title: 'Daniel Stone\'s To Do Item',
//     details: 'Daniel Stone is conducting a test of the Axios post system. This is a test, only a test'
// };

// axios.post(`${BASE_URL}/todos${API_KEY}`, newItem).then( resp => {
//     console.log('Add Item Response: ', resp);
// });

// AXIOS DELETE SPECIFIC ITEM EXAMPLE
// const idToDelete = "5b2d4540e3e0f45f2ed5ca1c";

// axios.delete(`${BASE_URL}/todos/${idToDelete + API_KEY}`).then(resp => {
//         console.log('Delete Response: ', resp);
// });

// AXIOS COMPLETE TOGGLE (FALSE / TRUE)
// const idToToggle = '5b2d458be3e0f45f2ed5ca2b';

// axios.put(`${BASE_URL}/todos/${idToToggle + API_KEY}`);


// AXIOS GET SINGLE TO DO ITEM 
// const idToGet = "5b2d458be3e0f45f2ed5ca2b";
// axios.get(`${BASE_URL}/todos/${idToGet + API_KEY}`)