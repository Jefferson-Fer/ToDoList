import styles from './Header.module.css'

interface ListHeader {
    countCreatedTasks: number,
    countCompletedTasks: number
}

function ListHeader({countCreatedTasks, countCompletedTasks} : ListHeader) {

    return (
        <header className={styles.header}>
            <aside className={styles.contentCreatedTasks}>
                <p>Tarefas Criadas</p>
                <span>{countCreatedTasks}</span>
            </aside>

            <aside className={styles.contentCompletedTasks}>
                <p>Tarefas Concluidas</p>
                <span>{countCompletedTasks}</span>
            </aside>
        </header>
    )
}

export default ListHeader;