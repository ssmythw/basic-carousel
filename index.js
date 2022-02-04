let people = [
  {
    name: "John Smith",
    job: "Web Developer",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    img: "./headshots/photo-0.jpg",
  },
  {
    name: "John Guy",
    job: "Back End Developer",
    about:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    img: "./headshots/photo-1.jpg",
  },
  {
    name: "Mike Doe",
    job: "Front End Developer",
    about:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    img: "./headshots/photo-2.jpg",
  },
];

let count = 0;

let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let job = document.getElementsByClassName("job")[0];
let surname = document.getElementsByClassName("name")[0];
let about = document.getElementsByClassName("about")[0];
let img = document.getElementsByClassName("headshot")[0];

job.innerText = people[0].name;
surname.innerText = people[0].job;
about.innerText = people[0].about;

console.log(count);

btnLeft.addEventListener("click", (e) => {
  console.log("left");
  count--;
  if (count < 0) count = people.length - 1;
  job.innerText = people[count].name;
  surname.innerText = people[count].job;
  about.innerText = people[count].about;
  img.src = people[count].img;
});

btnRight.addEventListener("click", (e) => {
  count++;
  if (count > people.length - 1) count = 0;
  job.innerText = people[count].name;
  surname.innerText = people[count].job;
  about.innerText = people[count].about;
  img.src = people[count].img;
});

function setContent() {}

setContent();
