export class PrestamosException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PrestamosException';
    }
}