import { TodoItem } from './TodoItem'
import {ITodo} from '../Types/data'
interface ITodoList {
    items:ITodo[]
    toggeleTodo:(id:number)=>void
    removeTodo:(id:number)=>void
} 

const TodoList: React.FC<ITodoList> =(props)=>{
    const {items,toggeleTodo,removeTodo}=props
    return(
        <div className='task'>
        {items.map(item => 
            (<TodoItem 
            key={item.id} 
            toggeleTodo={toggeleTodo}
            removeTodo={removeTodo}
            {...item}/>
            ))}
        </div>
    )
}
export {TodoList}