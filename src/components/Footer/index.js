import styles from './Footer.module.css';
import { ReactComponent as Trademark } from 'assets/marca_registrada.svg';

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Trademark />

            Desenvolvido por Alura.
        </footer>
    )
}