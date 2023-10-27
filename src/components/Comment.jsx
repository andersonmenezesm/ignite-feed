import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        src={"https://github.com/diego3g.png"}
        hasBorder={false}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="26 de Outubro às 18:30h" dateTime="2023-10-26 18:30:00" >Publicado há 1h</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏🏻👏🏻</p>
        </div>
        
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button> 
        </footer>
      </div>
    </div>
  )
}