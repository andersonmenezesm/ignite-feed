import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={"https://github.com/andersonmenezesm.png"} />
            <div className={styles.authorInfo}>
              <strong>Anderson Menezes</strong>
              <span>Software Developer</span>
            </div>
          </div>

          <time 
            title="26 de Outubro às 18:30h"
            dateTime="2023-10-26 18:30:00"
          >Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>
          <p>Acabei de subir   um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="#">jane.design/doctorcare</a></p>
          <p>
            <a href="#">#novoprojeto</a>{' '}
            <a href="#">#rocketseat</a>{' '}
            <a href="#">#nlw</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>

          <textarea 
            placeholder="Deixe um comentário"
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
  
        </form>

        <div className={styles.commentList}>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    </>
  )
}