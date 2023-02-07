import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import { ThemeContext } from './themeContext'


function App() {
  const [cardList, setCardList] = useState([])
  const [commentData, setCommentData] = useState("")
  const [cardData, setCardData] = useState({
    title: "",
    imgUrl: "",
    description: ""
  })

  const getData = async () => {
    const result = await axios("https://api.vschool.io/aloe/thing")
    setCardList(result.data)
  }
  // const getCardData = () => {
    useEffect(() => {
      getData()
    }, [])
  // } 

  
  const deleteCard = (id) => {
    axios.delete("https://api.vschool.io/aloe/thing/" + id)
      .then(res => console.log(res.data))
      .then(res => getData())
    setCardList(cardList.filter((card) => card.id !== id))

  }

  const savedCards = cardList.map((card, index) => {
    return <Card
      key={card._id}
      title={card.title}
      imgUrl={card.imgUrl}
      description={card.description}
      delete={() => deleteCard(card._id)}
      id={card._id}
      comment={commentData}
      />
    })
    // getCardData()
    return (
      <div className="app">
      <Header />
      <Form getData={getData}/>
      <div className='card-list'>{savedCards}</div>
      <Footer />
    </div>
  )
}

export default App
