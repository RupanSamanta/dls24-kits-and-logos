document.body.onload = function () {
   headerFooter();
   appendBox({
      list: [nationalTeams],
      elems: ['national-teams-list']
   });
}

let timeout;
$('#national-team-search').click(function() {
   const input = $('#national-team-input').val().toLowerCase();
   const crestBlock = $('#national-teams-list .crest-name');
   crestBlock.css('display', 'none');
   let counter = 0;
   clearTimeout(timeout);
   timeout = setTimeout(function() {
      $('#national-teams-list .name').each(function(index, value) {
         const name = $(this).text().toLowerCase();
         const current = crestBlock.eq(index);
         if (name.search(input) != -1) {
            current.css('display', 'flex');
            counter++;
         }
      });
      $('#national-teams-list .no-result').css('display', counter == 0 ? 'block' : 'none');
   }, 500);
});
