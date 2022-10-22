import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    ru: {
        translation: {
            "home_page": "Главная",
            "find_jobs":"Свободные места",
            "find_worker":"Ищущие работу",
            "sign_up":"Регистрация",
            "add_job":"Добавить заявка",
            "sign_in":"Войти",
            "ru":"Русский",
            "tm":"Turkmen",
            "home_title":"Найти работу, Нанять креативщиков",
            "home_desc":"Каждый месяц более 3 миллионов соискателей обращаются к веб-сайту в поисках работы, ежедневно подавая более 140 000 заявок.",
            "start":"Начать",
            "sponsors":"Нам доверяют",
            "job_name":"Название вакансии",
            "location":"Расположение",
            "search":"Поиск",
            "search_by_category":"Поиск по категориям",
            "see_all":"Показать все",
            "see_more":"Заполните информацию",
            "today_jobs":"Вакансии сегодня",
            "more":"Подробнее",
            "left_minute":" минуты назад",
            "app_title":"Wakant - Скачай мобильное проложение",
            "app_desc":"Полнофункциональный портал вакансий " +
                "также с помощью мобильного телефона " +
                "Вы можете Поиск работы теперь очень прост с нашим мобильным приложением! Вы можете отправить свое резюме, найдя работу, которую вы ищете. Мобильное приложение для вакансий и соискателей предлагает уникальный опыт для своих пользователей.",
            "immediately":"Срочные работы",
            "state_1_title":"Сообщите, что ищете работу",
            "state_1_desc":"Вы можете отправить свою ссылку для присоединения к работе, выбрав подходящую вам в уведомлениях.",
            "state_2_title":"Заполните свое резюме",
            "state_2_desc":"Если вы укажете подробную информацию о себе и своей профессии, работодателю будет проще вас выбрать.",
            "state_3_title":"Работа",
            "state_3_desc":"С легкостью найдите работу, которую вы ищете, и подайте заявку на работу по вашему выбору",
            "user_comment":"См. некоторые слова",
            "user_comment_desc":"Тысячи сотрудников получают идеальную работу и вернитесь к нам!",
            "contact":"Связаться",
            "fullname":"Введите ваше имя",
            "company":"Компания (необязательно)",
            "email":"Ваш электронной почты",
            "phone_number":"Номер телефона",
            "your_message":"Расскажите нам о себе",
            "our_address":"Адрес местоположения",
            "our_address_value":" Наш адрес: г. Ашхабад, Копетдагский этрап, 62 Парахат 1/1",
            "our_email":"Электронная почта",
            "our_email_value":"wakant_info@gmail.com",
            "number":"Контакты",
            "our_numbers":"+993 12 754673,+993 64 086153",
            "send":"Отправить",
            "docs":"Нормативные документы",
            "terms_of_use":"Ассоциация пользователей",
            "privacy_policy":"Кнопка входа",
            "terms_of_comment":"Соглашение о комментариях",
            "all_rights":"Copyright © 2022 Все права защищены",
            "mobile_apps":"Мобильное проложение",
            "lorem ipsum":"Лорем ипсум долор сит амет, ин еос мелиус бонорум молестиае, еос ан деленити цонституам. Ад хомеро сцрипторем усу. Ет яуем солута вулпутате еам, вих ад пробатус партиендо ассуеверит. Меи ат сапиентем елояуентиам.",

            //  JOBS PAGE
            'jobb':'вакансии',
            'av_jobs':'доступны сейчас',
            'per_filter':'Расширенный фильтр',
            'page':'Страницы',
            'all':'Все',
            'category':'Категории',
            'job_price':'Диапазон заработной платы',
            'job_gender':'Ищете работу',
            'job_firm':'Агентства',
            'submit_job':'Применить сейчас',
            'filter':'Фильтр',
            'sort':'организовать',
            'man_women':'Мужской / женский',
            'man':'Мужской',
            'women':'Женщина',
            'price_asc':'Цена по возрастанию',
            'price_desc':'Цена по убыванию',
            'newest_first':'Новички вперед',
            'oldest_first':'Сначала старые',
            //  JOBS PAGE

            // View job
            'one_bt':'Разметка',
            'about_job':'О работе',
            'title_category':'Категория:',
            'title_job_req':'Ищущие работу:',
            'title_submit':'Возраст:',
            'title_time':'Графика:',
            'title_number':'Номер телефона:',
            'title_address':'Адрес:',
            'title_email':'Электронной почты:',
            'similar':'Похожие посты',
            'owner':'Работодатель',
            'phone':'Телефон:'
            // View job
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "ru", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;