document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'I have found your babies.'
    },
    {
      name: '1',
      img: 'Ho trovato i tuoi bambini.'
    },
    {
      name: '2',
      img: 'Don´t do that!'
    },
    {
      name: '2',
      img: 'Non farlo!'
    },
    {
      name: '3',
      img: 'When it´s red, we have stop and wait until it´s green again.'
    },
    {
      name: '3',
      img: 'Quando è rosso, ci fermiamo e aspettiamo di nuovo verde.'
    },
    {
      name: '4',
      img: 'Hold tight to my hands.'
    },
    {
      name: '4',
      img: 'Tieniti stretto alle mie mani.'
    },
    {
      name: '5',
      img: 'This is a very busy road.'
    },
    {
      name: '5',
      img: 'Questa è una strada molto trafficata.'
    },
    {
      name: '6',
      img: 'We must find a safe crossing.'
    },
    {
      name: '6',
      img: 'Dobbiamo trovare un attraversamento sicuro.'
    },
    {
      name: '7',
      img: 'Look, there are traffic lights.'
    },
    {
      name: '7',
      img: 'Guarda, ci sono semafori.'
    },
    {
      name: '8',
      img: 'I pressed the button and soon the traffic stopped.'
    },
    {
      name: '8',
      img: 'Ho premuto il pulsante e presto il traffico si è fermato.'
    },
    {
      name: '9',
      img: 'The green man showed us we should cross now.'
    },
    {
      name: '9',
      img: "L'uomo verde ci ha mostrato che dovremmo attraversare ora."
    },
    {
      name: '10',
      img: 'He beeped to hurry us up.'
    },
    {
      name: '10',
      img: 'Ha emerso un segnale acustico per affrettarci.'
    },
    {
      name: '11',
      img: 'She was pleased to see her friend.'
    },
    {
      name: '11',
      img: 'Era contenta di vedere la sua amica.'
    },
    {
      name: '12',
      img: 'They played football in the garden.'
    },
    {
      name: '12',
      img: 'Hanno giocato a calcio in giardino.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 29 completed!</h2><a href='https://elaidina.github.io/ita1/level30.html'> Continue to Level 30</a>";


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
