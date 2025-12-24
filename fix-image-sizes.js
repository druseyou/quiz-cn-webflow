const fs = require('fs');
const path = require('path');

// Конфігурація розмірів залежно від кількості опцій
const pageSizes = {
  // Phase 1
  'gender': 'large',      // 2 опції
  'age': 'large',         // slider
  'workday': 'large',     // 3 опції
  'devices': 'medium',    // 4 опції
  'bedtime': 'small',     // 5 опцій
  'info1': 'large',       // info page
  
  // Phase 2
  'goal': 'medium',       // 4 опції
  'time-to-sleep': 'medium', // 4 опції
  'night-waking': 'medium',  // 4 опції
  'triggers': 'small',    // 5 опцій
  'afternoon-crash': 'medium', // 4 опції
  'racing-thoughts': 'large',  // 3 опції
  
  // Phase 3
  'stress': 'large',      // slider
  'switch-off': 'large',  // 3 опції
  'anxiety': 'medium',    // 4 опції
  'wired-tired': 'medium', // 4 опції
  'info2': 'large',       // info page
  
  // Phase 4
  'silence': 'medium',    // 4 опції
  'sharp-noises': 'medium', // 4 опції
  'tv-podcasts': 'medium',  // 4 опції
  'natural-sounds': 'small', // 5 опцій
  'earplugs': 'medium',   // 4 опції
  
  // Phase 5
  'coffee': 'large',      // 3 опції
  'exercise': 'large',    // 3 опції
  'naps': 'large',        // 3 опції
  'bedroom-use': 'large', // 2 опції
  'ritual': 'large',      // 3 опції
  'info3': 'large',       // info page
  'info4': 'large',       // info page
  'analysis': 'large',    // info page
};

Object.entries(pageSizes).forEach(([page, size]) => {
  const filePath = path.join(__dirname, 'src', 'app', 'quiz', page, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Замінюємо imageSize на правильний
    content = content.replace(/imageSize="(large|small|medium)"/g, `imageSize="${size}"`);
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${page}: imageSize="${size}"`);
  } else {
    console.log(`✗ ${page}: file not found`);
  }
});

console.log('\nDone!');

