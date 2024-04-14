document.body.onload = function () {
   headerFooter();
   appendBox({
      depth: 1,
      list: [clubs],
      elems: ['club-list']
   });
}

let timeout;
$('#club-search').click(function() {
   const input = $('#club-input').val().toLowerCase();
   const crestBlock = $('#club-list .crest-name');
   crestBlock.css('display', 'none');
   let counter = 0;
   clearTimeout(timeout);
   timeout = setTimeout(function() {
      $('#club-list .name').each(function(index, value) {
         const name = $(this).text().toLowerCase();
         const current = crestBlock.eq(index);
         if (name.search(input) != -1) {
            current.css('display', 'flex');
            counter++;
         }
      });
      $('#club-list .no-result').css('display', counter == 0 ? 'block' : 'none');
   }, 500);
});
