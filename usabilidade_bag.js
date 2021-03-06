import { Selector } from 'testcafe'
fixture `Bolsa de compras`
    .page `https://marcelobritowd.github.io/im-hungry/`

    test('Usabilidade ⚠', async t => {
        await t
        .maximizeWindow()
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(3) > li > a")
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(2) > li > a")
        .wait(1000*2)
        .click("body > main > bag > a")
        .wait(1000*2)
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .click("body > main > bag > div > ul > li > div > button.inc-item")
        .wait(1000*2)
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .click("body > main > bag > div > ul > li:nth-child(2) > div > button.inc-item")
        .wait(1000*4)
        .click("body > main > bag > div > button")
        .wait(1000*3)
        .click("body > main > modal > div > div > button")
        .wait(1000*4)
        .click("body > main > ul.products-list > product:nth-child(3) > li > a")
        .wait(1000*2)
        .click("body > main > ul.products-list > product:nth-child(2) > li > a")
        .wait(1000*2)
        .click("body > main > bag > a")
        .wait(1000*5)
    })