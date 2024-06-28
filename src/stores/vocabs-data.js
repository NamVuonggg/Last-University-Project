import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useVocabsDataStore = defineStore('vocabs-data', () =>{

    const vocabs = reactive([
        {
            "id": 1,
            "name": "Everyday business vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/3135/3135691.png",
            "content":[
                {   
                    "id":1,
                    "word": "ASAP (As Soon As Possible)",
                    "mean": "To do something ASAP means to do it fast, with urgency."
                },
                {   
                    "id":2,
                    "word": "Backburner",
                    "mean": "To put something on the backburner means to set aside tasks or projects for a while."
                },
                {
                    "id":3,
                    "word": "Balls in the air",
                    "mean": "No, it's not what you think it is. If you have multiple tasks or responsibilities to handle at the same time, you have many 'balls in the air.'"
                },
                {
                    "id":4,
                    "word": "Too much on my plate",
                    "mean": "When you feel overwhelmed or have too many tasks or responsibilities, you have 'too much on your plate."
                },
                {
                    "id":5,
                    "word": "Bandwidth",
                    "mean": "We're not referring to a radio. Bandwidth is a person's capacity or availability to take on additional tasks or projects."
                },
                {
                    "id":6,
                    "word": "Boil the ocean",
                    "mean": "If we “boiled the ocean,” we just took on an overly ambitious task that's unlikely to succeed. Ex.: 'Let's focus on smaller goals instead of trying to boil the ocean with this project.'"
                },
                {
                    "id":7,
                    "word": "Brain dump",
                    "mean": "In other words, putting lots of ideas on paper."
                },
                {
                    "id":8,
                    "word": "Deliverables",
                    "mean": "These are the tangible results or outputs that are expected from a project or task."
                },
                {
                    "id":9,
                    "word": "Game changer",
                    "mean": "A game changer means something that has the potential to impact or transform a situation significantly."
                },
                {
                    "id":10,
                    "word": "Good to go",
                    "mean": "When something is “good to go,” it's ready."
                },
                {
                    "id":11,
                    "word": "Herding cats",
                    "mean": "This expression doesn't mean that someone is literally herding dozens of cats in their apartment. It's just a weird way to say you're trying to manage people or tasks that are difficult to manage."
                },
                {
                    "id":12,
                    "word": "Run up the flagpole",
                    "mean": "Running something up the flagpole means presenting an idea, proposal, or plan to gather feedback."
                },
                {
                    "id":13,
                    "word": "Throw under the bus",
                    "mean": "This is a common expression you might have heard in another context. It means to unfairly blame or sacrifice someone for your own benefit or to avoid responsibility."
                },
                {
                    "id":14,
                    "word": "Micromanage",
                    "mean": "Micromanaging can be the most annoying thing in the workplace! It’s the practice of excessive or unnecessary control over small details of tasks or projects."
                },
                {
                    "id":15,
                    "word": "Let go",
                    "mean": "These are probably the two scariest words in the office! When someone has been “let go,” they were fired."
                },
                {
                    "id":16,
                    "word": "Keep me in the loop",
                    "mean": "When you ask someone to “keep you in the loop,” you ask them to keep you informed and included in the conversation."
                },
                {
                    "id":17,
                    "word": "Workflow",
                    "mean": "Workflow refers to the sequence of steps or tasks involved in completing a specific process or project."
                },
            ]
        },
        {
            "id": 2,
            "name": "Business meetings vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/6543/6543839.png",
            "content":[
                {   
                    "id":1,
                    "word": "Meeting agenda",
                    "mean": "It’s a structured plan that outlines the topics, objectives, and order of discussion for a meeting."
                },
                {   
                    "id":2,
                    "word": "Opening remarks",
                    "mean": "These are the comments or statements your team members make at the beginning of a meeting. They are meant to provide the context and introduce the rest of the team to the topic of the meeting."
                },
                {
                    "id":3,
                    "word": " Action plan",
                    "mean": "It’s a detailed plan that specifies what needs to be done. It outlines the tasks and the timeline to achieve set goals."
                },
                {
                    "id":4,
                    "word": "Touch base",
                    "mean": "If someone wants to touch base with you, it doesn’t mean they want to play hockey. They just want to discuss something with you."
                },
                {
                    "id":5,
                    "word": "Break the ice",
                    "mean": "It’s a common expression used in everyday situations. It means starting a conversion and can be used during a meeting to kick things off."
                },
                {
                    "id":6,
                    "word": "Get the ball rolling",
                    "mean": "It means starting something. In this case, the meeting."
                },
                {
                    "id":7,
                    "word": "Circle back",
                    "mean": "When someone says, “Let’s circle back,” they want to discuss something again, or they’ll want to discuss it with you later."
                },
                {
                    "id":8,
                    "word": "Going forward",
                    "mean": "It’s an expression used to move from one topic to another during a team meeting."
                },
                {
                    "id":9,
                    "word": "Think outside the box",
                    "mean": "This is a popular idiom. But in the corporate setting, it simply means coming up with innovative ideas."
                },
                {
                    "id":10,
                    "word": "Win-win situation",
                    "mean": "If something is a win-win situation, it’s an outcome or solution that benefits everyone involved. Everybody wins!"
                },
                {
                    "id":11,
                    "word": "Move the needle",
                    "mean": "If someone moved the needle, they made significant progress or achieved something that positively impacted the situation."
                },
                {
                    "id":12,
                    "word": "Take it offline",
                    "mean": "I initially thought it meant to take the online conversation face-to-face. But no, it means to discuss something outside the current meeting so as not to go over the planned meeting time."
                },
                {
                    "id":13,
                    "word": "Back to the drawing board",
                    "mean": "When someone wants to go back to the drawing board, they feel the need to start over. Mainly because something didn’t go as planned or they want to reevaluate the plan."
                },
                {
                    "id":14,
                    "word": "Trim the fat",
                    "mean": "This funny expression means removing unnecessary elements to make something more streamlined or efficient."
                },
                {
                    "id":15,
                    "word": "On the same page",
                    "mean": "When someone says, “Let’s make sure we’re on the same page,” they want to know whether you’re thinking alike."
                },
                {
                    "id":16,
                    "word": "Deep dive",
                    "mean": "When someone wants to “deep dive” into something, they just want to explore the topic in detail."
                },
                {
                    "id":17,
                    "word": "Ducks in a row",
                    "mean": "If your boss says, “Let’s get our ducks in a row,” it means they want to start getting organized to handle a task."
                },
                {
                    "id":18,
                    "word": "On board",
                    "mean": "If you’re on board with something, you agree with it. If you don’t, you can always move the goalposts."
                },
                {
                    "id":19,
                    "word": "Move the goalposts",
                    "mean": "If your manager wants to move the goalposts, they want to change something: the objectives, the scope, or the project requirements."
                },
                {
                    "id":20,
                    "word": "Park it",
                    "mean": "If you’re parking it, you’re holding off on a project or milestone until you get approval from whoever is in charge."
                },
                {
                    "id":21,
                    "word": "Push the envelope",
                    "mean": "If your boss asks you to push the envelope, they just want you to give your best."
                },
                {
                    "id":22,
                    "word": " Drill down into",
                    "mean": "To drill down into something means to examine or analyze it in detail."
                },
                {
                    "id":23,
                    "word": "Forward planning",
                    "mean": "As you may have intuitively assumed, forward planning is the process of anticipating future needs or events and preparing accordingly."
                },
                {
                    "id":24,
                    "word": "Silver bullet",
                    "mean": "A silver bullet is a simple or quick solution that solves a complex problem or achieves significant results."
                },
                {
                    "id":25,
                    "word": "Cut corners",
                    "mean": "This is a popular idiom in everyday English, which means taking shortcuts. It’s usually done to save resources (like money or time), but it’s not always the best way."
                },
                {
                    "id":26,
                    "word": "Call it a day",
                    "mean": "The phrase you’re looking forward to during the entire meeting! “Let’s call it a day” means the meeting is over. Hooray!"
                },
                {
                    "id":27,
                    "word": "Follow-up questions",
                    "mean": "Follow-up questions are additional questions you or your teammates might have after discussing something. They aim to clarify things or gather more information."
                },
                {
                    "id":28,
                    "word": "Closing remarks",
                    "mean": "The opposite of opening remarks. Closing remarks are the comments or statements made at the end of a meeting, usually to summarize what was discussed."
                },
                {
                    "id":29,
                    "word": "Wrap up",
                    "mean": "When you’re wrapping things up, you’re finishing something - a task, a project, or a meeting."
                },
            ]
        },
        {
            "id": 3,
            "name": "Marketing vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/7011/7011353.png",
            "content":[
                {   
                    "id":1,
                    "word": "B2B (Business to business)",
                    "mean": "It's business between two companies, rather than a company and an individual."
                },
                {   
                    "id":2,
                    "word": "Brand awareness",
                    "mean": "Spreading the word about your brand as far and wide as you can. Usually via social media or Google."
                },
                {
                    "id":3,
                    "word": "Branding",
                    "mean": "Creating a unique and recognizable identity (both visual and non-visual) for a product or a company."
                },
                {
                    "id":4,
                    "word": "Call to action (CTA)",
                    "mean": "The button on a website that encourages action, like making a purchase."
                },
                {
                    "id":5,
                    "word": "Case study",
                    "mean": "A story about someone's experience with your product or service and how it benefitted them."
                },
                {
                    "id":6,
                    "word": "Clickbait",
                    "mean": "Sneaky headlines that trick you into clicking. Once you do, it turns out it's not what you expected."
                },
                {
                    "id":7,
                    "word": "Cold calling",
                    "mean": "Calling people who have never heard about your brand to sell them your products or services"
                },
                {
                    "id":8,
                    "word": "Content marketing",
                    "mean": "Marketing your brand via any written, audio, or video content."
                },
                {
                    "id":9,
                    "word": "Customer journey",
                    "mean": "The process your customers go through before they buy your stuff."
                },
                {
                    "id":10,
                    "word": "Customer segmentation",
                    "mean": "Dividing your customers into groups based on shared characteristics."
                },
                {
                    "id":11,
                    "word": "Going viral",
                    "mean": "You go viral when one of your social media posts receives skyrocketing amounts of engagement you previously didn't have."
                },
                {
                    "id":12,
                    "word": "Influencer marketing",
                    "mean": "Getting someone famous on social media to market your product or talk about your brand to their followers."
                },
                {
                    "id":13,
                    "word": "Landing page",
                    "mean": "A page designed to promote one specific product or offer and get visitors to do one thing, like download a freebie or buy something."
                },
                {
                    "id":14,
                    "word": "Market research",
                    "mean": "Collecting data to understand your audience's preferences and find out what your competitors are doing."
                },
                {
                    "id":15,
                    "word": "On the same page",
                    "mean": "When someone says, “Let’s make sure we’re on the same page,” they want to know whether you’re thinking alike."
                },
                {
                    "id":16,
                    "word": "ROI (Return on investment)",
                    "mean": "The metric we calculate to see if the money we invested into something made us more money."
                },
                {
                    "id":17,
                    "word": "SEO (Search Engine Optimization)",
                    "mean": "Optimizing a website or content to improve its visibility and ranking in search engine results."
                },
                {
                    "id":18,
                    "word": "Social media engagement",
                    "mean": "It measures how people interact with your social media content via likes, comments, shares, and saves."
                },
                {
                    "id":19,
                    "word": "Target audience",
                    "mean": "The group of people who share similar characteristics and are most likely to be interested in your product or service."
                },
                {
                    "id":20,
                    "word": "Testimonials",
                    "mean": "The written or recorded opinions people have about your products or services."
                },
                {
                    "id":21,
                    "word": "Unique selling proposition (USP)",
                    "mean": "It's the trait that makes your product or service different from your competitors."
                }
            ]
        },
        {
            "id": 4,
            "name": "Sales vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/1029/1029023.png",
            "content":[
                {   
                    "id":1,
                    "word": "Bargain",
                    "mean": "Getting a great deal or discount on a purchase."
                },
                {   
                    "id":2,
                    "word": "Buy in bulk",
                    "mean": "To buy large quantities of the same product."
                },
                {
                    "id":3,
                    "word": "Buyer",
                    "mean": "The person or company that buys something."
                },
                {
                    "id":4,
                    "word": "Client",
                    "mean": "The person that buys our services."
                },
                {
                    "id":5,
                    "word": "Close the sale",
                    "mean": "To successfully convince someone to make a purchase."
                },
                {
                    "id":6,
                    "word": "Customer",
                    "mean": "The person that buys our products."
                },
                {
                    "id":7,
                    "word": "Good value for money",
                    "mean": "A fair and worthwhile return on the amount spent."
                },
                {
                    "id":8,
                    "word": "Invoice",
                    "mean": "A document that shows the details and cost of a product or service."
                },
                {
                    "id":9,
                    "word": "Negotiate",
                    "mean": "To attempt to reach a fair agreement between the buyer and seller on terms and price."
                },
                {
                    "id":10,
                    "word": "Out of stock",
                    "mean": "When a product is temporarily unavailable for purchase, it's out of stock."
                },
                {
                    "id":11,
                    "word": "Pay in full",
                    "mean": "To pay the entire price of a product or service at once."
                },
                {
                    "id":12,
                    "word": "Payment by installments",
                    "mean": "The practice of paying for a purchase in smaller, regular amounts over a period of time."
                },
                {
                    "id":13,
                    "word": "Payment plan",
                    "mean": "An arrangement to pay for something in a structured and scheduled manner."
                },
                {
                    "id":14,
                    "word": "Prospect",
                    "mean": "A potential customer who fits the compaby's target market and shows interest or is likely to show interest in the company's products or services."
                },
                {
                    "id":15,
                    "word": "Purchase",
                    "mean": "To buy something"
                },
                {
                    "id":16,
                    "word": "Quote",
                    "mean": "Providing a price estimate for a product or service."
                },
                {
                    "id":17,
                    "word": "Refund",
                    "mean": "The money that a business gives back to a customer for returning a product or canceling a service."
                },
                {
                    "id":18,
                    "word": "Retailer",
                    "mean": "A store or business that sells products directly to customers."
                },
                {
                    "id":19,
                    "word": "Sales pitch",
                    "mean": "A persuasive presentation to convince someone to buy your product or service."
                },
                {
                    "id":20,
                    "word": "Seller",
                    "mean": "The person or company that sells something."
                },
                {
                    "id":21,
                    "word": "Sold out",
                    "mean": "When a product is sold out, the store has no more left."
                },
                {
                    "id":22,
                    "word": "Supplier",
                    "mean": "A company that provides another company with the products they will later sell to their customers."
                },
                {
                    "id":23,
                    "word": "Trial",
                    "mean": "Testing out a product or service before committing to a purchase."
                },
                {
                    "id":24,
                    "word": "Wholesaler",
                    "mean": "A company that sells products in large quantities to retailers."
                },
            ]
        },
        {
            "id": 5,
            "name": "Finance and accounting vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/7892/7892621.png",
            "content":[
                {   
                    "id":1,
                    "word": "Assets",
                    "mean": "Things a business owns that have value."
                },
                {   
                    "id":2,
                    "word": "Balance sheet",
                    "mean": "A financial statement showing assets, liabilities, and equity."
                },
                {
                    "id":3,
                    "word": "Break-even point",
                    "mean": "The sales level at which a business neither makes a profit nor a loss."
                },
                {
                    "id":4,
                    "word": "Budget",
                    "mean": "A plan for how much money a business can spend and where it will go."
                },
                {
                    "id":5,
                    "word": "Capital",
                    "mean": "Money invested in a business to get it started or help it grow."
                },
                {
                    "id":6,
                    "word": "Cash flow",
                    "mean": "Money coming in and going out of a business."
                },
                {
                    "id":7,
                    "word": "Depreciation",
                    "mean": "The decrease in the value of assets over time."
                },
                {
                    "id":8,
                    "word": "Equity",
                    "mean": "The value of the business after subtracting liabilities."
                },
                {
                    "id":9,
                    "word": "Expenses",
                    "mean": "The money a business spend on stuff they need to run the company."
                },
                {
                    "id":10,
                    "word": "Gross profit",
                    "mean": "Money left after subtracting the cost of goods sold."
                },
                {
                    "id":11,
                    "word": "Income statement",
                    "mean": "A financial report showing revenue, expenses, and profit."
                },
                {
                    "id":12,
                    "word": "Inventory",
                    "mean": "All the products or items the business has in stock that it's planning to sell."
                },
                {
                    "id":13,
                    "word": "Liabilities",
                    "mean": "The money a business owes to other people (like investors or stakeholders)."
                },
                {
                    "id":14,
                    "word": "Loss",
                    "mean": "When a company spends more than they make, they have a loss."
                },
                {
                    "id":15,
                    "word": "Net profit",
                    "mean": "Money left after subtracting all expenses."
                },
                {
                    "id":16,
                    "word": "Revenue",
                    "mean": "The money a business makes from selling products or services."
                },
            ]
        },
        {
            "id": 6,
            "name": "Human resources vocabularies",
            "image": "https://cdn-icons-png.flaticon.com/128/4169/4169061.png",
            "content":[
                {   
                    "id":1,
                    "word": "Applicant tracking system (ATS)",
                    "mean": "A system that helps recruiters keep track of all the job applications they receive."
                },
                {   
                    "id":2,
                    "word": "Behavioral competency",
                    "mean": "The skills and qualities that contribute to effective job performance."
                },
                {
                    "id":3,
                    "word": "Benchmarking",
                    "mean": "Comparing your performance to industry best practices to identify areas for improvement."
                },
                {
                    "id":4,
                    "word": "Broadbanding",
                    "mean": "Consolidating multiple job levels into broader pay ranges."
                },
                {
                    "id":5,
                    "word": "Confidentiality agreement",
                    "mean": "It's an agreement that employees sign that prevents them from using the confidential information they handle as part of their job outside of their responsibilities."
                },
                {
                    "id":6,
                    "word": "Exit interview",
                    "mean": "A conversation held when an employee is leaving to gather feedback and insights."
                },
                {
                    "id":7,
                    "word": "Gross misconduct",
                    "mean": "An action that is unacceptable at the workplace and needs to be punished by immediate dismissal."
                },
                {
                    "id":8,
                    "word": "Job description",
                    "mean": "A description that lists everything you're supposed to do at a particular job, usually part of a job advertisement."
                },
                {
                    "id":9,
                    "word": "Key performance indicators (KPIs)",
                    "mean": "HR KPIs are the metrics used to measure how HR contributes to the company's success."
                },
                {
                    "id":10,
                    "word": "Onboarding",
                    "mean": "The process of educating new employees and turning them into fully functioning team members."
                },
                {
                    "id":11,
                    "word": "Orientation",
                    "mean": "A financial report showing revenue, expenses, and profit."
                },
                {
                    "id":12,
                    "word": "Inventory",
                    "mean": "The first day of work for new employees that includes a tour of the office and a couple of meetings that explain the nature of the job."
                },
                {
                    "id":13,
                    "word": "Recruitment",
                    "mean": "The process of finding new employees to work at a company."
                },
                {
                    "id":14,
                    "word": "Succession planning",
                    "mean": "Identifying and preparing potential candidates for key roles in the future."
                },
                {
                    "id":15,
                    "word": "Talent management",
                    "mean": "Nurturing and developing employees' skills and potential."
                },
            ]
        },
        {
            "id": 7,
            "name": "Legal terms and meanings",
            "image": "https://cdn-icons-png.flaticon.com/128/2534/2534888.png",
            "content":[
                {   
                    "id":1,
                    "word": "Agreement",
                    "mean": "An understanding between two or more parties, usually documented in a contract."
                },
                {   
                    "id":2,
                    "word": "Appendix",
                    "mean": "An additional section of a contract that provides additional information."
                },
                {
                    "id":3,
                    "word": "Breach of contract",
                    "mean": "This happens when one of the two parties doesn’t comply with the terms agreed upon in the contract they signed."
                },
                {
                    "id":4,
                    "word": "Clause",
                    "mean": "A section in a contract that addresses a specific issue."
                },
                {
                    "id":5,
                    "word": "Contract",
                    "mean": "A document where the agreement between two parties is outlined in detail."
                },
                {
                    "id":6,
                    "word": "Copyright",
                    "mean": "The exclusive legal right granted to the creator of an original work, protecting it from unauthorized use."
                },
                {
                    "id":7,
                    "word": "Fail to comply",
                    "mean": "Not to adhere to the requirements or terms outlined in a signed contract."
                },
                {
                    "id":8,
                    "word": "Fine print",
                    "mean": "The tiny text, usually at the bottom of a document or contract, that contains important information."
                },
                {
                    "id":9,
                    "word": "Intellectual property",
                    "mean": "Intangible creations of the mind, such as inventions, designs, or artistic works, protected by law."
                },
                {
                    "id":10,
                    "word": "Legal dispute",
                    "mean": "A conflict between two parties that requires legal intervention."
                },
                {
                    "id":11,
                    "word": "Legal expert",
                    "mean": "A person who knows the ins and outs of legal matters and can advise those with no idea."
                },
                {
                    "id":12,
                    "word": "Legally binding",
                    "mean": "When something is legally binding, it is enforceable by law."
                },
                {
                    "id":13,
                    "word": "Null and void",
                    "mean": "It means that a contract is considered invalid and has no legal effect."
                },
                {
                    "id":14,
                    "word": "Party",
                    "mean": "An individual or a company involved in a contract or a legal dispute."
                },
                {
                    "id":15,
                    "word": "Terminate a contract",
                    "mean": "To end the contract before its completion date."
                },
                {
                    "id":16,
                    "word": "Terms",
                    "mean": "The requirements you agree to when signing a contract."
                },
                {
                    "id":17,
                    "word": "Trademark",
                    "mean": "A legally registered symbol, word, phrase, or logo used to identify a brand or a product."
                },
            ]
        },
        {
            "id": 8,
            "name": "Short words meanings",
            "image": "https://cdn-icons-png.flaticon.com/128/3285/3285819.png",
            "content": [
                {   
                    "id": 1,
                    "word": "B2B",
                    "mean": "Business to Business"
                },
                {   
                    "id": 2,
                    "word": "B2C",
                    "mean": "Business to Consumer"
                },
                {   
                    "id": 3,
                    "word": "CAO",
                    "mean": "Chief Accounting Officer"
                },
                {   
                    "id": 4,
                    "word": "CEO",
                    "mean": "Chief Executive Officer"
                },
                {   
                    "id": 5,
                    "word": "CFO",
                    "mean": "Chief Financial Officer"
                },
                {   
                    "id": 6,
                    "word": "CMO",
                    "mean": "Chief Marketing Officer"
                },
                {   
                    "id": 7,
                    "word": "CSO",
                    "mean": "Chief Security Officer"
                },
                {   
                    "id": 8,
                    "word": "CRM",
                    "mean": "Customer Relationship Management"
                },
                {   
                    "id": 9,
                    "word": "EXP",
                    "mean": "Export"
                },
                {   
                    "id": 10,
                    "word": "GDP",
                    "mean": "Gross Domestic Product"
                },
                {   
                    "id": 11,
                    "word": "HR",
                    "mean": "Human Resources"
                },
                {   
                    "id": 12,
                    "word": "HQ",
                    "mean": "Head Quarters"
                },
                {   
                    "id": 13,
                    "word": "IR",
                    "mean": "Interest Rate"
                },
                {   
                    "id": 14,
                    "word": "LLC",
                    "mean": "Limited Liability Company"
                },
                {   
                    "id": 15,
                    "word": "NDA",
                    "mean": "Non-Disclosure Agreement"
                },
                {   
                    "id": 16,
                    "word": "R&D",
                    "mean": "Research and Development"
                },
                {   
                    "id": 17,
                    "word": "SCM",
                    "mean": "Supply Chain Management"
                },
                {   
                    "id": 18,
                    "word": "AWB",
                    "mean": "Airway Bill"
                },
                {   
                    "id": 19,
                    "word": "BL",
                    "mean": "Bill of Lading"
                },
                {   
                    "id": 20,
                    "word": "CIF",
                    "mean": "Cost Insurance Freight"
                },
                {   
                    "id": 21,
                    "word": "CIP",
                    "mean": "Carriage and Insurance Paid To:"
                },
                {   
                    "id": 22,
                    "word": "C&F",
                    "mean": "Cost and Freight"
                },
                {   
                    "id": 23,
                    "word": "CPT",
                    "mean": "Carriage Paid To"
                },
                {   
                    "id": 24,
                    "word": "DAT",
                    "mean": "Delivered At Terminal"
                },
                {   
                    "id": 25,
                    "word": "DDP",
                    "mean": "Delivered Duty Paid"
                },
                {   
                    "id": 26,
                    "word": "EXW",
                    "mean": "Ex Works"
                },
                {   
                    "id": 27,
                    "word": "FAS",
                    "mean": "Free Alongside Ship"
                },
                {   
                    "id": 28,
                    "word": "FCA",
                    "mean": "Free Carrier"
                },
                {   
                    "id": 29,
                    "word": "FOB",
                    "mean": "Free On Board"
                },
                {   
                    "id": 30,
                    "word": "CAPEX",
                    "mean": "Capital Expenditure"
                },
                {   
                    "id": 31,
                    "word": "COGS",
                    "mean": "Cost of Goods Sold"
                },
                {   
                    "id": 32,
                    "word": "EBIT",
                    "mean": "Earnings Before Interest and Taxes"
                },
                {   
                    "id": 33,
                    "word": "EBITDA",
                    "mean": "Earnings Before Interest Taxes Depreciation and Amortization"
                },
                {   
                    "id": 34,
                    "word": "EPS",
                    "mean": "Earnings per Share"
                },
                {   
                    "id": 35,
                    "word": "FIFO",
                    "mean": "First In First Out"
                },
                {   
                    "id": 36,
                    "word": "GAAP",
                    "mean": "Generally Accepted Accounting Principles"
                },
                {   
                    "id": 37,
                    "word": "GAAS",
                    "mean": "Generally Accepted Audit Standards"
                },
                {   
                    "id": 38,
                    "word": "GP",
                    "mean": "Gross Profit"
                },
                {   
                    "id": 39,
                    "word": "IPO",
                    "mean": "Initial Public Offering"
                },
                {   
                    "id": 40,
                    "word": "LC",
                    "mean": "Letter of Credit"
                },
                {   
                    "id": 41,
                    "word": "LIFO",
                    "mean": "Last In First Out"
                },
                {   
                    "id": 42,
                    "word": "NOPAT",
                    "mean": "Net Operating Profit After Tax"
                },
                {   
                    "id": 43,
                    "word": "NPV",
                    "mean": "Net Present Value"
                },
                {   
                    "id": 44,
                    "word": "OPEX",
                    "mean": "Operational Expenditure"
                },
                {   
                    "id": 45,
                    "word": "P&L",
                    "mean": "Profit and Loss"
                },
                {   
                    "id": 46,
                    "word": "ROA",
                    "mean": "Return on Assets"
                },
                {   
                    "id": 47,
                    "word": "ROE",
                    "mean": "Return on Equity"
                },
                {   
                    "id": 48,
                    "word": "ROI",
                    "mean": "Return on Investment"
                },
                {   
                    "id": 49,
                    "word": "ROS",
                    "mean": "Return on Sales"
                },
                {   
                    "id": 50,
                    "word": "WACC",
                    "mean": "Weighted Average Cost of Capital"
                }
            ]
            
        },
    ])

    return { vocabs }
  })