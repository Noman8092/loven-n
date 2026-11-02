/* ===== EDIT EVERYTHING HERE. Change text, dates, captions and file paths. ===== */
const SITE = {
    name: "Noorista",
    music: { src: "biwi.mpeg", title: "Hamara Gaana", artist: "Artist ka naam likho" }, // apni/licensed file; "" = no music
    voice: { src: "", title: "Listen to Something From My Heart" }, // e.g. "voice.mp3" (sirf apni recording)
    letter: `Meri Noorista,

Pata nahi shabdon mein kaise bataun ki tum kitni khaas ho. Bas isliye internet ka ye chhota sa kona sirf tumhare liye bana diya.

Tumhari ek muskaan ke peeche hazaar wajah chhupi hain, aur har wajah mujhe khush kar deti hai.

Tum khaas ho, bahut khaas. Bas ek baat kabhi mat bhoolna: tum jaisi ho, waisi hi sabse pyaari ho.

Hamesha tumhara,
Noman ❤️`,
    reasons: [
        "Tumhari muskaan mere poore din ka mausam badal deti hai.",
        "Tumhari hansi sunkar lagta hai duniya thodi aur narm ho gayi.",
        "Tum chhoti baat mein bhi dil laga deti ho, aur wahi tumhari khoobsurti hai.",
        "Tumhare saath khamoshi bhi sukoon lagti hai.",
        "Tum jaisi ho waisi hi ho, koi dikhawa nahi. Wahi sabse sachcha lagta hai.",
        "Tumhari aankhon mein ek apnapan hai jo bina bole sab keh deta hai.",
        "Tum mujhe behtar insaan banne ki wajah deti ho.",
        "Tumhari fikar mein pyaar chhupa hota hai, chahe tum jataao ya nahi.",
        "Tumhare saath mujhe bahut kuch kehne ki zaroorat nahi padti, tum samajh jaati ho.",
        "Tumhari himmat, jo tum kabhi khud ko nahi dikhne deti.",
        "Tumhara dil itna saaf hai ki main bhi thoda saaf ho jaata hoon.",
        "Tumhare baat karne ka andaaz mujhe kabhi theek se bhoolne nahi deta.",
        "Tum thaki hoti ho tab bhi doosron ke liye muskura deti ho.",
        "Tumhari masoomiyat, jo is duniya mein bahut kam bachi hai.",
        "Tumhare saath mein ghar jaisa mehsoos hota hai, chahe hum kahin bhi hon.",
        "Tum mere sabse mushkil din ko bhi halka kar deti ho.",
        "Tumhari chhoti chhoti zid, jinpar mujhe pyaar aata hai.",
        "Tumhare sapne, jinhe main poore hote dekhna chahta hoon.",
        "Tum meri dua ban gayi ho, jo maine kabhi maangi bhi nahi thi.",
        "Tum jab khush hoti ho toh mera dil bhi khush ho jaata hai.",
        "Tumhari ek meethi si awaaz mere liye sabse pyaari dhun hai.",
        "Tum mujhe yaqeen dilati ho ki achhi cheezein sach mein hoti hain.",
        "Tum khud ko kam samajhti ho, jabki tum bahut zyada ho.",
        "Tumhare saath bitaya har pal mere liye khaas ban jaata hai.",
        "Sabse badi wajah: tum Noorista ho, aur mere liye wahi kaafi hai."
    ],
    reasonsFinal: "Pachees wajah bhi kam hain. Agar main har din ek nayi wajah likhta, toh bhi shayad kabhi khatam na hoti. ❤️",
    timeline: [
        { date: "Woh pehla din", icon: "✨", title: "Jab tum meri zindagi mein aayi", text: "Kuch log bina shor kiye aate hain aur sab kuch badal dete hain. Tum bhi waise hi aayi, aur meri duniya mein roshni ho gayi.", photo: "" },
        { date: "Shuruaati baatein", icon: "💬", title: "Jab baatein shuru huin", text: "Pata hi nahi chala kab chhoti baatein meri sabse pasandida aadat ban gayi. Tumse baat karna din ka sabse sukoon bhara hissa ban gaya.", photo: "" },
        { date: "Dheere dheere", icon: "🌹", title: "Jab tum khaas lagne lagi", text: "Ek din samajh aaya ki tum sirf ek naam nahi ho, tum ek ehsaas ho. Wahi din mere liye sab kuch alag kar gaya.", photo: "" },
        { date: "Beete hue pal", icon: "📸", title: "Woh chhoti pyaari yaadein", text: "Kuch pal photo mein nahi aate, bas dil mein reh jaate hain. Tumhari muskaan, tumhari baatein, sab wahin hain.", photo: "" },
        { date: "Jo yaad rahega", icon: "💫", title: "Woh pal jo main kabhi nahi bhoolunga", text: "Har rishte mein kuch pal aise hote hain jo umar bhar saath chalte hain. Tumhare saath ke aise bahut pal hain mere paas.", photo: "" },
        { date: "Aaj aur kal", icon: "💗", title: "Aaj, aur hamara aane wala kal", text: "Aaj tum mere paas ho, aur main chahta hoon ki aane wala har kal bhi tumhare naam ho. Jo bhi aage aaye, saath mein dekhna chahta hoon.", photo: "" }
    ],
    photos: [ // cap = caption, date = optional
        { src: "chashma1.jpg", cap: "Caption likho", date: "" }, { src: "burka1.jpg", cap: "Caption likho", date: "" },
        { src: "flower1.jpg", cap: "Caption likho", date: "" }, { src: "turban1.jpg", cap: "Caption likho", date: "" },
        { src: "facecover1.jpg", cap: "Caption likho", date: "" }, { src: "beauty1.jpg", cap: "Caption likho", date: "" },
        { src: "pink1.jpg", cap: "Caption likho", date: "" }
    ],
    openWhen: [
        { icon: "🥺", title: "Jab meri yaad aaye", text: "Meri Noorista,\n\nAgar ye khat khol rahi ho, toh matlab meri yaad aa rahi hai. Main bhi bilkul waise hi tumhe yaad kar raha hoon.\n\nDoori kabhi kabhi bahut bhaari lagti hai, par dil se main hamesha tumhare paas hoon. Aankhein band karo, ek lambi saans lo aur sochna ki main tumhare saath hoon.\n\nJaldi baat karenge. Tab tak mera pyaar tumhare saath hai.\n\nHamesha tumhara,\nNoman ❤️" },
        { icon: "🌧️", title: "Jab udaas ho", text: "Meri Noorista,\n\nPehle ek baat: udaas hona kamzori nahi hai. Tum jitna sambhalti ho, utna bahut kam log sambhaal paate hain.\n\nAaj ka din bhaari ho sakta hai, par ye din hamesha nahi rahega. Aur jab tak ye gujar nahi jaata, main tumhare saath hoon.\n\nRo lena agar dil kare. Phir muskura dena, kyunki tum us muskaan ke saath sabse pyaari lagti ho.\n\nTum akeli nahi ho.\n\nTumhara,\nNoman ❤️" },
        { icon: "😊", title: "Jab muskaan chahiye", text: "Meri Noorista,\n\nAbhi ek chhoti si muskaan do, bas thodi si. 😊\n\nYaad rakhna, tumhari muskaan ki wajah se kisi ka poora din achha ho jaata hai, aur woh kisi main hoon.\n\nAaj sheesha dekho aur khud se kaho: 'Main bahut pyaari hoon.' Kyunki ye sach hai.\n\nChalo, ab muskura do.\n\nTumhara,\nNoman ❤️" },
        { icon: "🌙", title: "Jab akela lage", text: "Meri Noorista,\n\nJab raat ya din bahut khamosh lage aur dil mein akelapan utre, tab ye khat padhna.\n\nTum jitni door ho ya paas, tumhare liye ek insaan hamesha soch raha hai. Tumhari koi fikar kare, tumhe koi yaad kare, ye sach hai.\n\nAkelapan ek ehsaas hai, sach nahi. Sach ye hai ki tum pyaari ho aur kisi ke liye bahut zaroori ho.\n\nMain yahin hoon.\n\nTumhara,\nNoman ❤️" },
        { icon: "💞", title: "Jab pyaar chahiye", text: "Meri Noorista,\n\nPyaar chahiye? Toh ye lo: ek bahut bada, bahut garm, bahut sachcha pyaar. 🤍\n\nTum us pyaar ke qaabil ho jo shor na kare, bas hamesha rahe. Main wahi dene ki koshish karta hoon.\n\nTum meri zindagi ki sabse khoobsurat baat ho. Ye baat kabhi mat bhoolna.\n\nBahut sara pyaar,\nNoman ❤️" },
        { icon: "😴", title: "Jab neend na aaye", text: "Meri Noorista,\n\nSab kuch bhool jao, phone ek taraf rakh do aur ek gehri saans lo.\n\nAaj ka din jaisa bhi tha, khatam ho gaya. Kal ek nayi, halki subah hogi. Tum bahut mehnat karti ho, ab thoda aaram karo.\n\nMain dua karta hoon ki tumhare sapne meethe hon aur neend sukoon wali.\n\nShubh raat, meri jaan. 🌙\n\nTumhara,\nNoman ❤️" },
        { icon: "🔥", title: "Jab himmat chahiye", text: "Meri Noorista,\n\nMujhe tumpar poora bharosa hai. Tum jitna sochti ho, usse kaheen zyada mazboot ho.\n\nJab raasta mushkil lage, yaad karna ki tum pehle bhi kai mushkilon se guzri ho aur khud ko sambhala hai. Tumhare andar ek khamosh taaqat hai.\n\nDarr lage toh bhi ek kadam badhao. Main tumhare peeche nahi, tumhare saath chal raha hoon.\n\nTum kar sakti ho.\n\nTumhara,\nNoman ❤️" },
        { icon: "📖", title: "Jab humein yaad karna ho", text: "Meri Noorista,\n\nKabhi kabhi purani yaadein mann ko bahut sukoon deti hain. Hamare chhote chhote pal, baatein aur hansi, sab bahut keemti hain.\n\nMain chahta hoon ki hum aise hi nayi yaadein banate rahein, itni ki ek din palatkar dekhein toh muskura dein.\n\nSabse pyaari yaad abhi bhi banna baaki hai. Aur main use tumhare saath banana chahta hoon.\n\nTumhara,\nNoman ❤️" }
    ],
    promises: [
        "Main hamesha tumhari izzat karunga, har haal mein.",
        "Main tumhari baat dhyan se sununga, sirf jawab dene ke liye nahi, samajhne ke liye.",
        "Main tumhare sapnon ka saath dunga, aur unhe chhota kabhi nahi samjhunga.",
        "Main tumhe muskurane ki wajah dene ki koshish karta rahunga.",
        "Main hamare har pal ki kadar karunga, bade ho ya chhote."
    ],
    promiseMain: "Main perfect nahi hoon, par ye waada hai ki tumhari har acchai ki kadar karunga, aur tumhe kabhi akela mehsoos nahi hone dunga.",
    final: {
        title: "One Last Thing, Noorista ❤️",
        message: "Noorista, tum meri zindagi ka sabse khoobsurat hissa ho. Umeed hai ye chhoti si website tumhe yaad dilaye ki tum kitni khaas ho, aur kitni pyaari.",
        button: "Ek aakhri cheez 💗",
        revealTitle: "Tumne mera din bana diya! 💖",
        revealText: "Ye chhoti si duniya hamesha tumhari hai, aur main bhi.",
        closing: "With Love, Always."
    }
};