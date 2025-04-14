describe('Проверка покупки нового аватара', function () {                
    it('e2e тест на покупку нового аватара тренера', function () {  
         cy.visit('https://pokemonbattle.ru/');                          // открываем сайт 
         cy.get('input[id="k_email"]').type('USER_LOGIN');                   // находим кнопку логин, вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');               //  находим кнопку пароль, вводим пароль
         cy.get('button[type="submit"]').click();                // нажимаем кнопку Подтвердить
         cy.wait(3000); // ждем ответ
         cy.get('.header_card_trainer_id_num').click();            // нажимаем в шапке на аватар тренера
         cy.wait(3000); // ждем ответ
         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.available > button').first().click();   // нажимаем Купить у первого доступного аватара
         cy.get('.card_number').type('4620869113632996');                     // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('0328');                           // вводим срок действия карты
         cy.get('.card_name').type('NO_NAME');                           // вводим имя владельца карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();     // нажимаем кнопку Оплатить
         cy.get('.threeds_number').type('56456');                            // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();   // нажимаем кнопку Оплатить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения об успешной покупке
     });
 });
