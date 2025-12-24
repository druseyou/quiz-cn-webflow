const fs = require('fs');
const path = require('path');

// Питання 1-5 Phase 1
const phase1Pages = ['gender', 'age', 'workday', 'devices', 'bedtime'];

phase1Pages.forEach(page => {
  const filePath = path.join(__dirname, 'src', 'app', 'quiz', page, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Замінюємо SVG на WebP
    const updated = content.replace(
      /const BEDROOM_IMAGE = "\/images\/Cute Cozy Bedroom Diorama 1\.svg";/g,
      'const BEDROOM_IMAGE = "/images/Cute Cozy Bedroom Diorama 1.webp";'
    );
    
    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`✓ Updated ${page} to use WebP`);
    }
  }
});

console.log('\nDone! Phase 1 (questions 1-5) now use WebP image.');

