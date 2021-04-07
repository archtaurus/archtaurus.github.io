function wink() {
    function closeEyes() {
        document.getElementById('title').innerText = 'i---i.cc'
    }

    function openEyes() {
        document.getElementById('title').innerText = 'io-oi.cc'
    }

    const now = new Date()
    if (now.getMilliseconds() % 2) {
        closeEyes()
        setTimeout(openEyes, 100)
        setTimeout(closeEyes, 200)
        setTimeout(openEyes, 250)
        setTimeout(closeEyes, 300)
        setTimeout(openEyes, 350)
    }
    setTimeout(wink, Math.floor(Math.random() * 1000 + 2000))
}

wink()
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
// function myFunction() {
//     var x = document.getElementById("myTopnav")
//     if (x.className === "topnav") {
//         x.className += " responsive"
//     } else {
//         x.className = "topnav"
//     }
// }

// const links = document.querySelectorAll('a')
// links.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         links.forEach((link) => link.classList.remove('active'))
//         e.target.classList.add('active')
//         console.log(e.target.classList)
//     })
// })
