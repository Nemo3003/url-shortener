import {useState, useRef} from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const inputRef = useRef();
  const [shortURL, setShortURL] = useState();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const url =  inputRef.current.value;
    //TODO: Ask something from the API
    fetch('/api/shortURL', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({url})
    }).then(res => res.json())
    .then(data =>{
      setShortURL(data.shortURL);
    })
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>URL shortener</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          URL Shortener
        </h1>

        <p className={styles.description}>
          Acorta tu URL
        </p>

        <div className={styles.grid}>
          <form className={styles.card} onSubmit={handleSubmit}>
            <input 
              ref={inputRef} 
              type="text" 
              className={styles.input} 
              placeholder="URL"/>
            <button className={styles.button}>Acortar</button>
            <span className={styles.input}>
              {shortURL}
            </span>
          </form>
        </div>
      </main>

      
    </div>
  )
}
