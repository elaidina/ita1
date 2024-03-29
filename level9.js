document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Don´t stand behind me.'
    },
    {
      name: '1',
      img: 'Non stare dietro di me.'
    },
    {
      name: '2',
      img: 'I´m trying not to do that.'
    },
    {
      name: '2',
      img: 'Sto cercando di non farlo.'
    },
    {
      name: '3',
      img: 'We are learning to ride a bike'
    },
    {
      name: '3',
      img: 'Stiamo imparando ad andare in bicicletta.'
    },
    {
      name: '4',
      img: 'Why are you crying?'
    },
    {
      name: '4',
      img: 'Perché piangi?'
    },
    {
      name: '5',
      img: 'Because I broke my leg.'
    },
    {
      name: '5',
      img: 'Perché mi sono rotto una gamba.'
    },
    {
      name: '6',
      img: 'And I also broke my car.'
    },
    {
      name: '6',
      img: 'E ho anche rotto la macchina.'
    },
    {
      name: '7',
      img: 'Can I help you repair it?'
    },
    {
      name: '7',
      img: 'Posso aiutarti a ripararlo?'
    },
    {
      name: '8',
      img: 'Here are the keys.'
    },
    {
      name: '8',
      img: 'Ecco le chiavi.'
    },
    {
      name: '9',
      img: 'Don´t break the rules.'
    },
    {
      name: '9',
      img: 'Non infrangere le regole.'
    },
    {
      name: '10',
      img: "I don´t go to school but I can read and write."
    },
    {
      name: '10',
      img: 'Non vado a scuola ma so leggere e scrivere.'
    },
    {
      name: '11',
      img: "I can´t lift this stone."
    },
    {
      name: '11',
      img: 'Non posso sollevare questa pietra.'
    },
    {
      name: '12',
      img: 'The stone is too heavy.'
    },
    {
      name: '12',
      img: 'La pietra è troppo pesante.'
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
      resultDisplay.innerHTML = ' <h1>Congratulations! You found them all!</h1><h2>Level 9 completed!</h2><a href="https://elaidina.github.io/ita1/level10.html"> Continue to Level 10</a>'


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
