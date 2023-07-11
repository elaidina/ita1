document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'We are approaching the forest.'
    },
    {
      name: '1',
      img: 'Ci stiamo avvicinando alla foresta.'
    },
    {
      name: '2',
      img: 'We can´t go by car into the forest.'
    },
    {
      name: '2',
      img: 'Non possiamo andare in macchina nella foresta.'
    },
    {
      name: '3',
      img: 'I like it here very much.'
    },
    {
      name: '3',
      img: 'Mi piace molto qui.'
    },
    {
      name: '4',
      img: 'We can play in the meadow.'
    },
    {
      name: '4',
      img: 'Possiamo giocare nel prato.'
    },
    {
      name: '5',
      img: 'Look, there´s a butterfly on that flower.'
    },
    {
      name: '5',
      img: "Guarda, c'è una farfalla su quel fiore."
    },
    {
      name: '6',
      img: 'Would you like to pick mushrooms and strawberries?'
    },
    {
      name: '6',
      img: 'Vuoi raccogliere funghi e fragole?'
    },
    {
      name: '7',
      img: 'My friend lives in a house near the river.'
    },
    {
      name: '7',
      img: 'Il mio amico vive in una casa vicino al fiume.'
    },
    {
      name: '8',
      img: "He plays with his dog every day."
    },
    {
      name: '8',
      img: 'Gioca con il suo cane tutti i giorni.'
    },
    {
      name: '9',
      img: 'Do you sometimes watch horses and cows in the meadow?'
    },
    {
      name: '9',
      img: 'Ogni tanto guardi i cavalli e le mucche nel prato?'
    },
    {
      name: '10',
      img: 'I´m afraid of that big dog.'
    },
    {
      name: '10',
      img: 'Ho paura di quel grosso cane.'
    },
    {
      name: '11',
      img: 'I want to show you something.'
    },
    {
      name: '11',
      img: 'Voglio mostrarti qualcosa.'
    },
    {
      name: '12',
      img: 'Do you want to see out pig and piglets?'
    },
    {
      name: '12',
      img: 'Vuoi vedere maiali e maialini?'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 17 completed!</h2><a href="https://elaidina.github.io/ita1/level18.html"> Continue to Level 18</a>';


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
