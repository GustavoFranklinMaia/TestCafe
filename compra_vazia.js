import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Compra vazia ⚠', async t => {
        await t
        .maximizeWindow()
        .wait(1000*2)
        .click("body > main > bag > a")
        .wait(1000*2)
        .click("body > main > bag > div > button")
        .wait(1000*4)
    })