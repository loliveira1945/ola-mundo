import styles from "./AboutMe.module.css";

import PostModel from "components/PostModel";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModel
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Lucas!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Lucas Alves sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Olá, tudo bem? Eu sou o Lucas e sou Desenvolvedor Front-end na Neo.
            </p>
            <p className={styles.paragrafo}>
            Minha história com a programação começou nas Faculdades Integradas de Bauru (FIB), 
            onde iniciei o curso de Ciência da Computação. Aprendi lógica de programação e os 
            fundamentos de várias linguagens, como PHP, Python e Java, mas sem me aprofundar muito 
            em nenhuma delas. Eu gostava muito de estudar programação, mas na época não imaginava 
            que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
            Minha primeira oportunidade na área de tecnologia foi como estagiário de Analista de 
            Qualidade. No início, foi um pouco difícil encontrar a chance de mudar de área, pois o 
            time de engenharia dependia de mim para os testes, já que eu era o único QA da empresa. 
            Além disso, não podia arriscar mudar de área ou de empresa, pois precisava do salário para 
            pagar minha faculdade.
            </p>
            <p className={styles.paragrafo}>
            Com o tempo, as coisas foram melhorando e a empresa formou um time de qualidade. 
            No meio do caminho, enfrentamos alguns problemas com a perda de clientes, o que causou 
            a redução da equipe, mas conseguimos superar esses desafios. Com o time de qualidade 
            estabilizado, recebi a oportunidade de mudar de área e comecei a atuar em desenvolvimento
             front-end. Nesse novo papel, montamos centrais de atendimento "prontas" e as personalizamos
              conforme as necessidades dos clientes. Também desenvolvemos bots na IBM Watson para 
              WhatsApp e chat.
            </p>
        </PostModel>
    )
}