const request = superagent;
var usernameInput = document.querySelector(".home__search");

request
  .get('https://api.github.com/users/ingvillajimenez')
  .then(function(response){
    var profile = response.body;
    getProfile(profile);
  })
  .catch(function(error){
    console.log(error);
  })

request
  .get('https://api.github.com/users/ingvillajimenez/repos')
  .then(function(response){
    var repos = response.body;
    getRepos(repos);
  })
  .catch(function(error){
    console.log(error);
  })

usernameInput.addEventListener('keyup', function(event){
  var ENTER_KEY_CODE = 13;

  if(event.keyCode === ENTER_KEY_CODE){
    event.preventDefault();
    var username = usernameInput.value;

    request
      .get('https://api.github.com/users/' + username)
      .then(function(response){
        var profile = response.body;
        getProfile(profile);
      })
      .catch(function(error){
        console.log(error);
      })

    request
      .get('https://api.github.com/users/' + username + '/repos')
      .then(function(response){
        var repos = response.body;
        getRepos(repos);
      })
      .catch(function(error){
        console.log(error);
      })
  }
})

function getProfile(profile){
  var avatar = document.querySelector(".user__avatar");
  var name = document.querySelector(".user__name");
  var login = document.querySelector(".user__login");
  var bio = document.querySelector(".user__bio");
  var company = document.querySelector(".user__company");
  var location = document.querySelector(".user__location");
  var email = document.querySelector(".user__email");
  var htmlUrl = document.querySelector(".user__htmlurl");

  avatar.src = profile.avatar_url;
  name.textContent = profile.name;
  login.textContent = profile.login;
  bio.textContent = profile.bio;
  company.textContent = profile.company;
  location.textContent = profile.location;
  email.textContent = profile.email;
  htmlUrl.textContent = profile.html_url;
}

function getRepos(repos){
  var template = "";
  var repositories = document.querySelector(".repositories");

  repos.forEach(function(repo){
    template += `<div class="repository">
                  <h3>
                    <a class="repository__title" href="#">${repo.name}</a>
                  </h3>
                  <p class="repository__description">${repo.description}</p>
                  <ul class="repository__stats">
                    <li class="repository__stat">
                      <i class="fas fa-circle"></i>${repo.language}
                    </li>
                    <li class="repository__stat">
                      <i class="fas fa-star"></i>${repo.stargazers_count}
                    </li>
                    <li class="repository__stat">
                      <i class="fas fa-calendar-alt"></i>${repo.updated_at}
                    </li>
                  </ul>
                </div>`
  })
  repositories.innerHTML = template;
}
