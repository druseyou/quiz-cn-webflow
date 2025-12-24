const fs = require('fs');
const path = require('path');

const pages = [
  { dir: 'goal', next: '/quiz/time-to-sleep' },
  { dir: 'time-to-sleep', next: '/quiz/night-waking' },
  { dir: 'night-waking', next: '/quiz/triggers' },
  { dir: 'triggers', next: '/quiz/afternoon-crash' },
  { dir: 'afternoon-crash', next: '/quiz/racing-thoughts' },
  { dir: 'racing-thoughts', next: '/quiz/stress' },
  { dir: 'switch-off', next: '/quiz/anxiety' },
  { dir: 'anxiety', next: '/quiz/wired-tired' },
  { dir: 'wired-tired', next: '/quiz/info2' },
  { dir: 'silence', next: '/quiz/sharp-noises' },
  { dir: 'sharp-noises', next: '/quiz/tv-podcasts' },
  { dir: 'tv-podcasts', next: '/quiz/natural-sounds' },
  { dir: 'natural-sounds', next: '/quiz/earplugs' },
  { dir: 'earplugs', next: '/quiz/coffee' },
  { dir: 'coffee', next: '/quiz/exercise' },
  { dir: 'exercise', next: '/quiz/naps' },
  { dir: 'naps', next: '/quiz/bedroom-use' },
  { dir: 'bedroom-use', next: '/quiz/ritual' },
  { dir: 'ritual', next: '/quiz/info3' },
];

pages.forEach(({ dir, next }) => {
  const filePath = path.join(__dirname, 'src', 'app', 'quiz', dir, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Замінюємо handleContinue на useEffect
    content = content.replace(
      /const handleContinue = \(\) => \{[\s\S]*?};/g,
      `useEffect(() => {\n    if (selected) {\n      const timer = setTimeout(() => {\n        router.push("${next}");\n      }, 500);\n      return () => clearTimeout(timer);\n    }\n  }, [selected, router]);`
    );
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed ${dir}`);
  }
});

console.log('Done!');

