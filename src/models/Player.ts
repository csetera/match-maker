export default class Player {
    constructor(public rank: number, public name: string) {}

    public toString(): string {
        return `[name=${this.name}][rank=${this.rank}]`;
    }
}