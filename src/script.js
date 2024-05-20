const likeButton = document.getElementById('likeButton')
    const likeIcon = document.getElementById('likeIcon')
    const likeCount = document.getElementById('likeCount')

    let likes = 1300

    likeButton.addEventListener('click', () => {
        if (!likeIcon.classList.contains('fill-current')) {
            likes++
            likeCount.textContent = `${likes} curtidas`
            likeIcon.classList.add('fill-current')
        } else {
            likes--
            likeCount.textContent = ``
            likeIcon.classList.remove('fill-current')
            
        }
    })

const imagens = document.querySelectorAll('img')
console.log("Lista de imagens:")
imagens.forEach(imagem => {
    console.log(imagem.src)
})