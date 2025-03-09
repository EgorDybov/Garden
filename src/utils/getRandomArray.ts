export const getRandomArray = (arr: any[], count: number) => {
    const randomMoveCategories = [...arr].sort(() => Math.random() - 0.5)
    return randomMoveCategories.splice(0,count)
}