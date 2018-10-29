export default class Model {
    static getInstance() {
        if (Model._instance == null) {
            Model._instance = new Model();
        }
        return Model._instance;
    }
    constructor() {
    }
}
//# sourceMappingURL=Model.js.map