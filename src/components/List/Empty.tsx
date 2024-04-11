import styles from './Empty.module.css'
import {ClipboardText} from '@phosphor-icons/react'

function Empty(){
    return (
        <div className={styles.content}>
            <ClipboardText className={styles.iconTask}/>
            <p>Você ainda não possui tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}

export default Empty;