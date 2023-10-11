import styles from "./ErrorComponent.module.css";

export default function Error(props){
   const information = {...props};
   const error = information.error;
   return (
      <div className={styles.error}>
         {error}
      </div>
   );
}
