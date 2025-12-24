const fs = require('fs');
const path = require('path');

// Питання 7-11 (Phase 2 початок)
const pages = ['goal', 'time-to-sleep', 'night-waking', 'triggers', 'afternoon-crash'];

pages.forEach(page => {
  const filePath = path.join(__dirname, 'src', 'app', 'quiz', page, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Замінюємо на нову картинку
    const updated = content.replace(
      /const BEDROOM_IMAGE = "\/images\/Cute Cozy Bedroom Diorama 1(-\d+)?\.webp";/g,
      'const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-7.webp";'
    );
    
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✓ Updated ${page} to use 1-7.webp`);
    }
  }
});

console.log('\nDone! Questions 7-11 now use Cute Cozy Bedroom Diorama 1-7.webp');

