import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Arredondamento ⚠', async t => {
        await t
        .maximizeWindow()
        .typeText("body > div > div > input", "Caesar")
        .wait(1000*2)
        .click("body > main > ul.products-list > product > li > a")
        .wait(1000*2)
        .click("body > main > bag > a")
        .wait(1000*2)
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .wait(1000*3)
    })