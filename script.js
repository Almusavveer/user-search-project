import people from "./users.js";

console.log(people);

const parent = document.querySelector(".parent");
const nothing = document.createElement("p");

function showUsers(arr) {
  arr.forEach(function (user) {
    const card = document.createElement("div");
    const pic = document.createElement("img");
    pic.setAttribute("loading", "lazy");
    const blurredLayer = document.createElement("div");
    const content = document.createElement("div");
    const username = document.createElement("h3");
    const bio = document.createElement("p");

    card.classList.add("card", "flex-shrink-0", "mr-4", "min-w-[200px]");
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
  const searchTerm = inp.value.trim().toLowerCase();

  // Clear previous content
  parent.innerHTML = "";
  parent.classList.remove("justify-start", "justify-center");

  if (searchTerm === "") {
    // If input is empty, show all users left-aligned
    parent.classList.add("justify-start");
    showUsers(people);
    return;
  }

  // Filter users by name
  const users = people.filter((user) =>
    user.name.toLowerCase().startsWith(searchTerm)
  );

  if (users.length > 0) {
    parent.classList.add("justify-center");
    showUsers(users);
  } else {
    parent.classList.add("justify-center");
    nothing.textContent = "User not Found";
    nothing.style.color = "#ddd";
    parent.appendChild(nothing);
  }
});
