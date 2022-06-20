import axios from "axios";
import Head from 'next/head'
import Image from 'next/image'
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from '../styles/Home.module.css'


export default function Home({pizzaList}) {
    return (
        <div className={
            styles.container
        }>
            <Head>
                <title>Wingy Food</title>
                <meta name="description" content="Good Food, Fast Dilivery"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Featured/>
            <PizzaList pizzaList= {pizzaList}/>
        </div>
    );
}  

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
      // admin,
    },
  };
};
