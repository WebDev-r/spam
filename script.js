fetch("https://drive.google.com/file/d/1aH2EY7076cMAlS8l-AyRI47AlofN3J_b/view?usp=sharing")
.then((respond)=>{
    return respond.text()
}).then((data)=>{
    console.log(data)
    }
)