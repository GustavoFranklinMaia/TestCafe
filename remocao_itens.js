import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Remoção de itens ✔', async t => {
        await t
        .maximizeWindow()
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(3) > li > a")
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(4) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(4) > li > a")
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(21) > li > a")
        .wait(1000*2)
        .click("body > main > bag > a")
        .wait(1000*2)
        .click("body > main > bag > div > ul > li:nth-child(3) > div > button.dec-item")
        .wait(1000)
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.dec-item")
        .wait(1000)
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.dec-item")
        .wait(1000)
        .click("body > main > bag > div > ul > li:nth-child(1) > div > button.dec-item")
        .wait(1000*3)
        .click("body > main > bag > div > header > button")
        .wait(1000*3)
    })