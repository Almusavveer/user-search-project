const people = [
  {
    name: "Jessica Williams", // Original
    pic: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8",
    bio: "A freelance UX/UI designer with a focus on creating intuitive mobile applications.",
  },
  {
    name: "Maria Garcia",
    pic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "A front-end developer and accessibility advocate based in Toronto.",
  },
  {
    name: "Ben Carter", // Original
    pic: "https://images.unsplash.com/photo-1633332755192-727a05c4013d",
    bio: "A digital marketer specializing in SEO and content strategy for tech startups.",
  },
  {
    name: "Chloe Kim",
    pic: "https://images.unsplash.com/photo-1654110455429-cf322b40a906",
    bio: "A data scientist with a background in machine learning and statistical analysis.",
  },
  {
    name: "David Rodriguez",
    pic: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde",
    bio: "A professional photographer and videographer with a passion for travel.",
  },
  {
    name: "Fatima Al-Sayed",
    pic: "https://plus.unsplash.com/premium_photo-1689551671541-31a345ce6ae0",
    bio: "A project manager leading a team in the renewable energy sector.",
  },
];

const parent = document.querySelector(".parent");
const nothing = document.createElement("p");

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    const pic = document.createElement("img");
    const blurredLayer = document.createElement("div");
    const content = document.createElement("div");
    const username = document.createElement("h3");
    const bio = document.createElement("p");

    card.classList.add("card");
    pic.classList.add("bg-img");
    blurredLayer.classList.add("blurred-layer");
    blurredLayer.style.backgroundImage = `url(${user.pic})`;
    content.classList.add("content");
    pic.src = user.pic;
    username.textContent = user.name;
    bio.textContent = user.bio;

    parent.appendChild(card);
    card.append(pic);
    card.append(blurredLayer);
    card.append(content);
    content.append(username);
    content.append(bio);

    // console.log(user.name);
  });
}

showUsers(people);

const inp = document.querySelector(".inp");

inp.addEventListener("input", () => {
  let users = people.filter((user) => {
    return user.name.startsWith(inp.value)});

  document.querySelector(".parent").innerHTML = "";
  // if (users) {
  if (users.length != 0) showUsers(users);
  else {
    parent.append(nothing);
    nothing.style.color = "#ddd"
    nothing.textContent = "User not Found";
  }
});
