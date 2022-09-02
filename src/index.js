// console.log(data)

function card(){
    
//     <li class="card">
//   <h2 class="card--title">Bulbasaur</h2>
//   <img
//     width="256"
//     class="card--img"
//     src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
//   />
//   <ul class="card--text">
//     <li>HP: 45</li>
//     <li>ATTACK: 49</li>
//     <li>DEFENSE: 49</li>
//     <li>SPECIAL-ATTACK: 65</li>
//     <li>SPECIAL-DEFENSE: 65</li>
//     <li>SPEED: 45</li>
//   </ul>
// </li>

for(let card of data){
let li=document.createElement('li')
li.className='card'

let cardTitle =document.createElement('h2')
cardTitle.className='card--title'
cardTitle.textContent=card.name

let img=document.createElement('img')
// @ts-ignore
img.width=256
img.className='card--img'
img.src=card.sprites.other['official-artwork'].front_default


let ulCardText=document.createElement('ul')
ulCardText.className='card--text'

let hp=document.createElement('li')
hp.textContent=`HP:${card.stats[0].base_stat}`

let attack=document.createElement('li')
attack.textContent=`ATTACK:${card.stats[1].base_stat}`

let deffense =document.createElement('li')
deffense.textContent=`DEFFENSE:${card.stats[2].base_stat}`

let specialAttack=document.createElement('li')
specialAttack.textContent=`SPECIAL-ATTACK:${card.stats[3].base_stat}`

let specialDefense=document.createElement('li')
specialDefense.textContent=`SPECIAL-DEFENSE:${card.stats[4].base_stat}`

let speed=document.createElement('li')
speed.textContent=`SPEED:${card.stats[5].base_stat}`

ulCardText.append(hp,attack,deffense,specialAttack,specialDefense,speed)
li.append(cardTitle,img,ulCardText)
let cards=document.querySelector('.cards')
cards.append(li)
}
}
card()