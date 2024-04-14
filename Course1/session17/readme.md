- Javascript Requests Basics

- window.fetch(`URL`) await / .then().then()

=== === ===

- Praktike

- Backendi: https://jsonplaceholder.typicode.com

- /posts 100 posts
- /comments 500 comments
- /albums 100 albums
- /photos 5000 photos
- /todos 200 todos
- /users 10 users

1. Krijoni nje funksion i cili ne baze te parmetrit `type` ('users' || 'todos') , duke perdorur `if` te kthen te dhena per njeren nga api e meposhtme:

const getData = (type) => {

}

https://jsonplaceholder.typicode.com/users
https://jsonplaceholder.typicode.com/todos

2. Krijoni nje funksion i cili merr si parameter ID e postit dhe te kthen the dhenat ne return duke perdoru api :

https://jsonplaceholder.typicode.com/posts/[ID] => (ku [ID] = 1,2,3,4,5,6)

3. Nxirrni ne nje `ul` me `li` te dhenat e marra nga API => `/users` duke perdorur `append/.innerHTML`

4. Nxirrni nga API /photos 3 fotot e para ne DOM dhe stilojini me CSS

5. Nga API `/users` nxirrni te gjitha companite e userave dhe the dhenat e kompanise te stiluara brenda `div`-eve

<dvi>
    <h2> {company.name} </h2>
    <p> {company.catchPhrase} </p>
    <p> {company.bs} </p>
</div>
