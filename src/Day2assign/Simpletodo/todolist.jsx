import {TodoItem} from './todoitem';

export const TodoList=({data,item})=>{

return (
    <div className="tasks">{data.map((elm)=>{
        return (
        <TodoItem  task={elm}/>
        )
    })} </div>
)
}