// this is just a fake module to simulate interacting with a server
 
// simulate the network request time...
const sleep = (time: any) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
 
async function savePost(postData: any) {
  await sleep(1000)
  return {data: {post: postData}}
}
 
const greetings = ['Hello', 'Hi', 'Hey there', `What's up`, 'Howdy', `G'day`]
 
async function loadGreeting(subject: any) {
  return {data: {greeting: `${await fetchRandomGreeting()} ${subject}`}}
}
 
async function fetchRandomGreeting() {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}
 
// a fire-and-forget function to report errors
// for componentDidCatch
async function reportError(error: any, type: any) {
  await sleep(1000)
  return {success: true}
}
 
async function submitForm(form: any) {
  await sleep(1000)
  return {success: true}
}
 
export {savePost, loadGreeting, reportError, submitForm}