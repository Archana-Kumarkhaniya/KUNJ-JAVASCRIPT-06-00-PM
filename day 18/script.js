const motivationalQuotes = [
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "Push yourself, because no one else is going to do it for you. – Unknown",
    "Great things never come from comfort zones. – Unknown",
    "Dream it. Wish it. Do it. – Unknown",
    "Success doesn’t come from what you do occasionally. It comes from what you do consistently. – Marie Forleo",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Don’t stop when you’re tired. Stop when you’re done. – David Goggins",
    "The secret of getting ahead is getting started. – Mark Twain",
    "Work hard in silence. Let your success be your noise. – Frank Ocean",
    "Doubt kills more dreams than failure ever will. – Suzy Kassem",
    "Your only limit is your mind. – Unknown",
    "Act as if what you do makes a difference. It does. – William James",
    "If you’re going through hell, keep going. – Winston Churchill",  
    "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",
    "The way to get started is to quit talking and begin doing. – Walt Disney",
    "I am not a product of my circumstances. I am a product of my decisions. – Stephen R. Covey",
    "Start where you are. Use what you have. Do what you can. – Arthur Ashe",
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Discipline is doing what needs to be done, even if you don’t want to do it. – Unknown",
    "It always seems impossible until it’s done. – Nelson Mandela",
    "The harder you work for something, the greater you'll feel when you achieve it. – Unknown",
    "The best way to predict the future is to create it. – Peter Drucker",
    "Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs",
    "Failure will never overtake me if my determination to succeed is strong enough. – Og Mandino",
    "Be so good they can’t ignore you. – Steve Martin",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Don’t limit your challenges. Challenge your limits. – Unknown",
    "Turn your wounds into wisdom. – Oprah Winfrey",
    "Success is what comes after you stop making excuses. – Luis Galarza",
    "If you want to achieve greatness stop asking for permission. – Unknown",
    "Everything you’ve ever wanted is on the other side of fear. – George Addair",
    "Small progress is still progress. – Unknown",
    "Energy and persistence conquer all things. – Benjamin Franklin",
    "You miss 100% of the shots you don’t take. – Wayne Gretzky",
    "Make each day your masterpiece. – John Wooden",
    "One day or day one. You decide. – Unknown",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Fall seven times, stand up eight. – Japanese Proverb",
    "Nothing will work unless you do. – Maya Angelou",
    "There is no substitute for hard work. – Thomas Edison",
    "Don’t let yesterday take up too much of today. – Will Rogers",
    "Keep your eyes on the stars, and your feet on the ground. – Theodore Roosevelt",
    "A year from now you may wish you had started today. – Karen Lamb",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett"
  ];

  function change(){
  let con = document.querySelector("h1")
  let abc =  motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  // console.log(abc);

  con.textContent = abc
  }
  function changecolor(){
    let color = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f']
    let hax = ""
    let h = document.getElementById("h")
    for(i = 1; i<=6; i++){
    hax += color[Math.floor(Math.random() * color.length)]
    }
    console.log(hax);
    
    h.style.color = `#${hax}`
    
  }
  
  function start(){
    let bg = document.getElementById("bg")

    let hexval = ""      
    let arr = ['a','b','c','d','e','f',0,1,2,3,4,5,6,7,8,9]
    for(let i = 1; i <=6 ; i++){
     hexval += arr[Math.floor(Math.random() * arr.length )]       
    }
    console.log(hexval);    
    bg.style.backgroundColor = `#${hexval}`    
    }
