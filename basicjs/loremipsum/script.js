const paragraphs = [
    "Life is a journey filled with a myriad of experiences, each contributing to our growth and understanding of the world around us. From the quiet moments of reflection to the exhilarating highs of achievement, every step shapes who we are. It's in the simple pleasures, like a shared laugh with a friend or the warmth of the sun on our skin, that we often find the deepest sense of fulfillment.",

    "In a quiet village nestled between rolling hills, the mornings were serene and the air was crisp. Birds chirped melodiously, and the village awoke to the gentle sounds of nature. The cobblestone streets, lined with charming cottages, were bathed in the soft glow of the early morning sun. As the villagers went about their daily routines, a sense of peace and contentment pervaded the atmosphere, making each day a new opportunity to appreciate the simple joys of life.",

    "The rapid advancement of technology over the past few decades has fundamentally altered the way we live, work, and communicate. Innovations in fields such as artificial intelligence, biotechnology, and renewable energy are shaping our future in unprecedented ways. However, these advancements also bring challenges that society must address to ensure a harmonious and equitable future. The digital divide, privacy concerns, and ethical dilemmas are just a few of the issues that need careful consideration as we navigate this new technological landscape. By fostering inclusive and responsible innovation, we can harness the potential of these technologies to create a better world for all.",

    "The old oak tree stood at the center of the meadow, its gnarled branches stretching out like a protective canopy. It had witnessed countless seasons change and stood as a silent guardian of the memories etched into its bark. Children from the nearby village often played around its roots, their laughter echoing through the air. The tree had become a symbol of resilience and continuity, a steadfast presence in the ever-changing landscape. As the years passed, generations of families gathered under its shade, sharing stories and creating new memories that intertwined with the tree's long and storied history.",

    "As the sun dipped below the horizon, the sky erupted into a symphony of colors—vibrant oranges, soft pinks, and deep purples. The world seemed to hold its breath, captivated by the fleeting beauty of the sunset. Waves gently lapped against the shore, whispering secrets of the sea to those who paused to listen. It was a moment of pure tranquility, a reminder of the simple yet profound wonders of nature. As the last light faded and stars began to twinkle in the night sky, the quiet hum of the evening wrapped the world in a blanket of peace, inviting reflection and contemplation.",

    "The bustling city was alive with energy, its streets teeming with people from all walks of life. Skyscrapers reached towards the heavens, their glass facades reflecting the sunlight in dazzling patterns. Amidst the chaos, a small café offered a haven of calm. The aroma of freshly brewed coffee mingled with the sound of clinking cups and quiet conversations. It was a place where time seemed to slow down, allowing patrons to savor their moments of respite. Here, in this urban oasis, strangers became friends over shared stories and laughter, finding common ground in the midst of the city's relentless pace.",

    "In the heart of the ancient forest, a hidden glade lay bathed in dappled sunlight. Tall trees, their trunks wrapped in ivy, stood like silent sentinels guarding the secrets of the woods. The air was filled with the scent of pine and earth, and the gentle rustling of leaves provided a soothing soundtrack. Here, nature's beauty was on full display, a testament to the timeless elegance of the natural world. Wildlife thrived in this untouched sanctuary, where deer grazed peacefully and birds sang their melodic tunes, creating a harmonious symphony that celebrated the essence of life.",

    "Traveling through the mountainous region, one could not help but be awed by the rugged beauty of the landscape. Jagged peaks pierced the sky, their snow-capped summits glistening in the sunlight. Valleys below were lush with greenery, dotted with wildflowers that added splashes of color to the scene. Streams cascaded down rocky slopes, their clear waters sparkling like liquid crystals. It was a place of breathtaking contrasts, where the raw power of nature met its delicate grace. Each vista offered a new perspective, revealing the grandeur and majesty of the natural world, inspiring a deep sense of reverence and wonder.",

    "In the dimly lit library, rows upon rows of ancient books lined the shelves, their spines bearing the marks of time. Dust motes danced in the beams of sunlight that filtered through the tall windows. The air was thick with the scent of aged paper and leather, evoking a sense of history and knowledge. It was a sanctuary for those who sought the wisdom of the past, a place where the written word held the power to transport readers to distant lands and forgotten eras. Each book was a portal to another world, inviting readers to embark on journeys of discovery and adventure, where the imagination could roam free.",

    "Amidst the frenetic pace of modern life, moments of stillness and reflection have become increasingly rare. Yet, it is in these quiet interludes that we often find clarity and a renewed sense of purpose. Whether it's watching the sunrise, taking a leisurely walk in nature, or simply sitting in silence, these pauses allow us to reconnect with our inner selves. They remind us of the importance of balance and the need to nurture our mental and emotional well-being in an ever-evolving world. By embracing these moments of tranquility, we can cultivate a deeper appreciation for the present and a greater resilience for the challenges that lie ahead."
];

function generate() {
    let paraList = [];
    const lineBreak = '<br>';
    const numPara = document.getElementById('numPara').value;
    let para = document.getElementById('paragraphs');
    for(let i = 0; i < numPara;i++) {
        const rand = Math.floor(Math.random()*paragraphs.length);
        paraList.push(paragraphs[rand]);
    }
    console.log(paraList);
    let final = paraList.join(`<br><br>`);
    para.innerHTML = `<p>${final}</p>`;
}
