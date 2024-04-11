import styles from './Task.module.css'

import {iTask} from '../App'
import {Trash, Check} from '@phosphor-icons/react'



interface TaskProps {
    task: iTask,
    onDeleteTask: (idTaskDelete: number) => void,
    onAlterCheckTask: ({
            idTaskUpdate, completedTask}: 
            {idTaskUpdate: number, completedTask: boolean}) 
        => void
}

function Task({ task, onDeleteTask, onAlterCheckTask} :TaskProps) {

    function handleDeleteTask(){
        onDeleteTask(task.id);
    }

    function handleCheckTask(){
        onAlterCheckTask({idTaskUpdate: task.id, completedTask: !task.checkedTask })
    }

    const checkboxCheckedClassname = task.checkedTask ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassname = task.checkedTask ? styles['paragraph-checked'] : ''

    return (
        <div className={styles.content}>
            <div>
                <label htmlFor="checkbox" onClick={handleCheckTask}>
                    <input readOnly type="checkbox" checked={task.checkedTask} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {task.checkedTask && <Check size={12} />}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                        {task.descriptionTask}
                    </p>
                </label>
            </div>
            
            <button onClick={handleDeleteTask} title="Deletar tarefa"><Trash className={styles.iconDel}/></button>
        </div>
    )
    
}

export default Task;