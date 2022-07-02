// contrai e expande o sidenav
function navbar_toggler() {
  let navbar = document.getElementById("sidenav-w");
  
  if ( matches(navbar.classList[navbar.classList.length-1], 'sidenav-toggled') )
  {
    navbar.classList.remove('sidenav-toggled');
  }
  else {
    navbar.classList.add('sidenav-toggled');
  }
}

// checa se o nome das classes coincidem
function matches(tag, className) {
  for(var i=0; i < tag.length; i++) {
    if(tag[i] === className[i]) {
      continue;
    } else { return 0; }
  } return 1;
}