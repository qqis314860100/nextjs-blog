import Head from 'next/head';
import Link from 'next/link';
import Layout1 from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout1>
      <Head>
        <title>first post</title>
      </Head>
      <h1>first post</h1>
      <h2>
        <Link href='/'>
          <a>Back to home</a>
        </Link>
      </h2>
      <style jsx>
        {`
          h1,
          h2 {
            color: red;
            background: black;
          }
        `}
      </style>
    </Layout1>
  );
}
