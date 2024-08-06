const searchInput = document.getElementById("search-input");
const listOffriends = document.querySelector(".listOfFriends");
const shortMessage = document.getElementsByClassName("message");

const ArrayOfFriends = [
  {
    id: 1,
    name: "Philp",
    image: "./img/img1.jpg",
  },
  {
    id: 2,
    name: "Timothy",
    image: "./img/img2.jpg",
  },
  {
    id: 3,
    name: "Andrew",
    image: "./img/img3.jpg",
  },
  {
    id: 4,
    name: "Peter",
    image: "./img/img4.jpg",
  },
];

const friends = {
  friend: [...ArrayOfFriends],
  currentPerson: null,
};

const displayFriends = (array) => {
  const display = array
    .map((friend) => {
      return `
        <ul>
        <li>
          <div class="details">
            <h2>${friend.name}</h2>
            <img src=${friend.image} alt="" class="image" id=${friend.id} />
          </div>
          <div class="message"></div>
        </li>
        <li>
      </ul>

        `;
    })
    .join(" ");

  listOffriends.innerHTML = display;
};

displayFriends(friends?.friend);

const handleSearch = () => {
  const searchInput = document
    .getElementById("search-input")
    .value.toUpperCase();
  const listOfFriends = document.querySelector(".listOfFriends");
  const details = listOfFriends.querySelectorAll(".details");

  details.forEach((item) => {
    const items = item.getElementsByTagName("h2")[0];
    if (items.innerHTML.toUpperCase().indexOf(searchInput) > -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
};

const imagies = (id) => {
  const person = friends?.friend.find((person) => person.id === id);

  document.querySelector(".person-inbox").innerHTML = `
  
     <h2>${person.name}</h2>
     <img src=${person.image} alt="" class="image-current" />

     
`;

  console.log(person);
  console.log(person.id, id);
};

const img = document.querySelectorAll(".image");

img.forEach((item) => {
  item.addEventListener("click", () => {
    imagies(friends.friend[0].id);
  });
});

const handleMessage = (e) => {
  e.preventDefault();
  const sendMessage = document.getElementById("send-input").value;
   if(!sendMessage){
    alert("empty")
   }else{
    let li = document.createElement("li");
    li.classList.add("message-box-read")
    li.innerHTML = sendMessage
    

    const chat = document.querySelector(".chatting")
    chat.appendChild(li)
   }
 

  document.getElementById("send-input").value = ""
  

};

document.querySelector(".btn").addEventListener("click", handleMessage);

searchInput.addEventListener("keyup", handleSearch);
