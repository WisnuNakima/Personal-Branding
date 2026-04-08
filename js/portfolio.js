// Lightbox untuk zoom gambar portfolio
document.addEventListener('DOMContentLoaded', function() {
  // Pilih semua gambar portfolio (termasuk yang di grid)
  const portfolioImages = document.querySelectorAll('.portfolio-image img, .portfolio-image-single img');
  
  // Buat lightbox element
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <img class="lightbox-content" src="" alt="">
  `;
  document.body.appendChild(lightbox);
  
  const lightboxImg = lightbox.querySelector('.lightbox-content');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  
  // Tambahkan event listener ke setiap gambar
  portfolioImages.forEach(img => {
    // Tambahkan cursor pointer
    img.style.cursor = 'pointer';
    
    img.addEventListener('click', function() {
      if (this.src && !this.parentElement.classList.contains('no-image')) {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        document.body.style.overflow = 'hidden'; // Prevent scrolling
      }
    });
  });
  
  // Close lightbox saat klik tombol close
  closeBtn.addEventListener('click', function() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close lightbox saat klik di luar gambar
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close lightbox dengan tombol ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
});
