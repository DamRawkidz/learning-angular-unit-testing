describe('my first test',() => {
    let sut;

    beforeEach(() => {
        sut = {}
    })

    it('should retrieve the correct user',() => {
        // arrange
        sut.a = false
        

        // act
        sut.a = true

        expect(sut.a).toBe(true)

    })

    


    // 'user serive getuser method should retrieve the correct user'
    // describe('should be true if true',() => {


    //     describe('getUser method', () => {
    //         it('should retrieve the correct user',() => {

    //         })
    //     })
    // })
})