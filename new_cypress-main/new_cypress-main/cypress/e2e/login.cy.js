describe('Проверка авторизации', function () {

  it('Верный логин и верный пароль', function () {
       cy.visit('https://login.qa.studio'); 
       cy.get('#mail').type('german@dolnikov.ru');
       cy.get('#pass').type('iLoveqastudio1'); 
       cy.get('#loginButton').click(); 
       cy.get('#messageHeader').should('be.visible'); 
       cy.get('#messageHeader').contains('Авторизация прошла успешно'); 
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 
  })

   it('Восстановление пароля', function () {
    cy.visit('https://login.qa.studio'); 
    cy.get('#forgotEmailButton').click(); 
    cy.get('#mailForgot').type('german@dolnikov.ru'); // найти кнопку _e-mail, ввести почту
    cy.get('#restoreEmailButton').click(); // найти кнопку отправить код, нажать на нее
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяем, что видим сообщение
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик, он виден
})
   it('Верный логин и неверный пароль', function () {
       cy.visit('https://login.qa.studio'); // открыть сайт
       cy.get('#mail').type('german@dolnikov.ru'); // найт кнопку логин, ввести верный логин
       cy.get('#pass').type('iLoveqastudio12'); // найти внопку пароль, ввести неверный пароль
       cy.get('#loginButton').click(); // найти кнопку войти, нажать на нее
       cy.get('#messageHeader').should('be.visible'); // проверяем, что видим текст
       cy.get('#messageHeader').contains('Такого логина или пароля нет'); // после авторизации видим текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик, он виден
   })
   it('Неверный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio'); // открыть сайт
    cy.get('#mail').type('germa@dolnikov.ru'); // найти кнопку логин, ввести неверный логин
    cy.get('#pass').type('iLoveqastudio1'); // найти кнопку пароль, ввести верный пароль
    cy.get('#loginButton').click(); // найти внопку войти, нажать на нее
    cy.get('#messageHeader').should('be.visible'); // проверяем, что видим текст
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяем, что после авт-ции видим текст
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик, он виден
})
   it('Валидация на наличие @', function () {
       cy.visit('https://login.qa.studio'); // открыть сайт
       cy.get('#mail').type('germandolnikov.ru'); // найти кнопку логин, ввести логин без @
       cy.get('#pass').type('iLoveqastudio1'); // найти кнопку пароль, ввести верный пароль
       cy.get('#loginButton').click(); // найти внопку войти, нажать на нее 
       cy.get('#messageHeader').should('be.visible'); // проверяем, что видим текст
       cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //проверяем, что после авт-ции видим текст
       cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик, он виден
    })
    it('приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio'); // открыть сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // найти кнопку логин, ввести логин буквами с разным регистром
        cy.get('#pass').type('iLoveqastudio1'); // найти кнопку пароль, ввести верный пароль
        cy.get('#loginButton').click(); // найти внопку войти, нажать на нее
        cy.get('#messageHeader').should('be.visible'); // проверяем, что видим текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяем, что после авт-ции видим текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть кнопка крестик, он виден
    }) 
})
