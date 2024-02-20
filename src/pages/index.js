// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import RecipeList from './qcomps/recipes'
import Gallery from './components/state'
import FeedbackForm from './qcomps/thankYouCrash'
import Form from './qcomps/stuckForm'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
import List from './qcomps/artistsRemoveArr'
export default function Home() {
  return (
    <div className={styles.main}>
        <List />
    </div>
  )
}
