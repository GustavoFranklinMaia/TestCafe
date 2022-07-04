import { Selector } from 'testcafe'
fixture `Filtra itens`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Filtra itens por categoria ✔', async t => {
        await t
        .maximizeWindow()
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(2) > a > img")
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(3) > a > img")
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(4) > a > img")
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(5) > a > img")
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(6) > a > img")
        .wait(1000*3)
        .click("body > main > ul.list-categories > li:nth-child(2) > a > img")
        .wait(1000*3)
    })