const fs = require('fs');
const path = require('path');

const quizDir = path.join(__dirname, 'src', 'app', 'quiz');

function updateFiles(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      updateFiles(itemPath);
    } else if (item === 'page.tsx') {
      let content = fs.readFileSync(itemPath, 'utf8');
      let changed = false;
      
      // Bedroom SVG → WebP
      if (content.includes('.svg"')) {
        content = content.replace(
          /\/images\/Cute Cozy Bedroom Diorama 1\.svg/g,
          '/images/Cute Cozy Bedroom Diorama 1.webp'
        );
        content = content.replace(
          /\/images\/Phone Sound Waves 3D Illustration \(1\) 1\.svg/g,
          '/images/Phone Sound Waves 3D Illustration (1) 1.webp'
        );
        content = content.replace(
          /\/images\/Frame 223\.svg/g,
          '/images/Frame 223.webp'
        );
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(itemPath, content, 'utf8');
        console.log(`✓ ${itemPath.replace(__dirname, '')}`);
      }
    }
  });
}

updateFiles(quizDir);
console.log('\n✅ All images converted to WebP!');

