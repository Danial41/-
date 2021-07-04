!function () {
    var site = {
        countrys: ["ru", "kz", "ua"],

        ru_man_names: ["Никита", "Иван", "Дмитрий", "Денис", "Ринат", "Антон", "Алексей", "Павел", "Валерий", "Семен", "Кирилл", "Матвей", "Евгений", "Богдан", "Платон", "Савелий", "Тимур", "Юрий", "Владимир", "Артём", "Михаил", "Герман", "Альберт", "Руслан", "Виктор", "Мирон", "Рустам", "Эдуард", "Максим", "Марат", "Петр", "Влад", "Глеб", "Николай", "Игорь", "Георгий", "Роман", "Степан", "Станислав", "Андрей", "Александр", "Егор", "Артемий", "Родион", "Олег", "Данила", "Борис", "Марк", "Василий", "Ярослав", "Давид", "Артур", "Даниил", "Роберт", "Данил", "Илья", "Константин", "Анатолий", "Вадим", "Эмиль", "Лев", "Вячеслав", "Григорий", "Сергей"],
        ru_man_lastname: ["Смирнов", "Иванов", "Кузнецов", "Попов", "Соколов", "Лебедев", "Козлов", "Новиков", "Морозов", "Петров", "Волков", "Соловьев", "Васильев", "Зайцев", "Павлов", "Семенов", "Голубев", "Богданов", "Воробьев", "Федоров", "Беляев", "Белов", "Комаров", "Орлов", "Киселев", "Макаров", "Ковалев", "Ильин", "Гусев", "Титов", "Кузьмин", "Кудрявцев", "Баранов", "Куликов", "Алексеев", "Степанов", "Яковлев", "Сорокин", "Сергеев", "Романов", "Захаров", "Борисов", "Королев", "Пономарев", "Лазарев", "Медведев", "Ершов", "Никитин", "Соболев", "Рябов", "Поляков", "Цветков", "Данилов", "Жуков", "Журавлев", "Крылов", "Сидоров", "Белоусов", "Федотов", "Дорофеев", "Егоров", "Матвеев", "Бобров", "Калинин", "Анисимов", "Петухов", "Антонов", "Тимофеев", "Никифоров", "Веселов", "Большаков", "Суханов", "Миронов", "Коновалов", "Шестаков", "Казаков", "Ефимов", "Громов", "Фомин", "Давыдов", "Мельников", "Щербаков", "Блинов", "Колесников", "Власов", "Гаврилов", "Котов", "Горбунов", "Кудряшов", "Быков", "Зуев", "Третьяков", "Рыбаков", "Суворов", "Абрамов", "Воронов", "Мухин", "Архипов", "Трофимов", "Мартынов", "Емельянов", "Горшков", "Чернов", "Селезнев", "Панфилов", "Михеев", "Галкин", "Назаров", "Лобанов", "Лукин", "Беляков", "Потапов", "Некрасов", "Хохлов", "Жданов", "Наумов", "Воронцов", "Ермаков", "Дроздов", "Логинов", "Сафонов", "Горбачев", "Орехов", "Ефремов", "Исаев", "Евдокимов", "Калашников", "Кабанов", "Носков", "Юдин", "Кулагин", "Лапин", "Прохоров", "Нестеров", "Муравьев", "Зимин", "Пахомов", "Шубин", "Игнатов", "Филатов", "Крюков", "Рогов", "Кулаков", "Терентьев", "Молчанов", "Артемьев", "Гришин", "Кононов", "Дементьев", "Ситников", "Симонов", "Мишин", "Фадеев", "Комиссаров", "Устинов", "Вишняков", "Лаврентьев", "Брагин", "Константинов", "Корнилов", "Авдеев", "Бирюков", "Шарапов", "Щукин", "Одинцов", "Сазонов", "Якушев", "Красильников", "Гордеев", "Самойлов", "Князев", "Беспалов", "Уваров", "Шашков", "Доронин", "Рожков", "Самсонов", "Мясников", "Лихачев", "Русаков", "Стрелков", "Гущин", "Субботин", "Фокин", "Кондратьев", "Силин", "Меркушев", "Лыткин", "Туров"],
        ru_man_ava: ["https://pp.userapi.com/c845324/v845324162/a81cc/MQhikEn6f8M.jpg?ava=1", "../pp.userapi.com/c845121/v845121667/a006f/23TowxODUvY8505.jpg?ava=1", "../pp.userapi.com/c845523/v845523821/a68ae/C26uaOWpRdU8505.jpg?ava=1", "../pp.userapi.com/c845018/v845018050/9f39d/KOJekHPQvLw8505.jpg?ava=1", "../pp.userapi.com/c847220/v847220316/a21f9/wUqounulabg8505.jpg?ava=1", "../pp.userapi.com/E1l32vi9hbSpPamS4ctrK57sBspqe5KlgjFQNg/iOtbNbP93Dw.jpg?ava=1", "../pp.userapi.com/Ypp_-qoeChn__W7m6gTJFgx-oVi0KGg9RXNVPw/j5sdZq-MjfA.jpg?ava=1", "../pp.userapi.com/c849124/v849124713/29197/wdZJJO_eF248505.jpg?ava=1", "../pp.userapi.com/c834200/v834200455/181cb2/gvf5IHsEZNk8505.jpg?ava=1", "../pp.userapi.com/c831208/v831208389/144eae/DGS3lR2f9O48505.jpg?ava=1", "../pp.userapi.com/LRkL85qKET0mDz2NSOZ9AYd9jc7eQYKUIQ88FQ/OA0xzvZtNoo.jpg?ava=1", "../pp.userapi.com/c848732/v848732490/2aece/y41CEDAffjQ8505.jpg?ava=1", "../pp.userapi.com/c824700/v824700353/18a28e/mnwcO2mSY3A8505.jpg?ava=1", "../pp.userapi.com/nr7g2-ITcF6GCmVtBu7L6sQyvA_xMHCUpDoopA/-5H11oioz8I.jpg?ava=1", "../pp.userapi.com/YdU40d6MMWyU27m0VC0hIRYSHj-s43fkOLxhdA/IwH2UuGaZNQ.jpg?ava=1", "../pp.userapi.com/c824601/v824601015/185f05/-AxQPMqXMJg8505.jpg?ava=1", "../pp.userapi.com/yPbCnASt87xEBjvghstBqD4PzT_vLc4KRUu69g/s8ti-Y-7xGg.jpg?ava=1", "../pp.userapi.com/c834103/v834103797/18c4c0/1wjxCOondKs8505.jpg?ava=1", "../pp.userapi.com/c834304/v834304213/dad59/l5PX8JJzbqk8505.jpg?ava=1", "https://pp.userapi.com/c834303/v834303597/1844ee/i4HLsymS6So.jpg?ava=1"],
        ru_woman_names: ["Анастасия", "Марина", "Марьяна", "Анна", "Светлана", "Галина", "Анжелика", "Мария", "Людмила", "Нелли", "Елена", "Софья", "Валентина", "Влада", "Дарья", "Диана", "Нина", "Алина", "Яна", "Майя", "Ирина", "Кира", "Камилла", "Екатерина", "Ангелина", "Арина", "Маргарита", "Лилия", "Полина", "Ева", "Любовь", "Зарина", "Ольга", "Алёна", "Лариса", "Дарина", "Эвелина", "Татьяна", "Карина", "Инна", "Владислава", "Наталья", "Василиса", "Самира", "Виктория", "Олеся", "Амелия", "Антонина", "Елизавета", "Аделина", "Амина", "Ника", "Ксения", "Оксана", "Эльвира", "Мадина", "Милана", "Ярослава", "Наташа", "Вероника", "Надежда", "Снежана", "Алиса", "Евгения", "Регина", "Каролина", "Валерия", "Элина", "Алла", "Александра", "Виолетта", "Ульяна", "Лидия", "Эльмира", "Кристина", "София", "Вера", "Наталия"],
        ru_woman_lastname: ["Смирнова", "Иванова", "Кузнецова", "Попова", "Соколова", "Лебедева", "Козлова", "Новикова", "Морозова", "Петрова", "Волкова", "Соловьева", "Васильева", "Зайцева", "Павлова", "Семенова", "Голубева", "Богданова", "Воробьева", "Федорова", "Беляева", "Белова", "Комарова", "Орлова", "Киселева", "Макарова", "Ковалева", "Ильина", "Гусева", "Титова", "Кузьмина", "Кудрявцева", "Баранова", "Куликова", "Алексеева", "Степанова", "Яковлева", "Сорокина", "Сергеева", "Романова", "Захарова", "Борисова", "Королева", "Пономарева", "Лазарева", "Медведева", "Ершова", "Никитина", "Соболева", "Рябова", "Полякова", "Цветкова", "Данилова", "Жукова", "Журавлева", "Крылова", "Сидорова", "Белоусова", "Федотова", "Дорофеева", "Егорова", "Матвеева", "Боброва", "Калинина", "Анисимова", "Петухова", "Антонова", "Тимофеева", "Никифорова", "Веселова", "Большакова", "Суханова", "Миронова", "Коновалова", "Шестакова", "Казакова", "Ефимова", "Громова", "Фомина", "Давыдова", "Мельникова", "Щербакова", "Блинова", "Колесникова", "Власова", "Гаврилова", "Котова", "Горбунова", "Кудряшова", "Быкова", "Зуева", "Третьякова", "Рыбакова", "Суворова", "Абрамова", "Воронова", "Мухина", "Архипова", "Трофимова", "Мартынова", "Емельянова", "Горшкова", "Чернова", "Селезнева", "Панфилова", "Михеева", "Галкина", "Назарова", "Лобанова", "Лукина", "Белякова", "Потапова", "Некрасова", "Хохлова", "Жданова", "Наумова", "Воронцова", "Ермакова", "Дроздова", "Логинова", "Сафонова", "Горбачева", "Орехова", "Ефремова", "Исаева", "Евдокимова", "Калашникова", "Кабанова", "Носкова", "Юдина", "Кулагина", "Лапина", "Прохорова", "Нестерова", "Муравьева", "Зимина", "Пахомова", "Шубина", "Игнатова", "Филатова", "Крюкова", "Рогова", "Кулакова", "Терентьева", "Молчанова", "Артемьева", "Гришина", "Кононова", "Дементьева", "Ситникова", "Симонова", "Мишина", "Фадеева", "Комиссарова", "Устинова", "Вишнякова", "Лаврентьева", "Брагина", "Константинова", "Корнилова", "Авдеева", "Бирюкова", "Шарапова", "Щукина", "Одинцова", "Сазонова", "Якушева", "Красильникова", "Гордеева", "Самойлова", "Князева", "Беспалова", "Уварова", "Шашкова", "Доронина", "Рожкова", "Самсонова", "Мясникова", "Лихачева", "Русакова", "Стрелкова", "Гущина", "Субботина", "Фокина", "Кондратьева", "Силина", "Меркушева", "Лыткина", "Турова"],
        ru_woman_ava: ["https://pp.userapi.com/c845217/v845217875/a09c8/HKtyvgUs-Hw.jpg?ava=1", "../pp.userapi.com/c849224/v849224767/28e32/mOZFOZd9IYY8505.jpg?ava=1", "../pp.userapi.com/c849536/v849536880/28691/xrOCjT1Al908505.jpg?ava=1", "../pp.userapi.com/c834103/v834103881/18ce9e/1LT86vtJhr88505.jpg?ava=1", "../pp.userapi.com/c845120/v845120367/958c0/6uJTHnoglqY8505.jpg?ava=1", "../pp.userapi.com/c844617/v844617166/9dfea/kMm6RfOGDyU8505.jpg?ava=1", "../pp.userapi.com/c844722/v844722103/a0ad1/EmS0-JaGlqM8505.jpg?ava=1", "../pp.userapi.com/c834300/v834300515/18d250/Xkzhzwx_MYY8505.jpg?ava=1", "../pp.userapi.com/3jJYf-_e28cZTZIU_HJwySHOm47wXvcPhg-bZA/Md8TrZta5es.jpg?ava=1", "../pp.userapi.com/c824410/v824410534/18605a/JdOWYKCMNZM8505.jpg?ava=1", "../pp.userapi.com/c824410/v824410946/184cb0/uUGxvTm0GFc8505.jpg?ava=1", "../pp.userapi.com/c830708/v830708471/140231/FM2OyhnGxEs8505.jpg?ava=1", "../pp.userapi.com/c846416/v846416979/97600/QuN1SlsZBug8505.jpg?ava=1", "../pp.userapi.com/QLA4PLRWn_tZg1cXO1suD5hz7EjNE7pBoAtiJQ/MnshgUbUIGM.jpg?ava=1", "../pp.userapi.com/c845521/v845521452/a0838/CFjXY2SnpmE8505.jpg?ava=1", "../pp.userapi.com/zaIpTViBIV1ETrLr16Mlx3mgqicuc6TAg3CMZQ/cvhLJnD5NGw.jpg?ava=1", "../pp.userapi.com/c844616/v844616276/9dcca/SskRFfdLuIo8505.jpg?ava=1", "../pp.userapi.com/c834301/v834301810/18d963/7xHatBznTXY8505.jpg?ava=1", "../pp.userapi.com/c849028/v849028034/28ded/9LdoUV5Z2dA8505.jpg?ava=1", "https://pp.userapi.com/c845323/v845323733/a1e44/c8J2kc8B6WA.jpg?ava=1"],

        kz_man_names: ["Донен", "Умбет", "Берик", "Бектур", "Далел", "Елдос", "Алжан", "Ерен", "Акадиль", "Адилет", "Демеу", "Алан", "Ермек", "Алжанат", "Бауржан", "Тулеген", "Бекзат", "Бакыт", "Бедел", "Кайрат", "Бекем", "Базайрам", "Абулхаир", "Уакап", "Алгыр", "Бектен", "Дарын", "Балайым", "Шалкар", "Балуан", "Ерболат", "Буйту", "Данатор", "Ерке", "Байконур", "Джанузак", "Дулат", "Ажар", "Аян", "Бексултан", "Балман", "Берил", "Дудар", "Данат", "Гульмерей", "Баур", "Елен", "Шаттан", "Асхат", "Айбар", "Жайдар", "Галымжан", "Ауез", "Дармен", "Алдан", "Есенжол", "Бурхат", "Баубек", "Дуйсен", "Еркин", "Елеу", "Айдос", "Алмажан", "Базыл", "Бекин", "Ерасыл", "Айтуар", "Арын", "Алдияр", "Даулет", "Жаслан", "Бахыт", "Егизбай", "Берен", "Белес", "Беласыл", "Уали", "Ерик", "Думан", "Акжол", "Жетиген", "Амантай", "Биржан", "Дайрабай", "Данакер", "Бауыржан", "Жаркын", "Халык", "Айбын", "Бактулы", "Бейсен", "Толеген", "Уайыс", "Жадигер", "Богенбай", "Арлан", "Багашар", "Серик", "Естай", "Алты"],
        kz_man_lastname: ["Садыков", "Темирбулатов", "Айтхожин", "Ауэзов", "Сланов", "Абуталипов", "Рыскулов", "Абильдаев", "Исабеков", "Буркитбаев", "Камалов", "Кунаев", "Усенов", "Курманов", "Смаков", "Аухадиев", "Алимжанов", "Утешев", "Джумалиев", "Идрисов", "Ташенев", "Абилов", "Тажибаев", "Бекжанов", "Джандосов", "Сейфуллин", "Смагулов", "Баймуратов", "Майкеев", "Байжанов", "Мусабаев", "Балиев", "Муканов", "Байсултанов", "Мамбетов", "Ниязов", "Ногаев", "Абдиров", "Уразаев", "Сулейменов", "Юсупов", "Мухтаров", "Садвакасов", "Касымов", "Мукашев", "Шаяхметов", "Нурпеисов", "Хакимов", "Бекхожин", "Жумабаев", "Нурмагамбетов", "Асанбаев", "Турсунов", "Керимов", "Аюпов", "Сакиев", "Тайманов", "Искалиев", "Аширов", "Бектуров", "Нургалиев", "Карашев", "Байжанбаев", "Жумадилов", "Аманжолов", "Султанов", "Шакиров", "Шакенов", "Сериков", "Канапьянов", "Валиханов", "Аширбеков", "Алиев", "Габдуллин", "Есимов", "Галиев", "Ашимов", "Абдильдин", "Базарбаев", "Кушеков", "Мусин", "Жайлауов", "Жунусов", "Мустафин", "Оразалин", "Исабаев", "Искаков", "Карибжанов", "Абдрашев", "Сапаров", "Ибраев", "Абдулин", "Тюрякулов", "Курмангалиев", "Нугманов", "Серкебаев", "Кетебаев", "Мамин", "Рахимов", "Набиев", "Абилев", "Кусаинов", "Шаймерденов", "Ертаев", "Сагатов", "Ибрагимов", "Шарипов", "Абдрахманов", "Алибеков", "Нарымбаев", "Жубанов", "Мусатаев", "Манафов", "Сегизбаев", "Бабаев", "Косанов", "Алтынбаев", "Сатпаев", "Имашев", "Мырзахметов", "Гадельшин", "Назарбаев", "Иксанов", "Ахмадиев", "Аубакиров", "Каримов", "Оспанов", "Аблязов", "Нурбаев", "Ахметов", "Саттаров", "Ниязымбетов", "Калиев", "Бегалин", "Сарсенов", "Назаров", "Абишев", "Уразов", "Жумагулов", "Ундасынов", "Мухамеджанов", "Галиакберов", "Кабаев", "Чокин", "Кулибаев"],
        kz_man_ava: ["https://pp.userapi.com/c847221/v847221029/9db4e/QRAdVyeDCO4.jpg?ava=1", "../pp.userapi.com/c824700/v824700382/195197/Q3iqb1SlTM48505.jpg?ava=1", "../pp.userapi.com/c831408/v831408743/145145/MogrcUexMZI8505.jpg?ava=1", "../pp.userapi.com/c848620/v848620371/28abf/9UIEdSaWyFk8505.jpg?ava=1", "../pp.userapi.com/c830309/v830309352/147f95/6hlwspQf9Fs8505.jpg?ava=1", "../pp.userapi.com/c831508/v831508718/14b2b6/jNWQQxS1Z1g8505.jpg?ava=1", "../pp.userapi.com/c830309/v830309048/14cba6/rb9kSPdp6208505.jpg?ava=1", "../pp.userapi.com/c824500/v824500897/16a99b/8HFM3JZE8m88505.jpg?ava=1", "../pp.userapi.com/c844720/v844720148/9f4c7/5lbYXeZOTNM8505.jpg?ava=1", "../pp.userapi.com/QvshF153VZtbKpxiJ3wkhjFAMm5MYYlhZxhwjA/AKCSxSjWzI8.jpg?ava=1", "../pp.userapi.com/j0XmApOEU13E5Wl2wL98VshkyfvstPt9MdC0jg/npBEGtiNkWk.jpg?ava=1", "../pp.userapi.com/c845524/v845524327/9e75e/2-Y1DxFdn1E8505.jpg?ava=1", "../pp.userapi.com/c830509/v830509204/151380/U2EYoognLTI8505.jpg?ava=1", "../pp.userapi.com/c846416/v846416512/9a4ac/nfdf5-j2rSk8505.jpg?ava=1", "../pp.userapi.com/c824700/v824700297/18b374/nIXuCaBdvpA8505.jpg?ava=1", "../pp.userapi.com/c830409/v830409924/14bd93/H_yHDBbD4ic8505.jpg?ava=1", "../pp.userapi.com/c850016/v850016079/22014/h24b4XXCFgk8505.jpg?ava=1", "../pp.userapi.com/VhA8jbjxoFFc5OGM6ad6R3hkdUahWN4S0dIBVA/t6YolmeUZU0.jpg?ava=1", "../pp.userapi.com/c834100/v834100204/18ab44/Dm_kViMlXsA8505.jpg?ava=1", "https://pp.userapi.com/c846520/v846520758/9826e/6rgQaVAsn9Y.jpg?ava=1"],
        kz_woman_names: ["Айбарша", "Инабад", "Балнур", "Айгарша", "Кенже", "Жанара", "Жумагуль", "Канипа", "Елдана", "Жадра", "Жанайым", "Корлан", "Думангуль", "Айбала", "Акгуль", "Еркегуль", "Базаргуль", "Айнаш", "Гульнур", "Айгуль", "Жибек", "Балганым", "Жания", "Даната", "Асем", "Бимаржан", "Акбаян", "Балбике", "Жансая", "Балгайша", "Елгуль", "Айслу", "Айсулу", "Гульшат", "Айгерим", "Жулдыз", "Жалиш", "Береке", "Жупар", "Келбет", "Бибигуль", "Зауреш", "Жанель", "Каламкас", "Гулшара", "Жемисгуль", "Каршыга", "Жумабика", "Балгын", "Куаныш", "Базарайым", "Кулян", "Аксауле", "Ибалы", "Инжу", "Жаныл", "Асияна", "Жайна", "Балбота", "Жанар", "Жанагуль", "Батима", "Айман", "Куланда", "Балжан", "Жансауле", "Дарига", "Айзия", "Балауса", "Айтолды", "Аяулым", "Гулден", "Алжана", "Ару", "Жанбике", "Жанадил", "Айзада", "Есенкуль", "Жумакыз", "Ибажан", "Игилик", "Акбота", "Еркингуль", "Айжамал", "Кулсин", "Акерке", "Айганша", "Ибагуль", "Балгуль", "Борык", "Карлыгаш", "Ажаркуль", "Еркежан", "Кулай", "Гульдана", "Калдыбике", "Женискуль", "Айжан", "Кульгин", "Зиягул"],
        kz_woman_lastname: ["Ногаева", "Назарова", "Ниязова", "Абдрахманова", "Абильдаева", "Алтынбаев", "Нурмагамбетова", "Камалова", "Тюрякулова", "Сланова", "Абишева", "Аюпов", "Тажибаева", "Касымов", "Канапьянов", "Мамбетов", "Уразаева", "Сагатова", "Ашимова", "Идрисова", "Искалиева", "Галиакберова", "Курмангалиева", "Байсултанова", "Аблязова", "Ауэзова", "Сапарова", "Нургалиева", "Жумагулова", "Сегизбаева", "Абдильдина", "Ахмадиева", "Гадельшина", "Садыкова", "Мырзахметова", "Муканова", "Рахимова", "Нурбаева", "Жайлауова", "Имашева", "Нугманова", "Сулейменова", "Абдулина", "Ахметова", "Кусаинов", "Абуталипова", "Абдрашева", "Жумадилова", "Кетебаев", "Абилова", "Аширов", "Мукашева", "Сейфуллина", "Оспанова", "Балиева", "Усенова", "Жумабаева", "Шаймерденова", "Турсунова", "Ибрагимова", "Смагулова", "Чокина", "Иксанова", "Манафов", "Баймуратова", "Керимов", "Тайманова", "Султанова", "Садвакасова", "Оразалина", "Бегалина", "Ертаева", "Мусабаева", "Жунусова", "Мухамеджанова", "Искакова", "Нурпеисова", "Курманова", "Алибекова", "Набиева", "Майкеев", "Сарсенова", "Мамин", "Кушеков", "Нарымбаева", "Мусина", "Жубанова", "Аширбекова", "Мусатаева", "Ундасынова", "Есимова", "Утешева", "Серикова", "Алиева", "Хакимова", "Галиева", "Джумалиева", "Исабаева", "Назарбаева", "Рыскулова", "Кабаева", "Ташенева", "Серкебаева", "Алимжанова", "Джандосова", "Кунаева", "Сакиева", "Сатпаева", "Ибраева", "Каримов", "Темирбулатова", "Карибжанов", "Абилева", "Абдирова", "Ниязымбетова", "Косанова", "Саттарова", "Айтхожина", "Уразова", "Карашев", "Калиева", "Исабекова", "Кулибаева"],
        kz_woman_ava: ["https://pp.userapi.com/c845418/v845418506/9fe4b/k4tFhVY0j0A.jpg?ava=1", "../pp.userapi.com/c849336/v849336194/28f4e/-AjdloTgJ808505.jpg?ava=1", "../pp.userapi.com/c848528/v848528156/2b981/h4RFoPPuCJg8505.jpg?ava=1", "../pp.userapi.com/c846523/v846523094/9b772/ihtNPo2-H-88505.jpg?ava=1", "../pp.userapi.com/3SFA6-wuTirXS-hUbPe8yxaoORCEqYQc62EO9w/RV0QAPSeQsg.jpg?ava=1", "../pp.userapi.com/3AKw5W0i3NA4FzGXvZ6padd5gXz_dZ7iMmeTUQ/lvUQ08ZggdQ.jpg?ava=1", "../pp.userapi.com/aPEF-Si18kTGw6uMnCDnalDAie3izulJXOtx0w/fbIQK5cBYOg.jpg?ava=1", "../pp.userapi.com/c824600/v824600681/184fc9/ASemsgxzMtg8505.jpg?ava=1", "../pp.userapi.com/c831109/v831109455/14b1f0/TtlqkDfpUaY8505.jpg?ava=1", "../pp.userapi.com/c845419/v845419086/9cb02/VMNliEQxF7s8505.jpg?ava=1", "../pp.userapi.com/_7SqJTRP-joC9ybS3bTIn1vzEew-Y5h3YaDSsw/axftEIzxQ1c.jpg?ava=1", "../pp.userapi.com/c824701/v824701278/185389/Z6AWFdp0SVs8505.jpg?ava=1", "../pp.userapi.com/c848732/v848732418/26cef/JV-arGDGWBo8505.jpg?ava=1", "../pp.userapi.com/c834202/v834202440/1454a0/qykcDsCrWCQ8505.jpg?ava=1", "../pp.userapi.com/c846523/v846523934/97be1/RJTIM5v2Zlw8505.jpg?ava=1", "../pp.userapi.com/c844721/v844721881/9d7b8/3Aw1w_5xuVA8505.jpg?ava=1", "../pp.userapi.com/c847221/v847221416/97927/OK19xSdnTeo8505.jpg?ava=1", "../pp.userapi.com/c845524/v845524131/a12d2/I8mILHdnW5U8505.jpg?ava=1", "../pp.userapi.com/c844321/v844321116/a3e2c/8ehQpgY7GvY8505.jpg?ava=1", "https://pp.userapi.com/c845416/v845416528/a11f7/KS66fDO3lq0.jpg?ava=1"],

        ua_man_names: ["Марк", "Юстим", "Роберт", "Артемий", "Августин", "Дмитрий", "Артём", "Влад", "Родион", "Ізяслав", "Михаил", "Данил", "Андрей", "Борис", "Степан", "Данила", "Митрофан", "Інокентій", "Михайло", "Трохим", "Тимур", "Мирон", "Александр", "Ярослав", "Давид", "Егор", "Василий", "Алексей", "Абрам", "Олег", "Юхим", "Агафоник", "Сергей", "Агапій", "Григорий", "Милослав", "Аврам", "Богдан", "Денис", "Константин", "Авило", "Авксентій", "Платон", "Георгий", "Тодось", "Анатолий", "Юстин", "Агапіт", "Агафон", "Антон", "Юрко", "Тихін", "Тит", "Савелий", "Рустам", "Николай", "Іларій", "Юрий", "Эмиль", "Матвей", "Август", "Микола", "Максим", "Алфій,Ієронім", "Адріан", "Никита", "Роман", "Кирилл", "Азар", "Илья", "Адам", "Станислав", "Семен", "Тодор", "Іларіон", "Иван", "Вадим", "Трифон", "Тимофій", "Альберт", "Валерий", "Артур", "Глеб", "Мирослав"],
        ua_man_lastname: ["Пасичник", "Лазаренко", "Лавренко", "Грабарь", "Бондарь", "Шинкарук", "Мережко", "Чумак", "Ющенко", "Пономаренко", "Ткаченко", "Сопильняк", "Колесниченко", "Васильченко", "Марченко", "Корниенко", "Кушниренко", "Коваль", "Мельничук", "Бандурко", "Романенко", "Лисенко", "Терещенко", "Довгань", "Любченко", "Якушенко", "Ющак", "Кушнирчук", "Ярема", "Стельмах", "Дзюбенко", "Стрельченко", "Герасименко", "Юрченко", "Франко", "Полищук", "Телига", "Рыбак", "Захаренко", "Драган", "Филь", "Палий", "Шостак", "Спивак", "Рубан", "Клименко", "Середа", "Бутко", "Кравчук", "Рыбалко", "Хрущев", "Шинкарь", "Филоненко", "Мельниченко", "Николаенко", "Юшко", "Кондратюк", "Овчаренко", "Артёменко", "Пилипенко", "Тимченко", "Кравец", "Паламарчук", "Бородай", "Мороз", "Коваленко", "Бондаренко", "Лисовец", "Щербань", "Филипенко", "Пономарчук", "Рымарь", "Хоменко", "Волынец", "Калиниченко", "Бубенко", "Кавун", "Буденный", "Прокопенко", "Кравченко", "Шинкаренко", "Придиус", "Евсеенко", "Гончаренко", "Бутенко", "Сильченко", "Чалый", "Ковальчук", "Ульяненко", "Иванченко", "Собко", "Краско", "Сердюк", "Захарченко", "Яременко", "Опанасенко", "Михайленко", "Коломиец", "Скляр", "Гармаш", "Акименко", "Кудря", "Гончар", "Гончарук", "Александренко", "Захарко", "Линник", "Полещук", "Харченко"],
        ua_man_ava: ["https://pp.userapi.com/c846220/v846220666/9de8e/Z1nQU4E9UQw.jpg?ava=1", "../pp.userapi.com/c849536/v849536851/29af4/_9nlttNUC1g8505.jpg?ava=1", "../pp.userapi.com/c844618/v844618521/a3bb1/gUIAnT52GH08505.jpg?ava=1", "../pp.userapi.com/c830309/v830309920/14d79c/tHm37y15mQQ8505.jpg?ava=1", "../pp.userapi.com/c848620/v848620910/28c6e/0lbUcljzsuw8505.jpg?ava=1", "../pp.userapi.com/c846417/v846417001/9cc98/97754PzCVFo8505.jpg?ava=1", "../pp.userapi.com/c840630/v840630354/37c5b/v1Aux0qCL6g8505.jpg?ava=1", "../pp.userapi.com/c845522/v845522377/a004a/kOi4KyiKfj08505.jpg?ava=1", "../pp.userapi.com/ceQrzrDIJVHIJcn6AJe5eEOeIk1efsovqJEDhA/I8E8vPyCf88.jpg?ava=1", "../pp.userapi.com/c849136/v849136633/27fa5/Z205At1UQk08505.jpg?ava=1", "../pp.userapi.com/c848524/v848524936/29b1e/-vq31Ee-vOA8505.jpg?ava=1", "../pp.userapi.com/c844417/v844417331/9dd95/OCo7ukoCHxI8505.jpg?ava=1", "../pp.userapi.com/c849032/v849032412/27787/vGfYZJgcS2s8505.jpg?ava=1", "../pp.userapi.com/8xIy7by4dUmVCtxcZ4IKeRoRwxdndEJYrwF6bA/jW35LuNhCS8.jpg?ava=1", "../pp.userapi.com/U1fFs3rXQo1OxJ-d0d6ND20XIgJMm9c3bmD5SQ/nhqdM-az0is.jpg?ava=1", "../pp.userapi.com/hHNAWvNb5iBUehAvhOGiybQzlwKx_a3esBY7aQ/1IOhNcazm3E.jpg?ava=1", "../pp.userapi.com/c844722/v844722162/a02b7/GhwT_hlP-o08505.jpg?ava=1", "../pp.userapi.com/c846217/v846217549/991e8/Wg1YMCc8O3Q8505.jpg?ava=1", "../pp.userapi.com/c849416/v849416785/274ba/xUAayqxQEck8505.jpg?ava=1", "https://pp.userapi.com/c831208/v831208612/147082/eKyIHHIuRJk.jpg?ava=1"],
        ua_woman_names: ["Кира", "Агрипина,Вікторія", "Татьяна", "Алёна", "Маргарита", "Віолетта", "Тереза", "Аделина", "Антонина", "Светлана", "Одарка", "Зарина", "Лариса", "Нина", "Яніна", "Самира", "Дарина", "Владислава", "Эльвира", "Віола", "Камилла", "Іда,Ліліана", "Елизавета", "Анжелика", "Наталья", "Лилия", "Феофіла", "Оксана", "Влада", "Марьяна", "Ольга", "Феофанія", "Фекла", "Марина", "Нелли", "Арина", "Дарья", "Іванна", "Анастасия", "Тодора,Февронія", "Віра,Жанна", "Зоя", "Инна", "Милана", "Яна", "Лілія", "Виктория", "Ніна", "Ангелина", "Олеся", "Феодосія", "Алина", "Амина", "Ника", "Екатерина", "Яна", "Валентина", "Мария", "Амелия", "Ярослава", "Диана", "Агнія", "Людмила", "Софья", "Майя", "Анна", "Зінаїда", "Фотинія", "Теофіла", "Эвелина", "Ярина", "Елена", "Карина", "Василиса", "Ева", "Полина", "Ирина", "Оксана,Тамара", "Ксения", "Аглая", "Любовь", "Нонна", "Галина", "Ліна", "Мадина"],
        ua_woman_lastname: ["Захаренко", "Драган", "Филь", "Палий", "Шостак", "Спивак", "Рубан", "Клименко", "Середа", "Бутко", "Кравчук", "Рыбалко", "Хрущев", "Шинкарь", "Филоненко", "Мельниченко", "Николаенко", "Юшко", "Кондратюк", "Овчаренко", "Артёменко", "Пилипенко", "Тимченко", "Кравец", "Буденный", "Прокопенко", "Кравченко", "Шинкаренко", "Придиус", "Евсеенко", "Гончаренко", "Бутенко", "Сильченко", "Чалый", "Ковальчук", "Ульяненко", "Иванченко", "Собко", "Краско", "Сердюк", "Захарченко", "Яременко", "Опанасенко", "Михайленко", "Коломиец", "Скляр", "Гармаш", "Акименко", "Кудря", "Гончар", "Гончарук", "Александренко", "Захарко", "Линник", "Полещук", "Харченко", "Лисенко", "Терещенко", "Довгань", "Любченко", "Якушенко", "Ющак", "Кушнирчук", "Ярема", "Стельмах", "Дзюбенко", "Стрельченко", "Герасименко", "Юрченко", "Франко", "Полищук", "Телига", "Рыбак", "Пасичник", "Лазаренко", "Лавренко", "Грабарь", "Бондарь", "Шинкарук", "Мережко", "Чумак", "Ющенко", "Пономаренко", "Ткаченко", "Сопильняк", "Колесниченко", "Васильченко", "Марченко", "Корниенко", "Кушниренко", "Коваль", "Мельничук", "Бандурко", "Романенко", "Паламарчук", "Бородай", "Мороз", "Коваленко", "Бондаренко", "Лисовец", "Щербань", "Филипенко", "Пономарчук", "Рымарь", "Хоменко", "Волынец", "Калиниченко", "Бубенко", "Кавун"],
        ua_woman_ava: [["https://pp.userapi.com/c848620/v848620681/28fbb/RvnqCTO9az8.jpg?ava=1", "../pp.userapi.com/c846419/v846419185/99a12/k8g1w0Jkp8M8505.jpg?ava=1", "../pp.userapi.com/c846018/v846018635/9a564/Ok3sjIYTnsc8505.jpg?ava=1", "../pp.userapi.com/c831309/v831309392/13f0ff/lh0SEmpJZzo8505.jpg?ava=1", "../pp.userapi.com/c824202/v824202069/184c79/HDLC7CjZkW08505.jpg?ava=1", "../pp.userapi.com/c847123/v847123219/9717c/Ee2UTQO0cCc8505.jpg?ava=1", "../pp.userapi.com/c844521/v844521732/a075a/mYUagFNzYxQ8505.jpg?ava=1", "../pp.userapi.com/cpY-x3kAbc8WX6XSHEqDS8AbrtoG9pUQgMRplA/BGbm-nP4-g8.jpg?ava=1", "../pp.userapi.com/c845122/v845122187/9e448/ytgJiMwd3Bg8505.jpg?ava=1", "../pp.userapi.com/c847219/v847219721/9bfb1/IfHgG_ICQ6Q8505.jpg?ava=1", "../pp.userapi.com/c846218/v846218840/9a1a9/UNAYWPZ3gwo8505.jpg?ava=1", "../pp.userapi.com/c847216/v847216843/99c3c/67_NMvoyneI8505.jpg?ava=1", "../pp.userapi.com/c831208/v831208502/14aa42/h7GLyW6sXJ08505.jpg?ava=1", "../pp.userapi.com/c848628/v848628821/29f5e/SNxg45zbD5I8505.jpg?ava=1", "../pp.userapi.com/c834303/v834303501/189152/syNo9pyS1Lg8505.jpg?ava=1", "../pp.userapi.com/c824409/v824409771/185700/OYSAYDKZX7A8505.jpg?ava=1", "../pp.userapi.com/c824601/v824601141/184455/5J1fuTbmIaI8505.jpg?ava=1", "../pp.userapi.com/iqdeyBv5F-d5QqO5R8fmeuM5UESIwJ0eWv-ogQ/WcRczXyjBLI.jpg?ava=1", "../pp.userapi.com/c834403/v834403856/188df8/Bn2dY0GlBUQ8505.jpg?ava=1", "https://pp.userapi.com/c830309/v830309017/14b73e/lmG03CDXsuk.jpg?ava=1"]],
        generate_name: function (country, sex, name, lastname) {
            var resultUserName = '';

            if (country == false) {
                country = site.countrys[site.random(0, site.countrys.length - 1)];
            }

            if (name) {
                resultUserName += site[country + "_" + sex + "_names"][site.random(0, site[country + "_" + sex + "_names"].length - 1)];
            }

            if (name && lastname) {
                resultUserName += ' ';
            }

            if (lastname) {
                resultUserName += site[country + "_" + sex + "_lastname"][site.random(0, site[country + "_" + sex + "_lastname"].length - 1)];
            }

            return resultUserName;
        },
        getAva: function (country, sex) {
            // Функция чистит массив с фото
            var ava = '', ava_position = 0;
            if (site[country + "_" + sex + "_ava"].length != 0) {
                ava_position = site.random(0, site[country + "_" + sex + "_ava"].length - 1);
                ava = site[country + "_" + sex + "_ava"][ava_position];

                site[country + "_" + sex + "_ava"].splice(ava_position, 1);
            } else {
                ava = '../vk.com/images/camera_1008505.png?ava=1';
            }

            return ava;
        },
        number_to_str: function (t) {
            return (t = String(t)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ")
        },
        random: function (t, o) {
            var e = t - .5 + Math.random() * (o - t + 1);
            return Math.round(e)
        },
        stata: function (data, interaval) {
            function checkLocalStorage(name, value, callback) {
                if (localStorage['dinamic_stat_' + name] === undefined){
                    localStorage['dinamic_stat_' + name] = value;

                    callback();
                } else {
                    callback();
                }
            }

            function reloadDomElem(elem) {
                $('#' + elem).text(localStorage['dinamic_stat_' + elem]);
            }

            for(var i = 0; i < data.length; i++){
                checkLocalStorage(data[i]['elem'], data[i]['start'], function () {
                    var now_value = parseInt(localStorage['dinamic_stat_' + data[i]['elem']]);
                    var random_value = site.random(data[i]['dinamic_min'], data[i]['dinamic_max']);
                    var operation_type = {
                        minus: true,
                        plus : true
                    };
                    var new_value = 0;

                    if (data[i]['dinamic_minus'] === false){
                        delete operation_type.minus;
                    }

                    if (data[i]['dinamic_plus'] === false){
                        delete operation_type.plus;
                    }

                    if (operation_type.minus != undefined && operation_type.plus != undefined){
                        if(site.random(0,1) == 0){
                            new_value = Number(now_value) - Number(random_value);

                            if (data[i]['min'] !== undefined){
                                if (new_value < data[i]['min']){
                                    new_value = data[i]['min'] + 10;
                                }
                            }
                        } else {
                            new_value = Number(now_value) + Number(random_value);

                            if (data[i]['max'] !== undefined){
                                if (new_value > data[i]['max']){
                                    new_value = data[i]['max'] - 10;
                                }
                            }
                        }
                    } else {
                        for (key in operation_type){
                            if (key == 'minus'){
                                new_value = Number(now_value) - Number(random_value);

                                if (data[i]['min'] !== undefined){
                                    if (new_value < data[i]['min']){
                                        new_value = data[i]['min'] + 10;
                                    }
                                }
                            } else if (key == 'plus'){
                                new_value = Number(now_value) + Number(random_value);

                                if (data[i]['max'] !== undefined){
                                    if (new_value > data[i]['max']){
                                        new_value = data[i]['max'] - 10;
                                    }
                                }
                            }
                        }
                    }

                    localStorage['dinamic_stat_' + data[i]['elem']] = new_value;
                    reloadDomElem(data[i]['elem']);
                });
            }

            setTimeout(function () {
                site.stata(data, interaval);
            }, interaval);
        },
        visible_user_comment: function (num) {
            if (localStorage["user_add_coment_" + num] == String(num)) {
                $("#user_comment_name").text(localStorage["user_comment_name_" + num]);
                $("#user_comment_text").text(localStorage["user_comment_text_" + num]);

                $("#user_comment").show();
                $("#btn_add_user_comment").attr("onclick", 'alert("Для написания более чем одного комментария необходимо авторизоваться!");');
            } else {
                $("#user_comment").hide();
            }
        },
        toggle_push_sound: function () {
            if (localStorage['push_sound'] == 'on') {
                localStorage['push_sound'] = 'off';
                $("#push .notification-btn").text('включить звук');
            } else {
                localStorage['push_sound'] = 'on';
                $("#push .notification-btn").text('выключить звук');
            }
        },
        prepare_push: function (callback) {
            function compareRandom(a, b) {
                return Math.random() - 0.5;
            }

            function getCountryNotAlias(alias) {
                var local_countrys = site.countrys.slice();

                for (var i = 0; i < local_countrys.length; i++) {
                    if (local_countrys[i] == alias) {
                        local_countrys.splice(i, 1);
                    }
                }

                alias = local_countrys[site.random(0, local_countrys.length - 1)];

                return alias;
            }

            var country = localStorage["user_country_alias"];
            var index_push = [],
                auth_push = [],
                convert_push = [],
                commission_push = [],
                virtual_push = [],
                reg_win_push = [],
                access_line_push = [],
                up_status_push = [];
            var text = '';

            // Генерация index push
            for (var i = 0; i < 35; i++) {
                var name = '', ava = '';

                if (i <= 10) {
                    // муж
                    switch (site.random(0, 2)) {
                        case 2:
                            var vc = getCountryNotAlias(country);
                            name = site.generate_name(vc, 'man', true, true);
                            ava = site.getAva(vc, 'man');
                            break;
                        default:
                            name = site.generate_name(country, 'man', true, true);
                            ava = site.getAva(country, 'man');
                            break;
                    }
                } else if (i <= 20) {
                    // жен
                    switch (site.random(0, 2)) {
                        case 2:
                            var vc = getCountryNotAlias(country);
                            name = site.generate_name(vc, 'woman', true, true);
                            ava = site.getAva(vc, 'woman');
                            break;
                        default:
                            name = site.generate_name(country, 'woman', true, true);
                            ava = site.getAva(country, 'woman');
                    }
                } else {
                    // пох кто без авы
                    if (0 == site.random(0, 1)) {
                        //муж
                        switch (site.random(0, 2)) {
                            case 2:
                                name = site.generate_name(getCountryNotAlias(country), 'man', true, true);
                                break;
                            default:
                                name = site.generate_name(country, 'man', true, true);
                                break;
                        }
                    } else {
                        // жен
                        switch (site.random(0, 2)) {
                            case 2:
                                name = site.generate_name(getCountryNotAlias(country), 'woman', true, true);
                                break;
                            default:
                                name = site.generate_name(country, 'woman', true, true);
                                break;
                        }
                    }

                    ava = '../vk.com/images/camera_1008505.png?ava=1';
                }

                var winSumm = 0;
                if (0 == site.random(0, 4)) {
                    winSumm = site.random(500, 2000);
                } else {
                    winSumm = site.random(50, 700);
                }

                var payMethod = '';

                if (0 == site.random(0, 1)) {
                    payMethod = 'Банковская карта';
                } else {
                    payMethod = 'Электронный кошелек';
                }

                text = "Участник: <strong>" + name + "</strong>\r\nВыплачена сумма: <strong>" + site.number_to_str(winSumm) + "$</strong>\r\nЗачисление:  <strong>" + payMethod + "</strong>";

                index_push.push({
                    ava: ava,
                    text: text
                });
            }

            // Генерация auth push
            for (var i = 0; i < 15; i++) {
                var name = '', ava = '', sex = '';

                if (i <= 4) {
                    if (i == 1) {
                        auth_push.push({
                            ava: site.getAva(vc, 'man'),
                            text: "Участник: <strong>" + site.generate_name(vc, 'man', true, true) + "</strong>\r\nне оплатил аутентификационный платеж, сумма в размере: <strong>" + site.number_to_str(site.random(50, 1855)) + "$</strong> возвращена в общий призовой фонд!"
                        });

                        continue;
                    }
                    // муж
                    switch (site.random(0, 2)) {
                        case 2:
                            var vc = getCountryNotAlias(country);
                            name = site.generate_name(vc, 'man', true, true);
                            ava = site.getAva(vc, 'man');
                            break;
                        default:
                            name = site.generate_name(country, 'man', true, true);
                            ava = site.getAva(country, 'man');
                            break;
                    }

                    sex = 'man';
                } else if (i <= 10) {
                    if (i == 7 || i == 9) {
                        auth_push.push({
                            ava: site.getAva(vc, 'woman'),
                            text: "Участник: <strong>" + site.generate_name(vc, 'woman', true, true) + "</strong>\r\nне оплатила аутентификационный платеж, сумма в размере: <strong>" + site.number_to_str(site.random(50, 1855)) + "$</strong> возвращена в общий призовой фонд!"
                        });

                        continue;
                    }
                    // жен
                    switch (site.random(0, 2)) {
                        case 2:
                            var vc = getCountryNotAlias(country);
                            name = site.generate_name(vc, 'woman', true, true);
                            ava = site.getAva(vc, 'woman');
                            break;
                        default:
                            name = site.generate_name(country, 'woman', true, true);
                            ava = site.getAva(country, 'woman');
                    }

                    sex = 'woman';
                } else {
                    // пох кто без авы
                    if (0 == site.random(0, 1)) {
                        if (i == 11) {
                            auth_push.push({
                                ava: site.getAva(vc, 'man'),
                                text: "Участник: <strong>" + site.generate_name(vc, 'man', true, true) + "</strong>\r\nне оплатил аутентификационный платеж, сумма в размере: <strong>" + site.number_to_str(site.random(50, 1855)) + "$</strong> возвращена в общий призовой фонд!"
                            });

                            continue;
                        }
                        //муж
                        switch (site.random(0, 2)) {
                            case 2:
                                name = site.generate_name(getCountryNotAlias(country), 'man', true, true);
                                break;
                            default:
                                name = site.generate_name(country, 'man', true, true);
                                break;
                        }

                        sex = 'man';
                    } else {
                        if (i == 11) {
                            auth_push.push({
                                ava: site.getAva(vc, 'woman'),
                                text: "Участник: <strong>" + site.generate_name(vc, 'woman', true, true) + "</strong>\r\nне оплатила аутентификационный платеж, сумма в размере: <strong>" + site.number_to_str(site.random(50, 1855)) + "$</strong> возвращена в общий призовой фонд!"
                            });

                            continue;
                        }
                        // жен
                        switch (site.random(0, 2)) {
                            case 2:
                                name = site.generate_name(getCountryNotAlias(country), 'woman', true, true);
                                break;
                            default:
                                name = site.generate_name(country, 'woman', true, true);
                                break;
                        }

                        sex = 'woman';
                    }

                    ava = '../vk.com/images/camera_1008505.png?ava=1';
                }

                var winSumm = 0;
                if (0 == site.random(0, 4)) {
                    winSumm = site.random(500, 2000);
                } else {
                    winSumm = site.random(50, 700);
                }

                var payMethod = '';

                if (0 == site.random(0, 1)) {
                    payMethod = 'Банковская карта';
                } else {
                    payMethod = 'Электронный кошелек';
                }

                var ending = '';
                if (sex == 'woman') {
                    ending = 'а';
                } else {
                    ending = '';
                }

                text = "Участник: <strong>" + name + "</strong>\r\nОплатил" + ending + " аутентификационный платеж и получил" + ending + ": <strong>" + site.number_to_str(winSumm) + "$</strong>";

                auth_push.push({
                    ava: ava,
                    text: text
                });
            }

            index_push.sort(compareRandom);
            auth_push.sort(compareRandom);

            localStorage['push_content__index'] = JSON.stringify(index_push);
            localStorage['push_content__auth'] = JSON.stringify(auth_push);

            callback(true);
        },
        push: function (page, interval) {
            if (localStorage['push_ready'] == 'true') {
                function getPush(vpage) {
                    var tmp_data = JSON.parse(localStorage['push_content__' + vpage]);
                    var data = tmp_data[0];
                    tmp_data.splice(0, 1);

                    localStorage['push_content__' + vpage] = JSON.stringify(tmp_data);

                    if (data == undefined) {
                        var sex = '';
                        var name = '';

                        if (0 == site.random(0, 1)) {
                            sex = 'man';
                        } else {
                            sex = 'woman';
                        }

                        name = site.generate_name(localStorage["user_country_alias"], sex, true, true);

                        var winSumm = 0;
                        if (0 == site.random(0, 4)) {
                            winSumm = site.random(500, 2000);
                        } else {
                            winSumm = site.random(50, 700);
                        }

                        var payMethod = '';

                        if (0 == site.random(0, 1)) {
                            payMethod = 'Банковская карта';
                        } else {
                            payMethod = 'Электронный кошелек';
                        }

                        var text = '';

                        switch (vpage) {
                            case 'index':
                                text = "Участник: <strong>" + name + "</strong>\r\nВыплачена сумма: <strong>" + site.number_to_str(winSumm) + "$</strong>\r\nЗачисление:  <strong>" + payMethod + "</strong>";
                                break;
                            case 'auth':
                                var ending = '';
                                if (sex == 'woman') {
                                    ending = 'а';
                                } else {
                                    ending = '';
                                }

                                if (site.random(0, 6) == 0){
                                    text = "Участник: <strong>" + name + "</strong>\r\nне оплатил" + ending + " аутентификационный платеж, сумма в размере: <strong>" + site.number_to_str(winSumm) + "$</strong> возвращена в общий призовой фонд!";
                                } else {
                                    text = "Участник: <strong>" + name + "</strong>\r\nОплатил" + ending + " аутентификационный платеж и получил" + ending + ": <strong>" + site.number_to_str(winSumm) + "$</strong>";
                                }
                                break;
                        }

                        data = {
                            ava: "https://vk.com/images/camera_100.png?ava=1",
                            text: text
                        }
                    }

                    return data;
                }

                if (interval == undefined) interval = 20000;

                setInterval(function () {
                    //site.random(0,1)
                    if (0 == 0) {
                        var data = getPush(page);

                        if (localStorage['push_sound'] == 'on') {
                            var audio_push = new Audio();
                            audio_push.src = 'static/push.mp3';
                            audio_push.autoplay = true;
                        }

                        push({
                            text: data.text,
                            ava: data.ava
                        }, {
                            life: '7500'
                        });
                    }
                }, interval);
            } else {
                setTimeout(function () {
                    site.push(page, interval);
                }, 1500);
            }
        }
    };
    window.site = site;
}();