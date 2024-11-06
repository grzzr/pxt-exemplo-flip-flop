let img1 = assets.image`imagem1`
let img2 = assets.image`imagem2`

let imagem = img1
let jogador = sprites.create(imagem)
let vezImagem1 = false

jogador.setFlag(SpriteFlag.StayInScreen,true)

controller.A.onEvent(ControllerButtonEvent.Pressed,
    function () {
        if (vezImagem1) {
            imagem = img1
            vezImagem1 = false
        } else {
            imagem = img2
            vezImagem1 = true
        }
        
        jogador.setImage(imagem)
    }
)

