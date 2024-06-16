import { defineStore } from 'pinia'
import { reactive } from 'vue'
export const useVocabsViewStore = defineStore('vocabsView', () =>{

    const vocabs = reactive([
        {
            id: 1,
            name: "Everyday business vocabulary",
            content:[
                {   
                    id:1,
                    word: "ASAP (As Soon As Possible)",
                    mean: "To do something ASAP means to do it fast, with urgency."
                },
                {   
                    id:2,
                    word: "Backburner",
                    mean: "To put something on the backburner means to set aside tasks or projects for a while."
                },
                {
                    id:3,
                    word: "Balls in the air",
                    mean: "No, it's not what you think it is. If you have multiple tasks or responsibilities to handle at the same time, you have many 'balls in the air.'"
                },
                {
                    id:4,
                    word: "Too much on my plate",
                    mean: "When you feel overwhelmed or have too many tasks or responsibilities, you have 'too much on your plate."
                },
                {
                    id:5,
                    word: "Bandwidth",
                    mean: "We're not referring to a radio. Bandwidth is a person's capacity or availability to take on additional tasks or projects."
                },
                {
                    id:6,
                    word: "Boil the ocean",
                    mean: "If we “boiled the ocean,” we just took on an overly ambitious task that's unlikely to succeed. Ex.: 'Let's focus on smaller goals instead of trying to boil the ocean with this project.'"
                },
                {
                    id:7,
                    word: "Brain dump",
                    mean: "In other words, putting lots of ideas on paper."
                },
                {
                    id:8,
                    word: "Deliverables",
                    mean: "These are the tangible results or outputs that are expected from a project or task."
                },
                {
                    id:9,
                    word: "Game changer",
                    mean: "A game changer means something that has the potential to impact or transform a situation significantly."
                },
                {
                    id:10,
                    word: "Good to go",
                    mean: "When something is “good to go,” it's ready."
                },
                {
                    id:11,
                    word: "Herding cats",
                    mean: "This expression doesn't mean that someone is literally herding dozens of cats in their apartment. It's just a weird way to say you're trying to manage people or tasks that are difficult to manage."
                },
                {
                    id:12,
                    word: "Run up the flagpole",
                    mean: "Running something up the flagpole means presenting an idea, proposal, or plan to gather feedback."
                },
                {
                    id:13,
                    word: "Throw under the bus",
                    mean: "This is a common expression you might have heard in another context. It means to unfairly blame or sacrifice someone for your own benefit or to avoid responsibility."
                },
                {
                    id:14,
                    word: "Micromanage",
                    mean: "Micromanaging can be the most annoying thing in the workplace! It’s the practice of excessive or unnecessary control over small details of tasks or projects."
                },
                {
                    id:15,
                    word: "Let go",
                    mean: "These are probably the two scariest words in the office! When someone has been “let go,” they were fired."
                },
                {
                    id:16,
                    word: "Keep me in the loop",
                    mean: "When you ask someone to “keep you in the loop,” you ask them to keep you informed and included in the conversation."
                },
                {
                    id:17,
                    word: "Workflow",
                    mean: "Workflow refers to the sequence of steps or tasks involved in completing a specific process or project."
                },
            ]
        }
    ])

    return { vocabs }
  })