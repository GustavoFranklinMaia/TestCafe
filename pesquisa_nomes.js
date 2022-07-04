import { Selector } from 'testcafe'
fixture `Barra de buscas`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Pesquisa por nomes ✔', async t => {
        await t
        .maximizeWindow()
        .typeText("body > div > div > input", "BBQ Chicken")
        .wait(1000*4)

    })