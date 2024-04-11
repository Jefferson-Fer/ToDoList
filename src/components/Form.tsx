import styles from './Form.module.css'
import {PlusCircle} from '@phosphor-icons/react'

function Form(){
    return (
        <form className={styles.content}>
            <input type="text" placeholder="Digite uma nova tarefa" ></input>
            <button type="submit">Criar <PlusCircle/></button>
        </form>
    )
}

export default Form