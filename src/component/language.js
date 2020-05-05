class Language {

    e = () => {
        const lang = localStorage.getItem("language");
        if (lang === "zh_CN") {
            return this.zh_CN;
        } else if (lang === "en_US") {
            return this.en_US;
        }  else if (lang === "be_BY") {
            return this.be_BY;
        }  else if (lang === "ja_JP") {
            return this.ja_JP;
        }  else if (lang === "ko_KR") {
            return this.ko_KR;
        } else {
            let localUtc = new Date().getTimezoneOffset() / 60;
            if (localUtc === -8) {
                return this.zh_CN;
            } else {
                return this.en_US;
            }
        }
    }

    en_US = {
        text: "Language",
        warn: "Venture capital, cautious participation.",
        copySucc: "Copy success",
        copy: "Copy",
        Button: {
            Ok: "Ok",
            Cancel: "Cancel"
        },
        fund: {
            title: "Guarantee funds [Start]",
            poolAmount: "Pool of funds",
            fundAmount: "Guarantee fund",
            total: "Total",
            close: "Lucky codes"
        },
        account: {
            title: "Account",
            change: "Change",
            balance: "Balance",
            invest: "Invest",
            withdraw: "Withdraw",
            reinvest: "Reinvest",
            amount: "Amount",
            rule: "Contract Rule",

            modal: {
                title: "Invest",
                code: "Invitation code",
                value: "Value",
                cancel: "Cancel",
                submit: "Submit"
            },
            records: {
                id: "ID",
                title: "Records",
                time: "Remaining days",
                amount: "Amount",
                profit: "Profit",
                total: "Total",
                state: "Can Withdraw",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Recommend info",
                invitationCode: "Invitation code",
                inviteNumber: "Number of invitations",
                achievement: "Achievement",

                level: "Level",
                count: "Count",
                profit: "Share profit",
                achieveDetail: "Achievement",
                state: "Can Gain",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
Welcome to the western world!

1. Use the referral code as the connection relationship

2. Free participation, the amount is 100-100000 SERO, each account can accumulate a maximum of 100,000 SERO

3. Immediately after participation, the number of available cash withdrawals after 30 days and the countdown for 30 days will be displayed

4. Static income:
  The contract period is 30 days, the income is 3% (ie 0.1% per day), and the contract can be freely withdrawn with interest and profit

5. Revenue sharing:
  a) Directly enjoy 50% of the static income of the first-tier shared person
  b) Direct sharing performance of 20,000 SERO, you can enjoy the static benefits of the 2nd-layer shared
  c) For every 10,000 SERO increase in direct sharing performance, you can enjoy one more tier of the static income of the person being shared, up to 10 tiers
  d) Directly push the 2nd-5th floor to enjoy 5% of the shared person's static income, and the 6th-10th floor to enjoy the shared person's static income of 1%
  e) The sharing revenue has burns, that is, when calculating the sharing revenue, it is calculated based on the lesser of the principal of the sharer and the person being shared
  f) Real-time settlement of shared revenue, instant withdrawal
  
6. Guarantee mechanism:
  If the balance of the system cannot be virtuously cycled, it will automatically trigger the protection fund "prize countdown" mechanism;
  The countdown time is 6 hours. During the period of receiving off-site participation funds, the timer is automatically turned off and the system continues to operate normally;
  If the balance cannot be virtuous cycle again, the system starts the timer again ... such a virtuous cycle;
  If no off-site participation funds are received within 6 hours, the "guarantee fund + fund pool balance" will be allocated in proportion to the last 10 participations that entered the market;
  After the countdown, the system announces the winning recommendation code, and the winning player can withdraw cash;
  During the countdown, the minimum participation fund is 1000SERO;
  
7. 96% of the player's funds go to the capital pool, 3% are for technical services, and 1% go to the guarantee fund;

8. Each account can view the direct push performance, as well as the performance of the 10 layers below.

9. The system is open source, the data is on the chain, the code is written, the decentralized bookkeeping, there is no back door, and it cannot be tampered with.

10. The system publishes contract rules and referral codes. Players can actively participate without referrals.

