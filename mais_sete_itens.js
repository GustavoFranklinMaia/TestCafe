import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('intens > 7 ⚠', async t => {
        await t
        .maximizeWindow()
        .click("body > main > ul.products-list > product:nth-child(1) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(2) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(3) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(4) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(5) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(6) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(7) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(8) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(9) > li > a")
        .click("body > main > bag > a")
        .wait(1000*5)
    })