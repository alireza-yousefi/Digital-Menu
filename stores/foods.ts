import { defineStore } from 'pinia';
interface Food {
    id: number;
    title: string;
    category: string;
    image: string;
    price: number;
    descriptions: {
      short: string;
      long: string;
    };
    time: number;
    Combinations: { title: string; calorie: number }[];
    rate: number;
    comments: Array<{ name: string; avatar: string | null; date: string; rate: number; message: string }>;
    animate: string;
  }
export const useFoodStore = defineStore('foodStore', {
    state: () => ({
        foodList: [
            {
                id: 2,
                title: 'کاپـوچیــنو',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/pexels-orlovamaria-4916561-removebg-preview.png',
                price: 73,
                descriptions: {
                    short: 'قهوه‌ی داغ، کف شیر، طعم‌دهی ملایم شکلات',
                    long: 'کاپوچینو ترکیبی از قهوه‌ی داغ با کف شیر نرم و طعمی ملایم از شکلات است که تجربه‌ای آرامش‌بخش برای شروع روزتان می‌باشد.'
                },
                time: 10,
                Combinations: [
                    { title: "شکلات", calorie: 30 },
                    { title: "شیر", calorie: 42 },
                    { title: "قهوه", calorie: 80 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 1,
                title: 'چیــز کــیــک',
                category: 'کیک',
                image: '/Digital-Menu/img/pexels-elifgokce787-16871293-removebg-preview.png',
                price: 86,
                descriptions: {
                    short: 'پنیر خامه‌ای، بیسکوییت، لایه‌ای از سس شکلات',
                    long: 'چیز کیک با لایه‌ای از پنیر خامه‌ای غلیظ و بیسکوییت خرد شده، پوشیده از سس شکلاتی که طعمی کرمی و شیرین دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "خامه", calorie: 25 },
                    { title: "پودر قند", calorie: 8 },
                    { title: "بیسکویت", calorie: 47 },
                    { title: "پنیر خامه‌ای", calorie: 120 },
                    { title: "شکلات", calorie: 30 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1',
                
            },

            {
                id: 3,
                title: 'آیـس لـته',
                image: '/Digital-Menu/img/ice-latte2.png',
                category: 'قهوه سرد',
                price: 76,
                descriptions: {
                    short: 'قهوه سرد، شیر خنک، همراه با یخ',
                    long: 'آیس لته ترکیبی از قهوه سرد و شیر خنک است که همراه با یخ سرو می‌شود و نوشیدنی ایده‌آلی برای روزهای گرم تابستانی است.'
                },
                time: 10,
                Combinations: [
                    { title: "شیر", calorie: 42 },
                    { title: "قهوه", calorie: 80 },
                    { title: "یخ", calorie: 15 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-bounce'
            },
            {
                id: 4,
                title: 'شیک توت فرنگی',
                image: '/Digital-Menu/img/shake-toot.png',
                price: 90,
                category: 'شیک',
                descriptions: {
                    short: 'توت فرنگی تازه، بستنی، شیر خامه‌ای',
                    long: 'شیک توت فرنگی با ترکیب توت فرنگی تازه، بستنی و شیر خامه‌ای به شما طعمی خوشمزه و خنک می‌دهد که در هر فصلی لذت‌بخش است.'
                },
                time: 10,
                Combinations: [
                    { title: "توت فرنگی", calorie: 30 },
                    { title: "بستنی", calorie: 120 },
                    { title: "شیر خامه‌ای", calorie: 80 }
                ],
                
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-bounce'
            },
            {
                id: 5,
                title: 'سیب زمینی',
                image: '/Digital-Menu/img/frise.png',
                category: 'غذا',
                price: 98,
                descriptions: {
                    short: 'سیب زمینی سرخ شده، سس مخصوص، طعم‌دهی آویشن و لیمو',
                    long: 'سیب زمینی سرخ شده با طعم آویشن و لیمو، سرو شده با سس مخصوص که طعمی منحصر به فرد و لذیذ به آن می‌بخشد.'
                },
                time: 10,
                Combinations: [
                    { title: "سیب زمینی", calorie: 100 },
                    { title: "سس مخصوص", calorie: 40 },
                    { title: "آویشن", calorie: 5 },
                    { title: "لیمو", calorie: 5 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 6,
                title: 'اسپرسو',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/Espresso.png',
                price: 55,
                descriptions: {
                    short: 'قهوه‌ی غلیظ و تند، بهترین برای شروع روز',
                    long: 'اسپرسو یک قهوه‌ی غلیظ و تند است که به عنوان بهترین انتخاب برای شروع روز به شمار می‌رود. طعمی پرانرژی و عمیق دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 7,
                title: 'دوپیو (دوبل)',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/Espresso.png',
                price: 60,
                descriptions: {
                    short: 'دو شات اسپرسو برای علاقه‌مندان به قهوه پرقدرت',
                    long: 'دوپیو (دوبل) شامل دو شات قهوه اسپرسو است که برای علاقه‌مندان به طعم‌های پرقدرت و انرژی‌بخش ایده‌آل است.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 160 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 8,
                title: 'آمریکانو',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/Espresso.png',
                price: 65,
                descriptions: {
                    short: 'قهوه رقیق با آب گرم، انتخابی ملایم‌تر',
                    long: 'آمریکانو ترکیبی از قهوه رقیق با آب گرم است که طعمی ملایم و لطیف‌تر از اسپرسو به شما می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 9,
                title: 'لته',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/Espresso.png',
                price: 68,
                descriptions: {
                    short: 'قهوه با کف شیر نرم، طعم ملایم و کرمی',
                    long: 'لته یک قهوه با کف شیر نرم و طعمی ملایم و کرمی است که یک انتخاب عالی برای کسانی است که از طعم‌های ملایم‌تر لذت می‌برند.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 10,
                title: 'موکا',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/mocha.png',
                price: 75,
                descriptions: {
                    short: 'مخلوط قهوه، شکلات و کف شیر',
                    long: 'موکا یک ترکیب خوشمزه از قهوه، شکلات و کف شیر است که برای کسانی که طعم قهوه و شکلات را به طور همزمان دوست دارند، بسیار مناسب است.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شکلات", calorie: 30 },
                    { title: "شیر", calorie: 42 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 11,
                title: 'ماکیاتو',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/mocha.png',
                price: 70,
                descriptions: {
                    short: 'شات اسپرسو با کمی کف شیر',
                    long: 'ماکیاتو شامل یک شات اسپرسو است که با کمی کف شیر سرو می‌شود و انتخابی عالی برای کسانی است که طعم قوی قهوه را می‌پسندند.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 12,
                title: 'ترک',
                category: 'قهوه بار',
                image: '/Digital-Menu/img/Espresso.png',
                price: 65,
                descriptions: {
                    short: 'قهوه‌ای سنتی با عطر و طعمی خاص',
                    long: 'قهوه ترک با طعمی عمیق و خوش‌عطر، تجربه‌ای خاص از قهوه است که به شما طعمی سنتی و اصیل می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 },
                    { title: "شکلات", calorie: 30 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 13,
                title: 'آیس کافی',
                category: 'قهوه سرد',
                image: '/Digital-Menu/img/ice-latte2.png',
                price: 80,
                descriptions: {
                    short: 'قهوه خنک و انرژی‌بخش',
                    long: 'آیس کافی یک قهوه خنک و انرژی‌بخش است که به‌ویژه در روزهای گرم تابستانی می‌تواند نوشیدنی عالی باشد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 14,
                title: 'آیس موکا',
                category: 'قهوه سرد',
                image: '/Digital-Menu/img/ice-latte2.png',
                price: 85,
                descriptions: {
                    short: 'ترکیبی از قهوه، شکلات و یخ',
                    long: 'آیس موکا ترکیب قهوه، شکلات و یخ است که طعمی خنک و شکلاتی به شما می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 },
                    { title: "شکلات", calorie: 30 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 15,
                title: 'آفوگاتو',
                category: 'قهوه سرد',
                image: '/Digital-Menu/img/Affogato.png',
                price: 95,
                descriptions: {
                    short: 'ترکیب قهوه و بستنی، خوشمزه و خاص',
                    long: 'آفوگاتو یک ترکیب خوشمزه از قهوه و بستنی است که طعمی خامه‌ای و داغ و سرد را همزمان به شما می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 },
                    { title: "بستنی", calorie: 120 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 16,
                title: 'فراپاچینو',
                category: 'قهوه سرد',
                image: '',
                price: 90,
                descriptions: {
                    short: 'نوشیدنی قهوه خنک و خامه‌ای',
                    long: 'فراپاچینو یک نوشیدنی قهوه خامه‌ای و خنک است که طعمی ملایم و شیرین دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "قهوه", calorie: 80 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 17,
                title: 'اسموتی سرو کاشمر',
                category: 'آبمیوه',
                image: '',
                price: 100,
                descriptions: {
                    short: 'اسموتی با طعم تازه و طبیعی میوه‌های کاشمر',
                    long: 'اسموتی سرو کاشمر با طعم طبیعی و تازه میوه‌های کاشمر یکی از بهترین انتخاب‌ها برای دوستداران میوه‌های طبیعی است.'
                },
                time: 10,
                Combinations: [
                    { title: "اسموتی میوه", calorie: 120 },
                    { title: "یخ", calorie: 10 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 18,
                title: 'اسموتی سرو بهشت',
                category: 'آبمیوه',
                image: '',
                price: 105,
                descriptions: {
                    short: 'اسموتی با طعم‌های شاداب و خوشمزه',
                    long: 'اسموتی سرو بهشت یک نوشیدنی شاداب و خوشمزه است که طعمی منحصر به فرد و تازه دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "اسموتی میوه", calorie: 120 },
                    { title: "یخ", calorie: 10 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 19,
                title: 'اسموتی سرو فریومد',
                category: 'آبمیوه',
                image: '',
                price: 100,
                descriptions: {
                    short: 'ترکیب طبیعی میوه‌های تازه فریومد',
                    long: 'اسموتی سرو فریومد ترکیبی از میوه‌های تازه و طبیعی است که به شما طعمی انرژی‌بخش و سالم می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "اسموتی میوه", calorie: 120 },
                    { title: "یخ", calorie: 10 }
                ],
                
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 20,
                title: 'موکتل هفت سرو',
                category: 'آبمیوه',
                image: '',
                price: 110,
                descriptions: {
                    short: 'موکتلی با ترکیب طعم‌های تازه',
                    long: 'موکتل هفت سرو با طعم‌های طبیعی و تازه، ترکیبی خوشمزه است که به شما طعمی عالی از میوه‌ها می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "موکتل میوه", calorie: 100 },
                    { title: "یخ", calorie: 10 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 21,
                title: 'موکتل سرو زربین',
                category: 'آبمیوه',
                image: '',
                price: 115,
                descriptions: {
                    short: 'ترکیبی خوشمزه و خاص از میوه‌های تازه',
                    long: 'موکتل سرو زربین یک ترکیب منحصر به فرد از میوه‌های تازه است که طعمی خاص و لذیذ دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "موکتل میوه", calorie: 100 },
                    { title: "یخ", calorie: 10 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 22,
                title: 'لیموناد',
                category: 'آبمیوه',
                image: '',
                price: 60,
                descriptions: {
                    short: 'نوشیدنی لیمویی تازه و خنک',
                    long: 'لیموناد یک نوشیدنی لیمویی تازه و خنک است که در روزهای گرم، طعمی دلچسب و آرامش‌بخش دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "لیمو", calorie: 15 },
                    { title: "شکر", calorie: 30 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 23,
                title: 'موکتل سرو ساردین',
                category: 'آبمیوه',
                image: '',
                price: 120,
                descriptions: {
                    short: 'موکتل طعم‌دار با ویژگی‌های خاص',
                    long: 'موکتل سرو ساردین یک نوشیدنی طعم‌دار و خاص است که به شما تجربه‌ای خوشمزه از ترکیب طعم‌های مختلف می‌دهد.'
                },
                time: 10,
               Combinations : [
                    {title:"شکر قهوه ای", calorie:2.5},
                    {title:" پودر قند", calorie:8},
                    {title:"بیسکویت", calorie:47}
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 24,
                title: 'چای ساده',
                category: 'چای و دمنوش',
                image: '',
                price: 30,
                descriptions: {
                    short: 'چای سنتی برای آرامش خاطر',
                    long: 'چای ساده و سنتی که می‌تواند برای آرامش و رفع خستگی مفید باشد. این چای طعم ملایم و دلپذیری دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "چای", calorie: 2 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 25,
                title: 'کیک شکلاتی',
                category: 'کیک',
                image: '',
                price: 85,
                descriptions: {
                    short: 'کیک با طعم شکلاتی دلپذیر',
                    long: 'کیک شکلاتی لذیذ با طعمی غنی و بافتی نرم که می‌تواند تجربه‌ای خوشمزه و دلپذیر برای شما باشد.'
                },
                time: 10,
                Combinations: [
                    { title: "آرد", calorie: 95 },
                    { title: "شکلات", calorie: 30 },
                    { title: "شکر", calorie: 40 },
                    { title: "تخم مرغ", calorie: 70 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 26,
                title: 'پنینی مرغ',
                category: 'غذا',
                image: '/Digital-Menu/img/Chicken-panini.png',
                price: 120,
                descriptions: {
                    short: 'پنینی با مرغ، سبزیجات تازه و سس مخصوص',
                    long: 'این پنینی لذیذ با مرغ گریل شده، سبزیجات تازه و سس مخصوص سرو می‌شود که طعمی خوشمزه و خاص به شما می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "نان پنینی", calorie: 150 },
                    { title: "مرغ", calorie: 200 },
                    { title: "پنیر", calorie: 100 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 27,
                title: 'پنینی بیکن',
                category: 'غذا',
                image: '/Digital-Menu/img/panini-bacon.png',
                price: 130,
                descriptions: {
                    short: 'پنینی با بیکن و پنیر، طعمی خوشمزه',
                    long: 'پنینی بیکن با ترکیب خوشمزه‌ای از بیکن دودی و پنیر آب شده، برای افرادی که عاشق طعم‌های شور و پرانرژی هستند.'
                },
                time: 10,
                Combinations: [
                    { title: "نان پنینی", calorie: 150 },
                    { title: "بیکن", calorie: 200 },
                    { title: "پنیر", calorie: 100 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 28,
                title: 'شربت سرومهر',
                category: 'شربت و عرقیجات',
                image: '',
                price: 70,
                descriptions: {
                    short: 'بیدمشک , هل , نسترن , زعفران',
                    long: 'شربت سرومهر با ترکیب خاصی از بیدمشک، هل، نسترن و زعفران، طعمی تازه و آرامش‌بخش دارد که می‌تواند شما را از خستگی روزمره خلاص کند.'
                },
                time: 10,
                Combinations: [
                    { title: "شربت", calorie: 80 }
                ],
                
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 29,
                title: 'شربت سروناز',
                category: 'شربت و عرقیجات',
                image: '',
                price: 70,
                descriptions: {
                    short: 'بهارنارنج , نعنا , تخم شربتی , لیمو',
                    long: 'شربت سروناز با ترکیب بهارنارنج، نعنا، تخم شربتی و لیمو یک نوشیدنی خنک و خوشمزه است که طعمی ترش و شیرین دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "شربت", calorie: 80 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 30,
                title: 'شیک وانیل',
                category: 'شیک',
                image: '',
                price: 95,
                descriptions: {
                    short: 'شیک وانیلی با طعم ملایم و خوشمزه',
                    long: 'شیک وانیل با طعمی ملایم و شیرین، انتخابی عالی برای افرادی است که علاقه‌مند به نوشیدنی‌های نرم و خوشمزه هستند.'
                },
                time: 10,
                Combinations: [
                    { title: "وانیل", calorie: 10 },
                    { title: "شیر", calorie: 42 },
                    { title: "بستنی", calorie: 120 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 31,
                title: 'شیک شکلات',
                category: 'شیک',
                image: '',
                price: 100,
                descriptions: {
                    short: 'شیک شکلاتی غلیظ و خوش‌طعم',
                    long: 'شیک شکلاتی غلیظ با طعمی غنی از شکلات که می‌تواند تجربه‌ای خاص و دلپذیر از طعم شکلاتی برای شما فراهم کند.'
                },
                time: 10,
                Combinations: [
                    { title: "شکلات", calorie: 30 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 32,
                title: 'شیک نوتلا',
                category: 'شیک',
                image: '',
                price: 110,
                descriptions: {
                    short: 'شیک نوتلا با طعم قوی شکلات فندقی',
                    long: 'شیک نوتلا با طعمی غنی از شکلات فندقی و نوتلا، برای کسانی که عاشق طعم‌های قوی شکلاتی هستند.'
                },
                time: 10,
                Combinations: [
                    { title: "نوتلا", calorie: 200 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 33,
                title: 'شیک بادام زمینی',
                category: 'شیک',
                image: '',
                price: 115,
                descriptions: {
                    short: 'شیک خوشمزه با کره بادام زمینی و شیر',
                    long: 'شیک بادام زمینی با طعمی غنی از کره بادام زمینی و شیر، گزینه‌ای عالی برای طرفداران طعم‌های مغذی و خوشمزه.'
                },
                time: 10,
                Combinations: [
                    { title: "کره بادام زمینی", calorie: 90 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 34,
                title: 'شیک اسپرسو',
                category: 'شیک',
                image: '/Digital-Menu/img/Espresso-shake.png',
                price: 105,
                descriptions: {
                    short: 'شیک قهوه با طعم غلیظ اسپرسو',
                    long: 'شیک اسپرسو با طعمی غلیظ و پرانرژی از قهوه اسپرسو، برای کسانی که به طعم قهوه شدید علاقه دارند.'
                },
                time: 10,
                Combinations: [
                    { title: "اسپرسو", calorie: 80 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 35,
                title: 'شیک موز شکلات',
                category: 'شیک',
                image: '',
                price: 120,
                descriptions: {
                    short: 'شیک ترکیبی موز و شکلات برای طعمی متفاوت',
                    long: 'شیک موز شکلات یک ترکیب خوشمزه از موز و شکلات است که طعمی منحصر به فرد و دلپذیر به شما می‌دهد.'
                },
                time: 10,
                Combinations: [
                    { title: "موز", calorie: 90 },
                    { title: "شکلات", calorie: 30 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 36,
                title: 'شیک توت فرنگی',
                category: 'شیک',
                image: '',
                price: 115,
                descriptions: {
                    short: 'شیک توت فرنگی با طعم میوه تازه و طبیعی',
                    long: 'شیک توت فرنگی با طعمی تازه و طبیعی از توت فرنگی‌های تازه، انتخابی عالی برای کسانی که به طعم‌های میوه‌ای علاقه دارند.'
                },
                time: 10,
                Combinations: [
                    { title: "توت فرنگی", calorie: 30 },
                    { title: "شیر خامه‌ای", calorie: 80 },
                    { title: "بستنی", calorie: 120 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 37,
                title: 'شیک موز',
                category: 'شیک',
                image: '',
                price: 105,
                descriptions: {
                    short: 'شیک موزی شیرین و خوشمزه',
                    long: 'شیک موز با طعمی شیرین و خوشمزه، گزینه‌ای عالی برای طرفداران طعم موز است.'
                },
                time: 10,
                Combinations: [
                    { title: "موز", calorie: 90 },
                    { title: "شیر", calorie: 42 },
                    { title: "بستنی", calorie: 120 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 38,
                title: 'آرامش سرو',
                category: 'چای و دمنوش',
                image: '',
                price: 30,
                descriptions: {
                    short: 'بهارنارنج , گل گاو زبان , به لیمو',
                    long: 'دمنوش آرامش سرو با ترکیبی از بهارنارنج، گل گاو زبان و به لیمو، انتخابی آرام‌بخش و تسکین‌دهنده است.'
                },
                time: 10,
                Combinations: [
                    { title: "دمنوش", calorie: 10 },
                    { title: "عسل", calorie: 40 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 39,
                title: 'چای دارچین/زنجبیل',
                category: 'چای و دمنوش',
                image: '',
                price: 30,
                descriptions: {
                    short: 'چای سنتی برای آرامش خاطر',
                    long: 'چای دارچین و زنجبیل با طعمی گرم و آرامش‌بخش، انتخابی عالی برای رفع سرماخوردگی یا تسکین دردهای بدن است.'
                },
                time: 10,
                Combinations: [
                    { title: "چای", calorie: 2 },
                    { title: "زنجبیل", calorie: 5 },
                    { title: "دارچین", calorie: 5 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 40,
                title: 'دمنوش آویشن/عسل',
                category: 'چای و دمنوش',
                image: '',
                price: 58,
                descriptions: {
                    short: 'چای سنتی برای آرامش خاطر',
                    long: 'دمنوش آویشن و عسل به‌خاطر خواص ضدعفونی‌کنندگی و آرامش‌بخشی‌اش، گزینه‌ای ایده‌آل برای تقویت سیستم ایمنی بدن است.'
                },
                time: 10,
                Combinations: [
                    { title: "آویشن", calorie: 2 },
                    { title: "عسل", calorie: 40 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 41,
                title: 'گلدن وانیل',
                category: 'چای و دمنوش',
                image: '',
                price: 68,
                descriptions: {
                    short: 'سیب , میخک , دارچین',
                    long: 'چای گلدن وانیل با ترکیبی از سیب، میخک و دارچین، طعمی دلپذیر و آرامش‌بخش برای شما فراهم می‌آورد.'
                },
                time: 10,
                Combinations: [
                    { title: "وانیل", calorie: 10 },
                    { title: "شیر", calorie: 42 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 42,
                title: 'نعنا فلفلی',
                category: 'چای و دمنوش',
                image: '',
                price: 58,
                descriptions: {
                    short: 'چای سنتی برای آرامش خاطر',
                    long: 'چای نعنا فلفلی با طعمی تند و تازه، یک انتخاب عالی برای تقویت بدن و رفع خستگی است.'
                },
                time: 10,
                Combinations: [
                    { title: "نعناع", calorie: 10 },
                    { title: "آب", calorie: 0 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
            {
                id: 43,
                title: 'هات چاکلت',
                category: 'نوشیدنی گرم',
                image: '',
                price: 68,
                descriptions: {
                    short: '',
                    long: 'هات چاکلت، نوشیدنی گرم و شیرین با طعم غنی شکلاتی که در روزهای سرد زمستان می‌تواند شما را گرم و شاداب نگه دارد.'
                },
                time: 10,
                Combinations: [
                    { title: "شکلات", calorie: 30 },
                    { title: "شیر", calorie: 42 },
                    { title: "خامه", calorie: 25 }
                ],
                rate:2,
                comments : [
                    {name:"علی", avatar:null,date:"",rate:5 , message: 'عالی بود' },
                ],
                animate: 'animate-spin1'
            },
    ]as Food[], // تعریف نوع آرایه
    }),
    getters: {
        getFoodByCategory: (state) => (category: string) => {
          return category === 'همه' ? state.foodList : state.foodList.filter((item: any) => item.category === category);
        },
        getFoodByID: (state) => (id: number) => {
          return state.foodList.find((item: any) => item.id === id);
        },
        // اضافه کردن متد جستجو برای جستجو بر اساس کلمه در عنوان، دسته‌بندی، و توضیحات
        searchFood: (state) => (query: string) => {
          const queryLowerCase = query.toLowerCase();
          return state.foodList.filter((item: Food) => 
            item.title.toLowerCase().includes(queryLowerCase) ||
            item.category.toLowerCase().includes(queryLowerCase) ||
            item.descriptions.short.toLowerCase().includes(queryLowerCase) ||
            item.descriptions.long.toLowerCase().includes(queryLowerCase)
          );
        }
      },
      actions: {
        addFood(food: Food) {
          this.foodList.push(food);
        },
        removeFood(id: number) {
          this.foodList = this.foodList.filter((food) => food.id !== id);
        },
      },
  })
