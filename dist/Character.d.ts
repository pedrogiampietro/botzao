interface ICharacter {
    percentageHealth: number;
    setPercentageHealth(): void;
    getPercentageHealth(): number;
}
declare class Character implements ICharacter {
    percentageHealth: number;
    healingInterval: any;
    setPercentageHealth(): void;
    getPercentageHealth(): number;
    healBelow(percentageHealthToHeal: number): void;
    healing(): void;
}
export { ICharacter, Character };
