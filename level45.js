document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'In the morning he ran straight outside to build a snowman.'
    },
    {
      name: '1',
      img: 'La mattina è corso subito fuori per costruire un pupazzo di neve.'
    },
    {
      name: '2',
      img: 'Dad helped them and at last they had a splendid snowman.'
    },
    {
      name: '2',
      img: 'Papà li ha aiutati e finalmente hanno avuto uno splendido pupazzo di neve.'
    },
    {
      name: '3',
      img: 'Tom ran indoors and fetched an old hat for his head and a carrot for his nose.'
    },
    {
      name: '3',
      img: 'Tom corse in casa e andò a prendere un vecchio cappello per la testa e una carota per il naso.'
    },
    {
      name: '4',
      img: 'It was getting dark.'
    },
    {
      name: '4',
      img: 'Si stava facendo buio.'
    },
    {
      name: '5',
      img: 'They had a surprise when they went into the living room.'
    },
    {
      name: '5',
      img: 'Hanno avuto una sorpresa quando sono entrati in soggiorno.'
    },
    {
      name: '6',
      img: 'The Chrismas tree was covered in twinkling lights, tinsel and tiny toys.'
    },
    {
      name: '6',
      img: "L'albero di Natale era coperto di luci scintillanti, orpelli e piccoli giocattoli."
    },
    {
      name: '7',
      img: 'The robin was perched right at the top of the tree.'
    },
    {
      name: '7',
      img: "Il pettirosso era appollaiato proprio in cima all'albero."
    },
    {
      name: '8',
      img: 'It´s not fair.'
    },
    {
      name: '8',
      img: 'Non è giusto.'
    },
    {
      name: '9',
      img: 'My angel should be at the top.'
    },
    {
      name: '9',
      img: 'Il mio angelo dovrebbe essere in cima.'
    },
    {
      name: '10',
      img: 'Kitty strolled into the room and spotted the robin.'
    },
    {
      name: '10',
      img: 'Kitty è entrata nella stanza e ha visto il pettirosso.'
    },
    {
      name: '11',
      img: 'At last it was Christmas Eve, the night when Father Christmas comes.'
    },
    {
      name: '11',
      img: 'Finalmente era la vigilia di Natale, la notte in cui arriva Babbo Natale.'
    },
    {
      name: '12',
      img: 'Tom went to bed, but he did not want to go to sleep.'
    },
    {
      name: '12',
      img: 'Tom è andato a letto, ma non voleva andare a dormire.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/ita1/level46.html'> Continue to next level </a>";


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
