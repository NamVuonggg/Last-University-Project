import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useEntDataStore = defineStore('us-data', () => {
    const datas = reactive([
        {
            "id": 1,
            "name": "Apple",
            "money": 200000,
            "companyImg": "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/05/16/6463f480512fd.jpeg", // Aplle
            "companyIntro" : "Apple Inc. (formerly Apple Computer, Inc.) is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. It designs, develops, and sells consumer electronics, computer software, and online services. Devices include the iPhone, iPad, Mac, Apple Watch, Vision Pro, and Apple TV; operating systems include iOS, iPadOS, and macOS; and software applications and services include iTunes, iCloud, Apple Music, and Apple TV+.",
            "companyIntro2" : "Since 2011, Apple has been the world's largest company by market capitalization except when Microsoft held the position between January and June 2024. In 2022, Apple was the largest technology company by revenue, with US$394.3 billion. As of 2023, Apple was the fourth-largest personal computer vendor by unit sales, the largest manufacturing company by revenue, and the largest vendor of mobile phones in the world. It is one of the Big Five American information technology companies, alongside Alphabet (the parent company of Google), Amazon, Meta (the parent company of Facebook), and Microsoft. Apple was founded as Apple Computer Company on April 1, 1976, to produce and market Steve Wozniak's Apple I personal computer. The company was incorporated by Wozniak and Steve Jobs in 1977. Its second computer, the Apple II, became a best seller as one of the first mass-produced microcomputers. Apple introduced the Lisa in 1983 and the Macintosh in 1984, as some of the first computers to use a graphical user interface and a mouse. By 1985, the company's internal problems included the high cost of its products and power struggles between executives. That year Jobs left Apple to form NeXT, Inc., and Wozniak withdrew to other ventures. The market for personal computers expanded and evolved throughout the 1990s, and Apple lost considerable market share to the lower-priced Wintel duopoly of the Microsoft Windows operating system on Intel-powered PC clones. In 1997, Apple was weeks away from bankruptcy. To resolve its failed operating system strategy and entice Jobs's return, it bought NeXT. Over the next decade, Jobs guided Apple back to profitability through several tactics including introducing the iMac, iPod, iPhone, and iPad to critical acclaim, launching the 'Think different' campaign and other memorable advertising campaigns, opening the Apple Store retail chain, and acquiring numerous companies to broaden its product portfolio. Jobs resigned in 2011 for health reasons, and died two months later. He was succeeded as CEO by Tim Cook. Apple has received criticism regarding its contractors' labor practices, its environmental practices, and its business ethics, including anti-competitive practices and materials sourcing. Nevertheless, it has a large following and a high level of brand loyalty. It has been consistently ranked as one of the world's most valuable brands. Apple became the first publicly traded U.S. company to be valued at over $1 trillion in August 2018, then at $2 trillion in August 2020, and at $3 trillion in January 2022. In June 2024, it was valued at just over $3.2 trillion.",
            "companyLogo" : "https://cdn-icons-png.flaticon.com/128/0/747.png",
            "companyHQ" : "https://static01.nyt.com/images/2019/05/31/us/31applehq-01alt/31applehq-01alt-superJumbo.jpg",
            "companyHistory" : "companies In 1976,Steve Jobs and Steve Wozniak co-founded Apple in Jobs's parents' home on Crist Drive inLos Altos, California.Wozniak called the popular belief that the company was founded in the garage 'a bit of a myth',although they moved some operations to the garage when the bedroom became too crowded. TheApple Iis Apple's first product, designed by Wozniak and sold as an assembled circuit board without the required keyboard, monitor, power supply, and the optional case. TheApple II Pluswas introduced in 1979, designed primarily by Wozniak. Apple Computer Company was founded on April 1, 1976, bySteve Jobs,Steve Wozniak, andRonald Wayneas apartnership. The company's first product is theApple I, a computer designed and hand-built entirely by Wozniak. To finance its creation, Jobs sold hisVolkswagen Bus, and Wozniak sold hisHP-65calculator. Neither received the full selling price but in total earned$1,300(equivalent to $7,000 in 2023). Wozniak debuted the first prototypeApple Iat theHomebrew Computer Clubin July 1976. The Apple I was sold as amotherboardwithCPU,RAM, and basic textual-video chips—a base kit concept which was not yet marketed as a complete personal computer. It was priced soon after debut for$666.66(equivalent to $3,600 in 2023).  Wozniak later said he was unaware of the coincidentalmark of the beastin the number 666, and that he came up with the price because he liked 'repeating digits'. Apple Computer, Inc. was incorporated on January 3, 1977, without Wayne, who had left and sold his share of the company back to Jobs and Wozniak for $800 only twelve days after having co-founded it. MultimillionaireMike Markkulaprovided essential business expertise and funding of$250,000(equivalent to $1,257,000 in 2023) to Jobs and Wozniak during the incorporation of Apple. During the first five years of operations, revenues grew exponentially, doubling about every four months. Between September 1977 and September 1980, yearly sales grew from $775,000 toUS$118million, an average annual growth rate of 533%. TheApple II, also designed by Wozniak, was introduced on April 16, 1977, at the firstWest Coast Computer Faire. It differs from its major rivals, theTRS-80andCommodore PET, because of its character cell-based color graphics andopen architecture. The Apple I and early Apple II models use ordinaryaudio cassette tapesas storage devices, which were superseded by the5 1⁄4-inchfloppy diskdrive and interface called theDisk IIin 1978. The Apple II was chosen to be the desktop platform for the firstkiller applicationof the business world:VisiCalc, aspreadsheetprogramreleased in 1979.[29]VisiCalc created a business market for the Apple II and gave home users an additional reason to buy an Apple II: compatibility with the office,[29]but Apple II market share remained behindhome computersmade by competitors such asAtari,Commodore, andTandy. On December 12, 1980, Apple (ticker symbol 'AAPL') went public selling 4.6million shares at $22 per share ($.10 per share when adjusting forstock splitsas of September3, 2022), generating over $100million, which was more capital than any IPO sinceFord Motor Companyin 1956. By the end of the day, 300millionaires were created, including Jobs and Wozniak, from a stock price of $29 per shareand a market cap of $1.778billion.",
            "companyProductImg" : "https://www.topteksystem.com/wp-content/uploads/apple-products-2018-100782368-large-2.jpg",
            "companyProduct1": "Macintosh, commonly known as Mac, is Apple's line of personal computers that use the company's proprietary macOS operating system. Personal computers were Apple's original business line, but as of the end of 2023 they account for only about eight percent of the company's revenue.",
            "companyProduct2name" : "iPhone",
            "companyProduct2Img" : "https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg",
            "companyProduct2" : "The iPhone is Apple's line of smartphones, which run the iOS operating system. The first iPhone was unveiled by Steve Jobs on January 9, 2007. Since then, new models have been released every year. When it was introduced, its multi-touch screen was described as 'revolutionary' and a 'game-changer' for the mobile phone industry. The device has been credited with creating the app economy. iOS is one of the two largest smartphone platforms in the world alongside Android. The iPhone has generated large profits for the company, and is credited with helping to make Apple one of the world's most valuable publicly traded companies. As of the end of 2023, the iPhone accounts for more than half of the company's revenue.",
            "companyProduct3name" : "Ipad",
            "companyProduct3Img" : "https://media.wired.jp/photos/61ce60cf2c3b389d2feae672/master/pass/ab34bb3d6234e4e0982450f5d67b416d.jpeg",
            "companyProduct3" : "The iPad is Apple's line of tablets which run iPadOS. The first-generation iPad was announced on January 27, 2010. The iPad is mainly marketed for consuming multimedia, creating art, working on documents, videoconferencing, and playing games. The iPad lineup consists of several base iPad models, and the smaller iPad Mini, upgraded iPad Air, and high-end iPad Pro. Apple has consistently improved the iPad's performance, with the iPad Pro adopting the same M1 and M2 chips as the Mac; but the iPad still receives criticism for its limited OS. As of September 2020, Apple has sold more than 500 million iPads, though sales peaked in 2013.[185] The iPad still remains the most popular tablet computer by sales as of the second quarter of 2020, and accounted for seven percent of the company's revenue as of the end of 2023. Apple sells several iPad accessories, including the Apple Pencil, Smart Keyboard, Smart Keyboard Folio, Magic Keyboard, and several adapters.",
            "companyProduct4name" : "Other Products",
            "companyProduct4Img" : "https://images.macrumors.com/t/e3LPJkid1hrbCU3zbjkRQMCjV78=/1600x0/article-new/2023/12/Top-5-Apple-Products-to-Look-Forward-to-in-2024-Feature.jpg",
            "companyProduct4" : "Apple makes several other products that it categorizes as 'Wearables, Home and Accessories'. These products include the AirPods line of wireless headphones, Apple TV digital media players, Apple Watch smartwatches, Beats headphones, HomePod smart speakers, and the Vision Pro mixed reality headset. As of the end of 2023, this broad line of products comprises about ten percent of the company's revenues.",
            "companyProduct5name" : "Services",
            "companyProduct5Img" : "https://9to5mac.com/wp-content/uploads/sites/6/2022/04/apple-services.jpg?quality=82&strip=all&w=1600",
            "companyProduct5" : "Apple offers a broad line of services, including advertising in the App Store and Apple News app, the AppleCare+ extended warranty plan, the iCloud+ cloud-based data storage service, payment services through the Apple Card credit card and the Apple Pay processing platform, digital content services including Apple Books, Apple Fitness+, Apple Music, Apple News+, Apple TV+, and the iTunes Store. As of the end of 2023, services comprise about 22% of the company's revenue.  In 2019, Apple announced it would be making a concerted effort to expand its service revenues.",
            "companyMarketingName" : "Marketing",
            "companyMarketingImg" : "https://www.tailorbrands.com/wp-content/uploads/2021/01/apple-evolution-thumbnail.jpg",
            "companyMarketing" : "According to Steve Jobs, the company's name was inspired by his visit to an apple farm while on a fruitarian diet. Jobs thought the name 'Apple' was 'fun, spirited and not intimidating'. Steve Jobs and Steve Wozniak were fans of the Beatles, but Apple Inc. had name and logo trademark issues with Apple Corps Ltd., a multimedia company started by the Beatles in 1968. This resulted in a series of lawsuits and tension between the two companies. These issues ended when they settled their lawsuit in 2007. Apple's first logo, designed by Ron Wayne, depicts Sir Isaac Newton sitting under an apple tree. It was almost immediately replaced by Rob Janoff's 'rainbow Apple', the now-familiar rainbow-colored silhouette of an apple with a bite taken out of it. On August 27, 1999,  Apple officially dropped the rainbow scheme and began to use monochromatic logos nearly identical in shape to the previous rainbow incarnation. Apple evangelists were actively engaged by the company at one time, but this was after the phenomenon had already been firmly established. Apple evangelist Guy Kawasaki has called the brand fanaticism 'something that was stumbled upon,' while Ive claimed in 2014 that 'people have an incredibly personal relationship' with Apple's products. Fortune magazine named Apple the most admired company in the United States in 2008, and in the world from 2008 to 2012. On September 30, 2013, Apple surpassed Coca-Cola to become the world's most valuable brand in the Omnicom Group's 'Best Global Brands' report.  Boston Consulting Group has ranked Apple as the world's most innovative brand every year as of 2005. As of January 2021, 1.65 billion Apple products were in active use. In February 2023, that number exceeded 2 billion devices. "
        },
        {
            "id": 2,
            "name": "Oracle",
            "money": 300000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/5969/5969229.png" // Oracle
        },
        {
            "id": 3,
            "name": "Microsoft",
            "money": 400000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Microsoft
        },
        {
            "id": 4,
            "name": "Tesla",
            "money": 500000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Tesla
        },
        {
            "id": 5,
            "name": "Meta",
            "money": 600000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Meta
        },
        {
            "id": 6,
            "name": "Meta",
            "money": 700000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Meta
        },
        {
            "id": 7,
            "name": "Meta",
            "money": 800000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Meta
        },
        {
            "id": 8,
            "name": "Meta",
            "money": 900000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Meta
        },
        {
            "id": 9,
            "name": "Meta",
            "money": 100000,
            "companyImg": "https://cdn-icons-png.flaticon.com/128/0/747.png" // Meta
        }
    ])
  
    return { datas }
})