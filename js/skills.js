// Animasi circular progress saat scroll
document.addEventListener('DOMContentLoaded', function() {
  const skillItems = document.querySelectorAll('.skill-item');
  
  const animateSkills = () => {
    skillItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
      
      if (isVisible && !item.classList.contains('animate')) {
        item.classList.add('animate');
      }
    });
  };
  
  // Trigger saat load dan scroll
  animateSkills();
  window.addEventListener('scroll', animateSkills);
});
