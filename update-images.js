const fs = require('fs');
const path = require('path');

// Мапінг зображень з Figma
const imageMapping = {
  // Основна картинка спальні для квізу
  'BEDROOM_IMAGE': '/images/Cute Cozy Bedroom Diorama 1.svg',
  
  // Картинка для results page (звукові хвилі)
  'PHONE_IMAGE': '/images/Phone Sound Waves 3D Illustration (1) 1.svg',
  
  // Іконка для app
  'ICON_IMAGE': '/images/Frame 223.svg'
};

const quizDir = path.join(__dirname, 'src', 'app', 'quiz');

function processDir(dir) {
  const items = fs.readdirSync(dir);
  
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      processDir(itemPath);
    } else if (item === 'page.tsx') {
      let content = fs.readFileSync(itemPath, 'utf8');
      let changed = false;
      
      // Заміна BEDROOM_IMAGE
      if (content.includes('BEDROOM_IMAGE') && content.includes('/images/bedroom.svg')) {
        content = content.replace(
          /const BEDROOM_IMAGE = "[^"]+";/g,
          `const BEDROOM_IMAGE = "${imageMapping.BEDROOM_IMAGE}";`
        );
        changed = true;
      }
      
      // Заміна PHONE_IMAGE
      if (content.includes('PHONE_IMAGE')) {
        content = content.replace(
          /const PHONE_IMAGE = "[^"]+";/g,
          `const PHONE_IMAGE = "${imageMapping.PHONE_IMAGE}";`
        );
        changed = true;
      }
      
      // Заміна ICON_IMAGE  
      if (content.includes('ICON_IMAGE')) {
        content = content.replace(
          /const ICON_IMAGE = "[^"]+";/g,
          `const ICON_IMAGE = "${imageMapping.ICON_IMAGE}";`
        );
        changed = true;
      }
      
      if (changed) {
        fs.writeFileSync(itemPath, content, 'utf8');
        console.log(`✓ Updated ${itemPath.replace(__dirname, '')}`);
      }
    }
  });
}

processDir(quizDir);
console.log('\nDone!');

