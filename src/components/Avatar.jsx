import styles from './Avatar.module.css'

export function Avatar(props) {
  return (
    <img
      className={styles.avatar}
      // eslint-disable-next-line react/prop-types
      src={props.src}
    />
  )
}