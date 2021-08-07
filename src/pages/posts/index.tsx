import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss';

function Posts() {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>7 de agosto de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              Ultimamente o termo serverless entrou em ascensão e muito se
              comenta sobre aplicações utilizarem essa arquitetura como forma de
              se ganhar performance evitando a configuração de servidores
              complexos através de containers ou até de arquiteturas mais
              tradicionais.
            </p>
          </a>
          <a href="#">
            <time>7 de agosto de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              Ultimamente o termo serverless entrou em ascensão e muito se
              comenta sobre aplicações utilizarem essa arquitetura como forma de
              se ganhar performance evitando a configuração de servidores
              complexos através de containers ou até de arquiteturas mais
              tradicionais.
            </p>
          </a>
          <a href="#">
            <time>7 de agosto de 2021</time>
            <strong>Serverless: Quando utilizar e aplicações com NodeJS</strong>
            <p>
              Ultimamente o termo serverless entrou em ascensão e muito se
              comenta sobre aplicações utilizarem essa arquitetura como forma de
              se ganhar performance evitando a configuração de servidores
              complexos através de containers ou até de arquiteturas mais
              tradicionais.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Posts;

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'publication')],
    {
      fetch: ['publication.title', 'publication.content'],
      pageSize: 100,
    }
  );

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},
  };
};
