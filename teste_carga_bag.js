import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Teste de carga ⚠', async t => {
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
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(10) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(11) > li > a")
        .wait(1000)
        .click("body > main > ul.products-list > product:nth-child(12) > li > a")
        //*Bolsa de compras
        .click("body > main > bag > a")
        .wait(1000*5)
        .click("body > main > bag > div > button")
        .wait(1000*3)
        .click("body > main > modal > div > div > button")
        .wait(1000*4)
    })