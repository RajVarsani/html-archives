var char = document.getElementById('character')
var bl = document.getElementById('block')
var counter = 0
function jump() {
  if (char.classList == 'animate') {
    return
  }
  char.classList.add('animate')
  setTimeout(function () {
    char.classList.remove('animate')
  }, 300)
}
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(char).getPropertyValue('top')
  )
  let blockLeft = parseInt(window.getComputedStyle(bl).getPropertyValue('left'))
  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    bl.style.animation = 'none'
    alert('Game Over. score: ' + Math.floor(counter / 100))
    counter = 0
    bl.style.animation = 'block 1s infinite linear'
  } else {
    counter++
    document.getElementById('scoreSpan').innerHTML = Math.floor(counter / 100)
  }
}, 10)
