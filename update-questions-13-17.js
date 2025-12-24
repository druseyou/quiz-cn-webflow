const fs = require('fs');
const path = require('path');

// Питання 13-17 (Phase 3)
const pages = ['racing-thoughts', 'stress', 'switch-off', 'anxiety', 'wired-tired'];

pages.forEach(page => {
  const filePath = path.join(__dirname, 'src', 'app', 'quiz', page, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Замінюємо всі варіанти картинок на нову
    const updated = content.replace(
      /const BEDROOM_IMAGE = "\/images\/Cute[- ]Cozy[- ]Bedroom[- ]Diorama[- ]1(-\d+)?\.webp";/g,
      'const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1-8.webp";'
    );
    
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✓ Updated ${page} to use 1-8.webp`);
    }
  }
});

console.log('\nDone! Questions 13-17 (Phase 3) now use Cute Cozy Bedroom Diorama 1-8.webp');

