document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Stick the eyes, the nose and the mouth on the mask.'
    },
    {
      name: '1',
      img: 'Incolla gli occhi, il naso e la bocca sulla maschera.'
    },
    {
      name: '2',
      img: 'My dress is too short and wide.'
    },
    {
      name: '2',
      img: 'Il mio vestito è troppo corto e largo.'
    },
    {
      name: '3',
      img: 'I´m standing in the middle of a circle.'
    },
    {
      name: '3',
      img: 'Sono in piedi nel mezzo di un cerchio.'
    },
    {
      name: '4',
      img: 'Put your shoes on.'
    },
    {
      name: '4',
      img: 'Mettiti le scarpe.'
    },
    {
      name: '5',
      img: 'Take care of you.'
    },
    {
      name: '5',
      img: 'Riguardati.'
    },
    {
      name: '6',
      img: 'Vive in una città o in un villaggio?'
    },
    {
      name: '6',
      img: 'Do you live in a town or a village?'
    },
    {
      name: '7',
      img: 'What can you see?'
    },
    {
      name: '7',
      img: 'Cosa puoi vedere?'
    },
    {
      name: '8',
      img: 'I can see a duckling, some chicks, a dog and a cat.'
    },
    {
      name: '8',
      img: 'Vedo un anatroccolo, dei pulcini, un cane e un gatto.'
    },
    {
      name: '9',
      img: 'What colour is the cat?'
    },
    {
      name: '9',
      img: 'Di che colore è il gatto?'
    },
    {
      name: '10',
      img: 'The cat is black.'
    },
    {
      name: '10',
      img: 'Il gatto è nero.'
    },
    {
      name: '11',
      img: 'I like chocolate ice-cream.'
    },
    {
      name: '11',
      img: 'Mi piace il gelato al cioccolato.'
    },
    {
      name: '12',
      img: 'I like listening to stories.'
    },
    {
      name: '12',
      img: 'Mi piace ascoltare le storie.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 7 completed!</h2><a href='https://elaidina.github.io/ita1/level8.html'> Continue to Level 8</a>";


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
