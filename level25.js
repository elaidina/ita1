document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Don´t fall.'
    },
    {
      name: '1',
      img: 'Non cadere.'
    },
    {
      name: '2',
      img: 'Walk slowly.'
    },
    {
      name: '2',
      img: 'Camminare piano.'
    },
    {
      name: '3',
      img: 'My friends are making a snowman.'
    },
    {
      name: '3',
      img: 'I miei amici stanno facendo un pupazzo di neve.'
    },
    {
      name: '4',
      img: 'My birthday is in winter.'
    },
    {
      name: '4',
      img: 'Il mio compleanno è in inverno.'
    },
    {
      name: '5',
      img: 'People have their birthday only once a year.'
    },
    {
      name: '5',
      img: "Le persone hanno il loro compleanno solo una volta all'anno."
    },
    {
      name: '6',
      img: 'It´s pitty.'
    },
    {
      name: '6',
      img: 'È pietoso.'
    },
    {
      name: '7',
      img: 'My daughter was born on Thursday.'
    },
    {
      name: '7',
      img: 'Mia figlia è nata giovedì.'
    },
    {
      name: '8',
      img: 'Nobody knows why the cat is so fat.'
    },
    {
      name: '8',
      img: 'Nessuno sa perché il gatto è così grasso.'
    },
    {
      name: '9',
      img: 'The little girl can button the sweater but she can´t zip the jacket up.'
    },
    {
      name: '9',
      img: 'La bambina può abbottonare il maglione ma non riesce a compensare la giacca. '
    },
    {
      name: '10',
      img: 'She likes playing with water in the bathroom.'
    },
    {
      name: '10',
      img: "Le piace giocare con l'acqua in bagno."
    },
    {
      name: '11',
      img: 'She washes her socks, shirt and pyjamas.'
    },
    {
      name: '11',
      img: 'Si lava le calze, la camicia e il pigiama.'
    },
    {
      name: '12',
      img: "C'è molta acqua dappertutto."
    },
    {
      name: '12',
      img: 'There´s a lot of water everywhere.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 25 completed!</h2><a href='https://elaidina.github.io/ita1/level26.html'> Continue to Level 26</a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
