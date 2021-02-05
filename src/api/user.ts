export const dummyFetch = (userName: string) => {
  return new Promise<{ name: string; age: number }>((resolve, reject) => {
    setTimeout(() => {
      if (userName.length === 0) {
        reject(new Error('空の文字列を渡さないでください'))
      } else {
        resolve({ name: userName, age: 24 })
      }
    }, 1000 * Math.random())
  })
}

dummyFetch('name').then(res => res).catch(error => )
