export const dummyFetch = (num: number) => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10) * num)
    }, 1000 * Math.random())
  })
}
