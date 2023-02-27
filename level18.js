document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'They are very dirty and fat but also funny.'
    },
    {
      name: '1',
      img: 'Sono molto sporchi e grassi ma anche divertenti.'
    },
    {
      name: '2',
      img: 'They like playing in the mud.'
    },
    {
      name: '2',
      img: 'A loro piace giocare nel fango.'
    },
    {
      name: '3',
      img: 'The children like playing in the yard.'
    },
    {
      name: '3',
      img: 'Ai bambini piace giocare in giardino.'
    },
    {
      name: '4',
      img: 'They are looking forward to making a hut.'
    },
    {
      name: '4',
      img: "Non vedono l'ora di costruire una capanna."
    },
    {
      name: '5',
      img: 'They need a hammer, nails and planks.'
    },
    {
      name: '5',
      img: 'Hanno bisogno di un martello, chiodi e assi.'
    },
    {
      name: '6',
      img: 'I´d like to help them to hammer the planks.'
    },
    {
      name: '6',
      img: 'Mi piace aiutarli a martellare le assi.'
    },
    {
      name: '7',
      img: 'Rather help us to hammer the nails.'
    },
    {
      name: '7',
      img: 'Aiutaci piuttosto a martellare i chiodi.'
    },
    {
      name: '8',
      img: 'How do you like the finished hut?'
    },
    {
      name: '8',
      img: 'Ti piace la capanna finita?'
    },
    {
      name: '9',
      img: 'It´s the best hut ever.'
    },
    {
      name: '9',
      img: 'È la migliore capanna di sempre.'
    },
    {
      name: '10',
      img: 'It´s a lovely hot day.'
    },
    {
      name: '10',
      img: 'È una bella giornata calda.'
    },
    {
      name: '11',
      img: 'The children are at the riverside.'
    },
    {
      name: '11',
      img: 'I bambini sono sulla riva del fiume.'
    },
    {
      name: '12',
      img: 'There is a lot of sand everywhere.'
    },
    {
      name: '12',
      img: "C'è molta sabbia ovunque."
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 18 completed!</h2><a href='https://elaidina.github.io/ita1/level19.html'> Continue to Level 19</a>";


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
