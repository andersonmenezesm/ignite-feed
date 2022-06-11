import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'

import './global.css';

export function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Anderson"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam architecto quod nam aperiam ea dolor fuga aspernatur eaque hic sint incidunt quo iusto natus atque, at, voluptas eius laudantium."
          />
          <Post 
            author="Anderson"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quam architecto quod nam aperiam ea dolor fuga aspernatur eaque hic sint incidunt quo iusto natus atque, at, voluptas eius laudantium."
          />
        </main>
      </div>
    </>
  )
}