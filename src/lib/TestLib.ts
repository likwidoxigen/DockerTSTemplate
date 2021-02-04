class TestLib {
    private message: string;
    constructor () {
        this.message = "TypeScript is great!";
    }

    public get_message(){
        return this.message;
    }
}

export { TestLib };