import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Adição de itens ✔', async t => {
        await t
        .maximizeWindow()
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(3) > li > a")
        .wait(1000*3)
        .click("body > main > ul.products-list > product:nth-child(1) > li > a")
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(21) > li > a")
        .click("body > main > bag > a")
        .wait(1000*2)
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .wait(1000*3)
    })