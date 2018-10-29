import Vue from "vue";

export default class Model {

    public static _instance:Model;

    public static getInstance(){
        if(Model._instance==null) {
            Model._instance = new Model();
        }

        return Model._instance;
    }


    constructor(){
    }



}