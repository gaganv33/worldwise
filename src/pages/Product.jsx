import NavBar from "../components/NavBar";
import styles from "./Product.module.css";
import logo from "../assets/img-2.jpg";


export default function Product(){
    return (
        <div className={styles.main}>
            <NavBar />
            <div className={styles.container}>
                <div className={styles.product}>
                    <div>
                        <img src={logo} alt={"Background"} className={styles.image} />
                    </div>
                    <div className={styles.information}>   
                        <h1>About world wide</h1>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor repudiandae fugit unde? Accusamus, architecto modi quisquam ipsa nesciunt excepturi omnis atque, rerum nostrum fugit sequi esse! Eaque laboriosam facere sunt!</p>
                        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi similique, pariatur animi neque iusto facere et atque suscipit possimus, numquam aperiam iure. Maiores totam sapiente magni dolores quod minus distinctio?</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
