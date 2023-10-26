export default defineEventHandler(async (event) => {
  console.log('getDemoData', event.context._nitro)
  
  const datestring = `Some date ${new Date()}`
  
  
  const data = await $fetch('https://jsonplaceholder.typicode.com/posts/')
  const firstPosts = data.slice(0,5)


  return {
    posts: firstPosts,
    date: datestring
  }
})