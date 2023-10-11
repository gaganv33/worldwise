import styles from "./Country.module.css";

export default function Country(props){
    const information = {...props};
    const data = information.data;

    return (
        <div className={styles.container}>
            <div>
                {data.emoji}
            </div>
            <div>
                {data.country}
            </div>
        </div>
    )
}