    function playstory() { 
      var about = document.getElementById('Story');
      var contact = document.getElementById('contact');
      var footer = document.getElementById('footer');
      var header = document.getElementById('header');
       if (about.style.display === 'block' ||
           contact.style.display === 'block'||
           footer.style.display === 'block' ||
           header.style.display === 'block' 
       ) {
        about.style.display = 'none';
        contact.style.display = 'none';
        footer.style.display = 'none';
        header.style.display = 'none'
      } else {
        about.style.display = 'block';
        contact.style.display = 'block';
        footer.style.display = 'block';
        header.style.display = 'block';
  }
    } 

