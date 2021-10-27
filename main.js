const LinksSocialMedia = {
  github: "VitRegina",
  Linkedin: "Vitória Santos",
  facebook: "100006371313783",
  instagram: "_vitoria.yre"
}


function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social= li.getAttribute('class')

    li.children[0].href= `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

// i = i+ 1
// i++

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLink.href = data.html_url;
    UserImage.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
    
}
getGitHubProfileInfos()
