import { ITodo } from '../Types/data'
interface ITodoItem extends ITodo{
    toggeleTodo:(id:number)=>void
    removeTodo:(id:number)=>void
}

const TodoItem: React.FC <ITodoItem>=(props)=>{
    const{id,title,complete,toggeleTodo,removeTodo}=props
    return(
        <div className='taskText'>
<input type='checkbox'checked={complete} onChange={()=>toggeleTodo(id)}/>
<p>{title}</p>
<button onClick={()=>removeTodo(id)}>X</button>
        </div>
    )
}
export {TodoItem}