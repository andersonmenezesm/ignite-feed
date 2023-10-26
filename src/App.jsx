import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from './App.module.css';

import { Sidebar } from "./components/Sidebar";
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Anderson Menezes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maxime veritatis et explicabo quis reiciendis, ad, assumenda ut eum architecto iure enim neque, consequuntur voluptate in blanditiis ipsam aliquam odit."
          />
          <Post
            author="John Doe"
            content="Lorem ipsum dolor sit amet consectetur maxime veritatis et explicabo quis reiciendis, adipisicing elit."
          />
        </main>
      </div>
    </>
  )
}