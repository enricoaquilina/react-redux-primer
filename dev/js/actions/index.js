export const selectDog = (dog) => {
    console.log(dog);
    return {
        type: 'DOG_SELECTED',
        payload: dog
    }
};