11. Open source code address: https://github.com/Delos888/WESTWORLD

`,
        rule1: '11. Default Referral Code: 2MM5NXX1L5'
    };


    zh_CN = {
        text: "语言",
        warn: "风险投资 谨慎参与",
        copySucc: "复制成功",
        copy: "复制",
        Button: {
            Ok: "确定",
            Cancel: "取消"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "我的账户",
            change: "切换",
            balance: "账户余额",
            invest: "投资",
            withdraw: "提现",
            reinvest: "复投",
            amount: "收款归集",
            rule: "合约规则",
            modal: {
                title: "投资",
                code: "推荐码",
                value: "金额",
                cancel: "取消",
                submit: "提交"
            },
            records: {
                id: "序号",
                title: "我的投资",
                time: "剩余天数",
                amount: "本金",
                profit: "收益",
                total: "合计",
                state: "状态",
                stateValues: ["已结算", "可提现", "未到期"]
            },
            recommend: {
                title: "我的业绩",
                invitationCode: "分享码",
                inviteNumber: "直推人数",
                achievement: "直推有效业绩",

                level: "层级",
                count: "人数",
                profit: "分享收益",
                achieveDetail: "有效业绩",
                state: "状态",
                stateValues: ["可拿", "不可拿"]
            }
        },
        rule: `
欢迎来到西部世界！

1、以推荐码作为连接关系

2、自由参与，金额 100-100000 SERO，每个账户累计最高参与10万SERO

3、参与后，立即显示30日后连本带利可提现数量，以及30日倒计时

4、静态收益：
  合约期30天，收益3%(即每天0.1%)，合约到期可连本带利自由提现

5、分享收益：
  a) 直接享受1层被分享人静态收益的50%
  b) 直接分享业绩达2万SERO，可享受2层被分享人静态收益
  c) 直接分享业绩每增加1万SERO，可增加享受多1层被分享人静态收益，最高享受10层
  d) 直推2-5层享受被分享人静态收益的5%，6-10层享受被分享人静态收益的1%
  e) 分享收益有烧伤，即计算分享收益时，按分享人与被分享人的本金两者中较小者计算
  f) 分享收益即时结算，可即时提现
  
6、保障机制：
  若系统出现余额无法良性循环时，自动触发保障基金“大奖倒计时”机制;
  倒计时长为6小时，期间收到场外参与资金即自动关闭计时器，系统继续正常运作;
  如再次出现余额无法良性循环时， 系统再次启动计时器 …如此良性循环;
  若6小时内再未收到场外参与资金，则“保障基金+资金池 余额”按照最后参与进场的10笔参与数量按比例分配;
  倒计时结束后，系统公布中奖推荐码，中奖玩家可进行提现;
  倒计时期间最小参与资金为1000SERO;
  
7、玩家资金96%进入资金池，3%为技术服务，1%进入保障基金；但玩家按100%本金计算收益。

8、每个账户可查看直推业绩，以及下方10层各层业绩。

9、系统开源，数据上链，代码写定，去中心化记账，没有后门，不可篡改。

10、系统公开合约规则及推荐码，玩家可在无推荐人的情况下主动参与。

11、开源代码地址：https://gitee.com/Delos/WESTWORLD

