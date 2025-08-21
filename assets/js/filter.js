document.addEventListener('DOMContentLoaded', function(){
  const filters = document.querySelectorAll('.filter');
  const cards = document.querySelectorAll('.card[data-tags]');
  if(!filters.length || !cards.length) return;

  filters.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filters.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter || btn.getAttribute('data-filter');
      cards.forEach(card=>{
        const tags = (card.dataset.tags || '').split(',').map(s=>s.trim());
        card.style.display = (f==='all' || tags.includes(f)) ? '' : 'none';
      });
    });
  });
});
