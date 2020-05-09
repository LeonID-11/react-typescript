import React, {useRef} from 'react'

interface TodoProps{
    onAdd(title: string):void
}

export const TodoForm:React.FC<TodoProps> = ({onAdd}) => {
    // const [title, setTitle] = useState<string>('');
   const ref = useRef<HTMLInputElement>(null)

    // const changeHandler = (event:React.ChangeEvent<HTMLInputElement>) =>{
        // setTitle(event.target.value)

    // }

    const clickHandler = () =>{
        // console.log(title);
        // setTitle('');
        
        onAdd(ref.current!.value)
        ref.current!.value = ''
    }

    return (
        <div className="input-field mt2">
            <input 
                // onChange={changeHandler} 
                // value={title} 
                type="text" 
                id="title"
                ref={ref}
            />
            <label htmlFor="title" className="active">Input name of todo</label>
            <button onClick={clickHandler} className="waves-effect red lighten-3 btn">add todo</button>
        </div>
    )
}
