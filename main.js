const btnEnviar = document.querySelector(".btn-submit");

btnEnviar.addEventListener("click", function (e) {
  e.preventDefault();
  saveEstudents();
});

/**
 <div class="profile">
          <img
            src="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />

          <div class="profile-info">
            <p class="name">Maria Luisa</p>
            <p class="lastname">Valdivia Laves</p>
            <i class="fa-solid fa-check btn-asisted"></i>
          </div>
        </div>
 */
const checkList = document.createElement("i");
checkList.classList.add("fa-solid");
checkList.classList.add("fa-check");
checkList.classList.add("btn-asisted");
// checkList.classList.add('inactive');

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

  formContainer.reset();
}

checkList.addEventListener('click',listcheck)

function listcheck(){
  const actived = checkList.classList.toggle('inactive');

  if(actived){
    checkList.style.color='#2ecc71';
  }else{
    checkList.style.color='#000000';
  }
    
}
