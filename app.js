// local reviews data
const reviews = [
  {
    id: 1,
    name: "imran abubakar",
    job: "web developer",
    img:
      "https://pbs.twimg.com/profile_images/1527789699657613317/_Es2l3FH_400x400.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "ambassador",
    job: "web designer",
    img:
      "https://pbs.twimg.com/profile_images/1594940209401151488/SfAWNhLO_400x400.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextbtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item
let currentPerson = 0

//load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson()
})

//show person
function showPerson() {
  const person = reviews[currentPerson]
  img.src = person.img
  author.textContent = person.name
  job.textContent = person.job
  info.textContent = person.text
}

//show next person
nextbtn.addEventListener('click', () => {
  currentPerson++
  if(currentPerson > reviews.length - 1){
    currentPerson = 0
  }
  showPerson()
})

//show prev person
prevBtn.addEventListener('click', () => {
  currentPerson--
  if(currentPerson < 0 ) {
    currentPerson = reviews.length - 1
  }
  showPerson()
})

//random person
randomBtn.addEventListener('click', () => {
  const randomPerson = Math.floor(Math.random() * reviews.length)
  currentPerson = randomPerson
  showPerson()
})