`,
        rule1: '12、默认推荐码: 2MM5NXX1L5'
    };


    ja_JP = {
        text: "言語",
        warn: "ベンチャーキャピタル",
        copySucc: "コピー成功",
        copy: "コピー",
        Button: {
            Ok: "確認する",
            Cancel: "キャンセルする"
        },
        fund: {
            title: "保障基金[启动中]",
            poolAmount: "资金池",
            fundAmount: "保障基金",
            total: "总金额",
            close: "中奖名单"
        },
        account: {
            title: "マイアカウント",
            change: "スイッチ",
            balance: "口座残高",
            invest: "投資する",
            withdraw: "撤退",
            reinvest: "再投資",
            amount: "私の収入",
            rule: "契約ルール",

            modal: {
                title: "投資",
                code: "招待コード",
                value: "量",
                cancel: "キャンセル",
                submit: "提出すること"
            },
            records: {
                id: "ID",
                title: "私の投資",
                time: "有効期限",
                amount: "元本金額",
                profit: "利益",
                state: "状態",
                total: "Total",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "私のパフォーマンス",
                invitationCode: "招待コード",
                inviteNumber: "招待数",
                achievement: "直販",

                level: "レベル",
                count: "ピープル",
                achieveDetail: "私の業績",
                state: "状態",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
西洋の世界へようこそ！

1.接続関係として紹介コードを使用する

2.無料参加、金額は100〜100000セロ、各アカウントは最大100,000セロを蓄積できます

3.参加直後、30日後の引き出し可能枚数と30日間のカウントダウンが表示されます

4.静的収入：
  契約期間は30日で、収入は3％（つまり1日あたり0.1％）で、利子や利益で自由に契約を取り下げることができます

5.収益分配：
  a）第一層の共有者の静的収入の50％を直接楽しむ
  b）20,000 SEROの直接共有パフォーマンス。2層共有の静的なメリットを享受できます。
  c）直接共有のパフォーマンスがSEROで10,000増加するごとに、共有される人物の静的収入の1ティアを最大10ティアまで楽しむことができます
  d）2〜5階を直接押すと、共有された人の静的収入の5％を享受し、6〜10階は、共有された人の静的収入を1％享受します
  e）共有収益には火傷があります。つまり、共有収益を計算するときは、共有者の元本と共有される人のうちの小さい方に基づいて計算されます
  f）共有収益のリアルタイム決済、即時引き出し
  
6.保証メカニズム：
  システムのバランスを適切に循環できない場合、保護ファンドの「賞金カウントダウン」メカニズムが自動的にトリガーされます。
  カウントダウン時間は6時間で、オフサイト参加資金を受け取る期間中は、タイマーが自動的にオフになり、システムは正常に動作し続けます。
  天びんが再び好循環になることができない場合、システムはタイマーを再び開始します...そのような好循環。
  オフサイト参加資金が6時間以内に受領されない場合、「保証資金+資金プール残高」は、市場に参入した最後の10回の参加に比例して割り当てられます。
  カウントダウンの後、システムは勝利の推奨コードを発表し、勝利したプレーヤーは現金を引き出すことができます。
  カウントダウン中の最小参加資金は1000SEROです。
  
7.プレーヤーの資金の96％は資本プールに、3％は技術サービスに、1％は保証基金に使われます。

8.各アカウントは、ダイレクトプッシュのパフォーマンスと、以下の10層のパフォーマンスを表示できます。

9.システムはオープンソースであり、データはチェーン上にあり、コードが記述され、分散型簿記があり、バックドアはなく、改ざんすることはできません。

10.システムは契約ルールと紹介コードを公開し、プレイヤーは紹介なしで積極的に参加できます。

11.オープンソースコードアドレス：https://github.com/Delos888/WESTWORLD

`,
        rule1: '11.デフォルトの紹介コード：2MM5NXX1L5'
    };


    be_BY  = {
        text: "язык",
        warn: "Венчурный капитал",
        copySucc: "Копирование успешно",
        copy: "копия",
        Button: {
            Ok: "Подтверждение",
            Cancel: "отменен"
        },
        fund: {
            title: "Защитный фонд [Инициирование]",
            poolAmount: "Фонд пула",
            fundAmount: "Фонд защиты",
            total: "Общая сумма",
            close: "Список победителей"
        },

        account: {
            title: "Мой аккаунт",
            change: "менять",
            balance: "Остаток средств",
            invest: "Вкладывать деньги",
            withdraw: "Снять со счета",
            reinvest: "Реинвестировать",
            amount: "Мой доход",
            rule:"Правило договора",
            game:{
                title:"Фонд защиты [Старт]",
                poolAmount:"Пул Фонд",
                fundAmount: "Фонд защиты",
                all:"Общая сумма"
            },
            modal: {
                title: "инвестиции",
                code: "Код приглашения",
                value: "Сумма",
                cancel: "Отмена",
                submit: "покоряться"
            },
            records: {
                id:"ID",
                title: "мои инвестиции",
                time: "Дата окончания срока",
                amount: "Основная сумма",
                profit: "прибыль",
                state:"Положение дел",
                total: "общий",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "Мое выступление",
                invitationCode: "Код приглашения",
                inviteNumber: "Количество приглашений",
                achievement: "Прямые продажи",

                level:"уровень",
                count:"Количество людей",
                achieveDetail:"Мое достижение",
                state:"Положение дел",
                stateValues: ["Yes", "No"]
            }
        },

        rule: `
Добро пожаловать в западный мир!

1. Используйте реферальный код в качестве отношения соединения

2. Бесплатное участие, сумма 100-100000 SERO, каждая учетная запись может накапливать максимум 100000 SERO

3. Сразу после участия будет отображено количество доступных снятий наличных через 30 дней и обратный отсчет за 30 дней.

4. Статический доход:
  Срок действия контракта составляет 30 дней, доход составляет 3% (т.е. 0,1% в день), и контракт может быть свободно отозван с процентами и прибылью.

5. Распределение доходов:
  а) Непосредственно наслаждайтесь 50% статического дохода первого человека
  б) Прямая совместная производительность 20 000 SERO, вы можете наслаждаться статическими преимуществами 2-го уровня общего
  c) При каждом увеличении производительности прямого обмена на 10000 SERO вы можете пользоваться еще одним уровнем статического дохода человека, которого вы разделяете, до 10 уровней
  d) Нажимайте на 2-5 этаж, чтобы получить 5% статического дохода общего человека, и на 6-10 этаж, чтобы получить статический доход общего человека 1%.
  e) Доход от совместного использования имеет ожоги, то есть при расчете дохода от совместного использования он рассчитывается на основе меньшего из принципала участника и лица, которому предоставляется совместное использование.
  f) Расчет в реальном времени общего дохода, мгновенный вывод
  
6. Гарантийный механизм:
  Если баланс системы не может быть виртуально зациклен, он автоматически запустит механизм «обратного отсчета» защитного фонда;
  Время обратного отсчета составляет 6 ч. В течение периода получения средств для участия за пределами площадки таймер автоматически отключается, и система продолжает работать в обычном режиме;
  Если баланс не может снова быть добродетельным циклом, система снова запускает таймер ... такой добродетельный цикл;
  Если в течение 6 часов не будут получены средства для участия вне площадки, «гарантийный фонд + остаток средств» будет распределен пропорционально последним 10 участиям на рынке.
  После обратного отсчета система объявляет код рекомендации победителя, и выигравший игрок может снять наличные;
  Во время обратного отсчета минимальный фонд участия составляет 1000SERO;
  
7. 96% средств игрока идут в пул капитала, 3% - на технические услуги и 1% - в гарантийный фонд;

8. Каждая учетная запись может просматривать производительность прямого толчка, а также производительность 10 слоев ниже.

9. Система с открытым исходным кодом, данные находятся в цепочке, код написан, децентрализованная бухгалтерия, задних дверей нет, и ее нельзя взломать.

10. Система публикует правила контрактов и реферальные коды. Игроки могут активно участвовать без рефералов.

11. Открыть исходный код по адресу: https://github.com/Delos888/WESTWORLD
        `,
        rule1: '11. Реферальный код по умолчанию: 2MM5NXX1L5'
    };

    ko_KR = {
        text: "언어",

        warn: "벤처 캐피탈",
        copySucc: "복사 성공",
        copy: "복사",
        Button: {
            Ok: "확인",
            Cancel: "취소"
        },
        fund: {
            title: "보호 기금 [시작]",
            poolAmount: "기금 풀",
            fundAmount: "보호 기금",
            total: "총액",
            close: "수상자 목록"
        },
        account: {
            title: "내 계정",
            change: "스위치",
            balance: "계좌 잔액",
            invest: "사다",
            withdraw: "철수",
            reinvest: "재투자",
            amount: "나의 소득",
            rule:"계약 규칙",
            game:{
                title:"보호 기금 [시작]",
                poolAmount:"자금 수영장",
                fundAmount: "보호 기금",
                all:"총액"
            },
            modal: {
                title: "투자",
                code: "초대 코드",
                value: "금액",
                cancel: "취소",
                submit: "제출"
            },
            records: {
                id:"ID",
                title: "내 투자",
                time: "만료일",
                amount: "교장",
                profit: "이익",
                state:"지위",
                stateValues: ["Done", "Yes", "No"]
            },
            recommend: {
                title: "내 공연",
                invitationCode: "초대 코드",
                inviteNumber: "초대장 수",
                achievement: "직접 판매",

                level:"수평",
                count:"사람",
                achieveDetail:"나의 업적",
                state:"지위",
                stateValues: ["Yes", "No"]
            }
        },
        rule: `
서방 세계에 오신 것을 환영합니다!

1. 참조 코드를 연결 관계로 사용하십시오.

2. 무료 참여, 금액은 100-100000 SERO이며, 각 계정은 최대 100,000 SERO를 축적 할 수 있습니다

3. 참여 직후, 30 일 후 사용 가능한 현금 인출 횟수 및 30 일 동안의 카운트 다운이 표시됩니다.

4. 정적 소득 :
  계약 기간은 30 일이고 수입은 3 % (예 : 하루 0.1 %)이며 계약은이자와 이익으로 자유롭게 철회 할 수 있습니다.

5. 수익 공유 :
  a) 1 차 공유자의 정적 소득의 50 %를 직접 즐기십시오
  b) 20,000 SERO의 직접 공유 성능, 2 계층 공유의 정적 이점을 누릴 수 있습니다
  c) 직접 공유 성능이 10,000 회 증가 할 때마다 공유하는 사람의 정적 수입을 10 단계까지 한 단계 더 누릴 수 있습니다.
  d) 2 ~ 5 층을 직접 밀어서 공동 인의 정적 수입의 5 %를, 6 ~ 10 층을 이용하여 공유 인의 정적 소득을 1 %로 즐기십시오.
  e) 공유 수익은 화상을 입었습니다. 즉, 공유 수익을 계산할 때 공유 주체와 공유하는 사람 중 적은 쪽을 기준으로 계산됩니다.
  f) 공유 수익의 실시간 결제, 즉시 인출
  
6. 보증 메커니즘 :
  시스템의 균형을 가상으로 순환 할 수없는 경우 자동으로 보호 기금 "상금 카운트 다운"메커니즘을 트리거합니다.
  카운트 다운 시간은 6 시간이며, 오프 사이트 참여 자금을받는 동안 타이머가 자동으로 꺼지고 시스템은 계속 정상적으로 작동합니다.
  저울이 다시 선순환이 될 수 없다면, 시스템은 타이머를 다시 시작합니다 ... 그런 선순환;
  6 시간 이내에 오프 사이트 참여 자금을받지 못하면 "보증 자 자금 + 자금 풀 잔액"은 시장에 들어간 마지막 10 개의 참여에 비례하여 할당됩니다.
  카운트 다운 후, 시스템은 당첨 추천 코드를 발표하고, 당첨 된 플레이어는 현금을 인출 할 수 있습니다.
  카운트 다운 동안 최소 참여 기금은 1000SERO입니다.
  
7. 플레이어 자금의 96 %는 자본 풀에, 3 %는 기술 서비스에, 1 %는 보증 기금에갑니다.

8. 각 계정은 직접 푸시 성능과 아래 10 개 계층의 성능을 볼 수 있습니다.

9. 시스템은 오픈 소스이고, 데이터는 체인에 있으며, 코드가 작성되고, 분산 된 부기, 백도어가 없으며, 변조 될 수 없습니다.

10. 시스템은 계약 규칙 및 추천 코드를 게시하며, 플레이어는 추천없이 적극적으로 참여할 수 있습니다.

11. 오픈 소스 코드 주소 : https://github.com/Delos888/WESTWORLD
        `,
        rule1: '11. 기본 추천 코드 : 2MM5NXX1L5'
    };

};

const lang = new Language();
export default lang