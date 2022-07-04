import { Selector } from 'testcafe'
fixture `Barra de Buscas`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Pesquisa por preço ✔', async t => {
        await t
        .maximizeWindow()
        .typeText("body > div > div > input", "5.5")
        .wait(1000*4)

    })