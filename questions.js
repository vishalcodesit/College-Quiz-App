export const questions = {
    tech: {
      easy: [
        {
          question: "What does 'HTML' stand for?",
          answers: {
            a: "HyperText Markup Language",
            b: "High-Level Text Machine Language",
            c: "Hyperlink and Text Management Language",
            d: "High Tech Language"
          },
          correctAnswer: "a"
        },
        {
          question: "Which programming language is known as the 'language of the web'?",
          answers: { a: "Python", b: "JavaScript", c: "Java", d: "C++" },
          correctAnswer: "b"
        },
        {
          question: "What is the output of `console.log(typeof null)` in JavaScript?",
          answers: { a: "object", b: "null", c: "undefined", d: "number" },
          correctAnswer: "a"
        },
        {
          question: "Which of the following is NOT a JavaScript framework?",
          answers: { a: "React", b: "Angular", c: "Django", d: "Flask" },
          correctAnswer: "c"
        },
        {
          question: "What does 'API' stand for?",
          answers: {
            a: "Application Programming Interface",
            b: "Automated Programming Interface",
            c: "Advanced Programming Interface",
            d: "Application Process Integration"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of CSS in web development?",
          answers: {
            a: "To structure content",
            b: "To style content",
            c: "To add interactivity",
            d: "To store data"
          },
          correctAnswer: "b"
        },
        {
          question: "Which HTML tag is used to create a hyperlink?",
          answers: { a: "<a>", b: "<link>", c: "<href>", d: "<hyperlink>" },
          correctAnswer: "a"
        },
        {
          question: "What is React primarily used for?",
          answers: {
            a: "Backend development",
            b: "Database management",
            c: "Building user interfaces",
            d: "Server-side rendering"
          },
          correctAnswer: "c"
        },
        {
          question: "Which CSS property is used to change text color?",
          answers: { a: "font-color", b: "text-color", c: "color", d: "background-color" },
          correctAnswer: "c"
        },
        {
          question: "What does 'DOM' stand for?",
          answers: {
            a: "Document Object Model",
            b: "Data Object Management",
            c: "Digital Object Model",
            d: "Document Orientation Model"
          },
          correctAnswer: "a"
        }
      ],
      medium: [
        {
          question: "What is the difference between == and === in JavaScript?",
          answers: {
            a: "== checks value, === checks value and type",
            b: "== checks type, === checks value",
            c: "Both are the same",
            d: "None of the above"
          },
          correctAnswer: "a"
        },
        {
          question: "Which method is used to add an element to the end of an array in JavaScript?",
          answers: { a: "push()", b: "pop()", c: "shift()", d: "unshift()" },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the 'useEffect' hook in React?",
          answers: {
            a: "To manage state",
            b: "To perform side effects",
            c: "To create components",
            d: "To handle events"
          },
          correctAnswer: "b"
        },
        {
          question: "Which CSS property is used to make text bold?",
          answers: { a: "font-weight", b: "text-style", c: "font-style", d: "text-weight" },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the 'key' prop in React?",
          answers: {
            a: "To identify elements uniquely",
            b: "To add styles",
            c: "To manage state",
            d: "To handle events"
          },
          correctAnswer: "a"
        },
        {
          question: "Which JavaScript method is used to convert a JSON string into an object?",
          answers: {
            a: "JSON.parse()",
            b: "JSON.stringify()",
            c: "JSON.objectify()",
            d: "JSON.convert()"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the 'this' keyword in JavaScript?",
          answers: {
            a: "To refer to the current object",
            b: "To refer to the parent object",
            c: "To refer to the global object",
            d: "To refer to the previous object"
          },
          correctAnswer: "a"
        },
        {
          question: "Which CSS property is used to control the spacing between lines of text?",
          answers: { a: "line-height", b: "letter-spacing", c: "word-spacing", d: "text-spacing" },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the 'map()' method in JavaScript?",
          answers: {
            a: "To iterate over an array and transform its elements",
            b: "To filter elements in an array",
            c: "To find an element in an array",
            d: "To sort an array"
          },
          correctAnswer: "a"
        },
        {
          question: "Which HTML attribute is used to specify an image's alternative text?",
          answers: { a: "alt", b: "src", c: "title", d: "description" },
          correctAnswer: "a"
        }
      ],
      hard: [
        {
          question: "What is the purpose of the 'reduce()' method in JavaScript?",
          answers: {
            a: "To reduce the size of an array",
            b: "To apply a function to each element and accumulate a single value",
            c: "To filter elements in an array",
            d: "To sort an array"
          },
          correctAnswer: "b"
        },
        {
          question: "Which React hook is used to manage state in functional components?",
          answers: { a: "useEffect", b: "useState", c: "useContext", d: "useReducer" },
          correctAnswer: "b"
        },
        {
          question: "What is the virtual DOM in React?",
          answers: {
            a: "A lightweight copy of the real DOM",
            b: "A 3D rendering engine",
            c: "A server-side rendering technique",
            d: "A browser API"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the CSS Box Model composed of?",
          answers: {
            a: "Margin, Border, Padding, Content",
            b: "Width, Height, Depth, Color",
            c: "Font, Text, Background, Shadow",
            d: "Flex, Grid, Position, Display"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of CSS Grid's fr unit?",
          answers: {
            a: "To create fractional space allocations",
            b: "To define font sizes",
            c: "To set border radius",
            d: "To manage animations"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the useCallback hook in React?",
          answers: {
            a: "To memoize functions between re-renders",
            b: "To handle API calls",
            c: "To manage component state",
            d: "To create context providers"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the CSS specificity hierarchy order?",
          answers: {
            a: "Inline > ID > Class > Element",
            b: "ID > Class > Element > Inline",
            c: "Element > Class > ID > Inline",
            d: "Class > ID > Element > Inline"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of the Intersection Observer API?",
          answers: {
            a: "To detect element visibility in viewport",
            b: "To observe CSS animations",
            c: "To track mouse movements",
            d: "To monitor network requests"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the difference between let and const in JavaScript?",
          answers: {
            a: "let allows reassignment, const does not",
            b: "const allows reassignment, let does not",
            c: "Both are immutable",
            d: "Both are hoisted differently"
          },
          correctAnswer: "a"
        },
        {
          question: "What is the purpose of React Fragments?",
          answers: {
            a: "To group elements without adding extra nodes",
            b: "To create reusable component templates",
            c: "To handle error boundaries",
            d: "To manage state transitions"
          },
          correctAnswer: "a"
        }
      ]
    },
    science: {
      easy: [
        {
            question: "Which planet is nearest to the sun in our solar system?",
            answers: { a: "Mercury", b: "Venus", c: "Earth", d: "Mars" },
            correctAnswer: "a"
          },
          {
            question: "What is the tiniest unit of matter?",
            answers: { a: "Atom", b: "Molecule", c: "Cell", d: "Electron" },
            correctAnswer: "a"
          },
          {
            question: "How many elements are on the periodic table?",
            answers: { a: "118", b: "92", c: "150", d: "206" },
            correctAnswer: "a"
          },
          {
            question: "What percentage of the human body is water?",
            answers: { a: "60%", b: "75%", c: "50%", d: "80%" },
            correctAnswer: "a"
          },
          {
            question: "What name is given to the force that draws objects toward Earth?",
            answers: { a: "Gravity", b: "Magnetism", c: "Friction", d: "Tension" },
            correctAnswer: "a"
          },

          {
            question: "Who discovered the law of gravitation?",
            answers: { a: "Isaac Newton", b: "Albert Einstein", c: "Galileo", d: "Nikola Tesla" },
            correctAnswer: "a"
          },

          {
            question: "What does DNA stand for?",
            answers: { a: "Deoxyribonucleic acid", b: "Dynamic Nuclear Acid", c: "Dual Nucleic Acid", d: "Digital Network Analysis" },
            correctAnswer: "a"
          },
          {
            question: "What is the hardest natural substance on Earth?",
            answers: { a: "Diamond", b: "Graphite", c: "Quartz", d: "Topaz" },
            correctAnswer: "a"
          },

          {
            question: "Where in the body are the smallest bones located?",
            answers: { a: "Ear", b: "Finger", c: "Toe", d: "Nose" },
            correctAnswer: "a"
          },
          {
            question: "What is the chemical symbol for lead?",
            answers: { a: "Pb", b: "Ld", c: "Fe", d: "Au" },
            correctAnswer: "a"
          }
        ], 
      medium: [
        {
            question: "What is the largest desert in the world?",
            answers: { a: "Sahara", b: "Antarctica", c: "Gobi", d: "Arabian" },
            correctAnswer: "b"
          },
          {
            question: "What mineral is known as 'fool's gold'?",
            answers: { a: "Pyrite", b: "Quartz", c: "Calcite", d: "Galena" },
            correctAnswer: "a"
          },
          {
            question: "What does TNT stand for?",
            answers: { a: "Trinitrotoluene", b: "Tri-nitro-toluene", c: "Tetra-nitrate", d: "Thermal Nuclear Transmitter" },
            correctAnswer: "a"
          },
          {
            question: "Which layer of Earth contains the most Olivine?",
            answers: { a: "Crust", b: "Mantle", c: "Outer Core", d: "Inner Core" },
            correctAnswer: "b"
          },
          {
            question: "What is the Mohs scale used to measure?",
            answers: { a: "Mineral hardness", b: "Earthquake intensity", c: "Tornado strength", d: "Acidity" },
            correctAnswer: "a"
          },
          {
            question: "Which gas is used to extinguish fires?",
            answers: { a: "Carbon dioxide", b: "Oxygen", c: "Hydrogen", d: "Nitrogen" },
            correctAnswer: "a"
          },
          {
            question: "What is the primary source of aluminum?",
            answers: { a: "Bauxite", b: "Hematite", c: "Galena", d: "Quartz" },
            correctAnswer: "a"
          },
          {
            question: "Which planet is called the 'Blue Planet'?",
            answers: { a: "Earth", b: "Neptune", c: "Uranus", d: "Mars" },
            correctAnswer: "a"
          },
          {
            question: "What is the largest volcano in our solar system?",
            answers: { a: "Olympus Mons", b: "Mauna Kea", c: "Mount Etna", d: "Krakatoa" },
            correctAnswer: "a"
          },
          {
            question: "What does LHC stand for?",
            answers: { a: "Large Hadron Collider", b: "Linear High Collider", c: "Lunar Helium Core", d: "Liquid Hydrogen Chamber" },
            correctAnswer: "a"
          }

      ], 
      hard: [
        {
            question: "What is the lifespan of a human red blood cell?",
            answers: { a: "120 days", b: "30 days", c: "1 year", d: "7 days" },
            correctAnswer: "a"
          },
          {
            question: "Which produces most of Earth's oxygen?",
            answers: { a: "Phytoplankton", b: "Trees", c: "Grasslands", d: "Volcanoes" },
            correctAnswer: "a"
          },
          {
            question: "What is cryophobia the fear of?",
            answers: { a: "Ice/Cold", b: "Heights", c: "Spiders", d: "Darkness" },
            correctAnswer: "a"
          },
          {
            question: "What is the rarest blood type?",
            answers: { a: "AB-", b: "O-", c: "B+", d: "A+" },
            correctAnswer: "a"
          },
          {
            question: "What element is diamond composed of?",
            answers: { a: "Carbon", b: "Silicon", c: "Oxygen", d: "Calcium" },
            correctAnswer: "a"
          },
          {
            question: "Who invented the first battery?",
            answers: { a: "Alessandro Volta", b: "Thomas Edison", c: "Nikola Tesla", d: "Michael Faraday" },
            correctAnswer: "a"
          },
          {
            question: "What does the Richter scale measure?",
            answers: { a: "Earthquake magnitude", b: "Wind speed", c: "Temperature", d: "Air pressure" },
            correctAnswer: "a"
          },
          {
            question: "Which mineral fluoresces under UV light?",
            answers: { a: "Fluorite", b: "Quartz", c: "Diamond", d: "Topaz" },
            correctAnswer: "a"
          },
          {
            question: "What is the birthstone for April?",
            answers: { a: "Diamond", b: "Ruby", c: "Emerald", d: "Sapphire" },
            correctAnswer: "a"
          },
          {
            question: "What volcanic glass forms from rapid cooling?",
            answers: { a: "Obsidian", b: "Pumice", c: "Basalt", d: "Granite" },
            correctAnswer: "a"
          }

      ] // Add 10 science hard questions
    },
    general: {
      easy: [
        {
            question: "What does BBC stand for?",
            answers: { a: "British Broadcasting Corporation", b: "Big British Company", c: "British Business Channel", d: "Broad Band Communication" },
            correctAnswer: "a"
          },
          {
            question: "What's the capital of Spain?",
            answers: { a: "Madrid", b: "Barcelona", c: "Lisbon", d: "Paris" },
            correctAnswer: "a"
          },
          {
            question: "Who wrote 'Romeo and Juliet'?",
            answers: { a: "Shakespeare", b: "Dickens", c: "Austen", d: "Twain" },
            correctAnswer: "a"
          },
          {
            question: "What is the largest ocean?",
            answers: { a: "Pacific", b: "Atlantic", c: "Indian", d: "Arctic" },
            correctAnswer: "a"
          },
          {
            question: "Who painted the Mona Lisa?",
            answers: { a: "Da Vinci", b: "Van Gogh", c: "Picasso", d: "Monet" },
            correctAnswer: "a"
          },
          {
            question: "What is the capital of Japan?",
            answers: { a: "Tokyo", b: "Kyoto", c: "Osaka", d: "Seoul" },
            correctAnswer: "a"
          },
          {
            question: "How many days in a leap year?",
            answers: { a: "366", b: "365", c: "364", d: "367" },
            correctAnswer: "a"
          },
          {
            question: "What is the national flower of Wales?",
            answers: { a: "Daffodil", b: "Rose", c: "Thistle", d: "Shamrock" },
            correctAnswer: "a"
          },
          {
            question: "Who wrote 'The Handmaid's Tale'?",
            answers: { a: "Margaret Atwood", b: "J.K. Rowling", c: "Stephen King", d: "Ernest Hemingway" },
            correctAnswer: "a"
          },
          {
            question: "What is a group of sheep called?",
            answers: { a: "Flock", b: "Herd", c: "Pack", d: "School" },
            correctAnswer: "a"
          }
      ], // Add 10 general easy questions
      medium: [
        {
            question: "Who was the first man on the moon?",
            answers: { a: "Neil Armstrong", b: "Buzz Aldrin", c: "Yuri Gagarin", d: "Alan Shepard" },
            correctAnswer: "a"
          },
          {
            question: "What is the capital of Tanzania?",
            answers: { a: "Dodoma", b: "Nairobi", c: "Kampala", d: "Dar es Salaam" },
            correctAnswer: "a"
          },
          {
            question: "Which country invented tea?",
            answers: { a: "China", b: "India", c: "Japan", d: "England" },
            correctAnswer: "a"
          },
          {
            question: "What is the longest river in the world?",
            answers: { a: "Nile", b: "Amazon", c: "Yangtze", d: "Mississippi" },
            correctAnswer: "a"
          },
          {
            question: "Who wrote 'War and Peace'?",
            answers: { a: "Tolstoy", b: "Dostoevsky", c: "Chekhov", d: "Pushkin" },
            correctAnswer: "a"
          },
          {
            question: "What is the largest organ in the human body?",
            answers: { a: "Skin", b: "Liver", c: "Heart", d: "Brain" },
            correctAnswer: "a"
          },
          {
            question: "Who wrote 'War and Peace'?",
            answers: { a: "Tolstoy", b: "Dostoevsky", c: "Chekhov", d: "Pushkin" },
            correctAnswer: "a"
          },
          {
            question: "What is the largest organ in the human body?",
            answers: { a: "Skin", b: "Liver", c: "Heart", d: "Brain" },
            correctAnswer: "a"
          },
          {
            question: "Who discovered penicillin?",
            answers: { a: "Alexander Fleming", b: "Marie Curie", c: "Louis Pasteur", d: "Jonas Salk" },
            correctAnswer: "a"
          },
          {
            question: "What is the smallest country in the world?",
            answers: { a: "Vatican City", b: "Monaco", c: "San Marino", d: "Liechtenstein" },
            correctAnswer: "a"
          }
      ], // Add 10 general medium questions
      hard: [
        {
            question: "What is Shakespeare's shortest play?",
            answers: { a: "The Comedy of Errors", b: "Macbeth", c: "Hamlet", d: "Romeo and Juliet" },
            correctAnswer: "a"
          },
          {
            question: "What is Prince William's full name?",
            answers: { a: "William Arthur Philip Louis", b: "William Henry Charles", c: "William George Alexander", d: "William Edward James" },
            correctAnswer: "a"
          },
          {
            question: "What percentage is 30% of 546?",
            answers: { a: "163.8", b: "160", c: "164", d: "165.2" },
            correctAnswer: "a"
          },
          {
            question: "Who has the most Instagram followers? (2025)",
            answers: { a: "Cristiano Ronaldo", b: "Lionel Messi", c: "Kylie Jenner", d: "Dwayne Johnson" },
            correctAnswer: "a"
          },
          {
            question: "What is Joe Biden's middle name?",
            answers: { a: "Robinette", b: "Robert", c: "Richard", d: "Ryan" },
            correctAnswer: "a"
          },
          {
            question: "How many digits are in Pi?",
            answers: { a: "Infinite", b: "1 million", c: "62.8 trillion", d: "100 billion" },
            correctAnswer: "a"
          },
          {
            question: "What can't celiacs eat?",
            answers: { a: "Gluten", b: "Lactose", c: "Sugar", d: "Protein" },
            correctAnswer: "a"
          },
          {
            question: "Where was the first Olympics held?",
            answers: { a: "Athens", b: "Rome", c: "Olympia", d: "Sparta" },
            correctAnswer: "a"
          },
          {
            question: "What is Usain Bolt's 100m record?",
            answers: { a: "9.58s", b: "9.69s", c: "9.83s", d: "10.03s" },
            correctAnswer: "a"
          },
          {
            question: "What's the smallest city in England?",
            answers: { a: "St Davids", b: "London", c: "Bath", d: "York" },
            correctAnswer: "a"
          }
      ] // Add 10 general hard questions
    }
  };
  