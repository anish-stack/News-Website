import React from 'react'
import TopNews from '../TopNews/TopNews'
import CategoryHome from '../CategoryHome/CategoryHome'
import LatestNewsCategorey from '../CategoreysNews/LatestNewsCategorey'
import Khel from '../CategoryHome/Khel'
import AdPostingRequest from '../CategoryHome/Ad'
import ContactForm from '../Contact/Contact'

function Home() {
  return (
    <div>
      <TopNews />
      <LatestNewsCategorey/>
      <CategoryHome />
      <Khel/>
      <AdPostingRequest/>
      <ContactForm/>
    </div>
  )
}

export default Home
