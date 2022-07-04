import { Selector } from 'testcafe'
fixture `Barra de buscas`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Pesquisa por números sequenciados ⚠', async t => {
        await t
        .maximizeWindow()
        .typeText("body > div > div > input", "88")
        .wait(1000*4)

    })