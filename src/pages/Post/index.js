import './Post.css';
import styles from './Post.module.css';

import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json";
import PostModel from "components/PostModel";
import ReactMarkdown from "react-markdown";
import NotFound from 'pages/NotFound';
import PageDefault from 'components/PageDefault';
import PostCard from 'components/PostCard';

export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id);
    })

    if (!post) {
        return <NotFound />
    }

    const postsRecomendados = posts
        .filter((post) => post.id !== Number(parametros.id))
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <Routes>
            <Route path="*" element={<PageDefault />}>
                <Route index element={
                    <PostModel
                        fotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdown>
                                {post.texto}
                            </ReactMarkdown>
                        </div>

                    <h2 className={styles.tituloOutrosPosts}>
                        Outros posts que você pode gostar:
                    </h2>

                    <ul className={styles.postsRecomendados}>
                        {postsRecomendados.map((post) => (
                            <li key={post.id}>
                                <PostCard post={post} />
                            </li>
                        ))}
                    </ul>

                    </PostModel>
                } />
            </Route>
        </Routes>

    )
}