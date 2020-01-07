function showToDo:(todo: {title:string, text:string}){
    console.log(todo.title+':' +todo.text)
}
let myTodo = {title:'trash', text: 'Take out trash'}
showToDo(myTodo);