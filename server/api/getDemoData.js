export default defineEventHandler((event) => {
  
  const datestring = `Some date ${new Date()}`
  
  return {
    hello: 'world',
    date: datestring
  }
})