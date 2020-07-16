/*Задача 1*/

describe('clone', () => {
    it('should create copy of object', () => {
        const shop = {
            prices: 'cheap',
            service: 'good',
            timeOfOpening: 8,
            timeOfClosing: 20,
        };
        expect(clone(shop)).to.deep.equal(shop);
    })
    it('should create new object', () => {
        const shop = {
            prices: 'cheap',
            service: 'good',
            timeOfOpening: 8,
            timeOfClosing: 20,
        };
        expect(clone(shop)).not.equal(shop);
    });

})

/* Задача 2 */

describe('human', () => {
    it('should calculate sum of strings', () => {
        expect(
            human({
                eyes: 'blue',
                hair: 'black',
                height: 'high',
                weight: 'small',
            })
        ).to.equal(18);
    });
});