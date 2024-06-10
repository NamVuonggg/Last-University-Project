import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
export const useNoteStore = defineStore('note', () =>{
    const notes = reactive([
        {
            id: 1,
            title: "Toyota",
            content: "Toyota is one of the biggest companies in Japan as adwd adawd adasd awd adawd adawd awd",
            date: "9/6/2024",
            important: false
        },
        {
            id: 2,
            title: "Toyota",
            content: "Toyota is one of the biggest companies in Japan as adwd adawd adasd awd adawd adawd awd",
            date: "10/6/2024",
            important: false
        },
        {
            id: 3,
            title: "Toyota",
            content: "Toyota is one of the biggest companies in Japan as adwd adawd adasd awd adawd adawd awd",
            date: "11/6/2024",
            important: false
        },
        {
            id: 4,
            title: "Toyota",
            content: "Toyota is one of the biggest companies in Japan as adwd adawd adasd awd adawd adawd awd",
            date: "12/6/2024",
            important: false
        },{
            id: 5,
            title: "Toyota",
            content: "Toyota is one of the biggest companies in Japan as adwd adawd adasd awd adawd adawd awd",
            date: "13/6/2024",
            important: false
        }
    ]);
    const checked = ref(false);

    const modalIsActive = ref(false);
    const activeNoteModal = () =>{
        modalIsActive.value = true
    }
    const closeModal = () =>{
        modalIsActive.value = false
    }

    const noteTitle = ref();
    const noteContent = ref();
    const textEmptyError = ref(false)

    const addNote = () =>{
        if(noteTitle.value && noteContent.value){
            notes.push({
                id: notes.length ? notes.length + 1 : 1,
                title: noteTitle.value,
                content: noteContent.value,
                date: new Date().toLocaleDateString(),
                important: false,

            });
        }else{
            textEmptyError.value = true;
            setTimeout(function(){
                textEmptyError.value = false;
            },2600)
        };
        noteTitle.value = ("");
        noteContent.value = ("");
        closeModal();
    }


    return { 
        noteTitle, 
        noteContent, 
        notes, 
        noteTitle, 
        noteContent, 
        addNote, 
        textEmptyError, 
        checked, 
        modalIsActive, 
        activeNoteModal, 
        closeModal };
})