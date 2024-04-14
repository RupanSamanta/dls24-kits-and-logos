function appendBox(inp) {
   inp.elems.forEach((value, index)=> {
      const parent = $(`#${value} .container`);
      for (let obj of inp.list[index]) {
         parent.append(createBox(obj));
      }
   });
}

function createBox(data) {
   const parentDiv = newElem('div');
   parentDiv.className = 'crest-name';
   
   const crest = newElem('div');
   crest.className = 'crest';
   crest.style.setProperty('--url', `url('../assets/images/${data.url}.png')`);
   parentDiv.appendChild(crest);
   
   const nameDetails = newElem('div');
   nameDetails.className = 'name-details';
   
   const name = newElem('div');
   name.className = 'name';
   name.innerText = data.name;
   nameDetails.appendChild(name);
   
   const otherDetails = newElem('div');
   otherDetails.className = 'other-details';
   for (let prop in data.details) {
      let obj = data.details[prop];
      let div = newElem('div');
      let img = newElem('img');
      img.setAttribute('src', obj.url+'.png');
      img.setAttribute('alt', obj.name+'.png');
      div.appendChild(img);
      let span = newElem('span');
      span.innerText = obj.name;
      div.appendChild(span);
      otherDetails.appendChild(div);
   }
   nameDetails.appendChild(otherDetails);
   parentDiv.appendChild(nameDetails);
   return parentDiv;
}

function headerFooter() {
   $('header, footer').append(`
      <div class="logo-name">
         <div class="logo"></div>
      </div>
   `);
   $('footer').append(`
      <div class="page-links">
         <a href="">Home</a>
         <a href="clubs/">Clubs</a>
         <a href="national-teams/">National Teams</a>
      </div>
      <div class="social-media">
         <a href="https://github.com/RupanSamanta">
            <i class="fa-brands fa-github"></i>
         </a>
         <a href="https://www.instagram.com/rvsjan32?igsh=MXU4a3Z6ZWcyanZuOA==">
            <i class="fa-brands fa-instagram"></i>
         </a>
         <a href="https://twitter.com/rvsjan32">
            <i class="fa-brands fa-x-twitter"></i>
         </a>
         <a href="https://wa.me/qr/UDSMVCEH2MKNB1">
            <i class="fa-brands fa-whatsapp"></i>
         </a>
         <a href="mailto:rvsjan32@gmail.com">
            <i class="fa-regular fa-envelope"></i>
         </a>
      </div>
   `);
}

function newElem(elem) {
   return document.createElement(elem);
}
