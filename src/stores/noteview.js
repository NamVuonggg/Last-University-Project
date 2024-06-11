import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
export const useNoteStore = defineStore('note', () =>{
    const notes = reactive([]);

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
            closeModal();
        }else{
            textEmptyError.value = true;
            setTimeout(function(){
                textEmptyError.value = false;
            },2600)
        };
        noteTitle.value = ("");
        noteContent.value = ("");
    }

    const deleteNote = (noteId) =>{
        const index = notes.findIndex(note => note.id === noteId );
        if(index !== -1){
            notes.splice(index, 1);
        }
    }

    const updateImportant = (noteId, importantStatus) =>{
        const index = notes.findIndex(note => note.id === noteId);
        if(index !== -1){
            notes[index].important = importantStatus;
        }
    }

    const importantNotes = computed(() =>{
        return notes.filter(note => note.important);
    })

    return { 
        noteTitle, 
        noteContent, 
        notes, 
        noteTitle, 
        noteContent, 
        addNote, 
        textEmptyError, 
        modalIsActive, 
        activeNoteModal, 
        closeModal,
        deleteNote,
        updateImportant,
        importantNotes
     };
})