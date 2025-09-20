import { defineStore } from "pinia";


export const usePollStore=defineStore('poll',{
    state:()=>({
        polls:[]
    }),

    actions:{
        setPolls(newPoll){
            this.polls=newPoll;
        }
    }
})