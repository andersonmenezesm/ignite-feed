import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import { Sidebar } from "./components/Sidebar";
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/andersonmenezesm.png',
      name: 'Anderson Menezes',
      role: 'Software Developer Sr @Accenture'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir   um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-10-27 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/dirambora.png',
      name: 'Diram',
      role: 'Software Engineer Flutter'
    },
    content: [
      { type: 'paragraph', content: 'Olá pessoal, tudo bem?' },
      { type: 'paragraph', content: 'Gostaria de saber o que vocês estão achando do Flutter 3.0? Tem muitas novidades vindo por aí, em?' },
      { type: 'link', content: 'docs.flutter.dev/release/whats-new' },
    ],
    publishedAt: new Date('2023-10-26 09:00:00')
  }
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}