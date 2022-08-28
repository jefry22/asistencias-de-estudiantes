const btnEnviar = document.querySelector(".btn-submit");

btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  saveEstudents();
});


function saveEstudents() {
  const nombre = document.querySelector("#txtName").value;
  const apellido = document.querySelector("#txtApellido").value;
  const conteinerGrid = document.querySelector(".container-grid");
  const formContainer = document.querySelector(".form-container");

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  const checkList = document.createElement("i");
  checkList.classList.add("fa-solid");
  checkList.classList.add("fa-check");
  checkList.classList.add("btn-asisted");


  const profile = document.createElement("div");
  profile.classList.add("profile");

  const profileInfo = document.createElement("div");
  profileInfo.classList.add("profile-info");

  const studentsName = document.createElement("p");
  const studentsLast = document.createElement("p");

  studentsName.innerText = nombre;
  studentsLast.innerText = apellido;

  profileInfo.append(studentsName, studentsLast, checkList);
  profile.append(img, profileInfo);

  conteinerGrid.appendChild(profile);

  listcheck(checkList);

  formContainer.reset();
}


function listcheck(listcheck) {
  listcheck.addEventListener('click',function(){
    listcheck.classList.toggle('inactive') 
    ? listcheck.style.color='#2ecc71'
    : listcheck.style.color='#34495e';
  });
}
