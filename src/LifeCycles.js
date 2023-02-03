import React, { useState, useEffect } from "react";

export const LifeCycles = () => {
  const [state, setState] = useState(true);
  const [posts, setPosts] = useState([]);
  const [anotherState, setAnotherState] = useState(true);

  let niza = [<h1>1</h1>, <h1>2</h1>, <h1>3</h1>, <h1>4</h1>];
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  const handleAddPost = (e) => {
    e.preventDefault();
    const userInput = {
      title: e.target.title.value,
      body: e.target.body.value,
    };
    setPosts((pred) => [userInput, ...pred]);
  };

  console.log("CLG nadvor od useEffect");
  useEffect(() => {
    console.log("CLG od useEffect");
    return () => console.log("CLG vo return");
  }, [anotherState]);
  console.log(posts);
  return (
    <div>
      <form onSubmit={handleAddPost}>
        <input placeholder="Title" name="title" />
        <input placeholder="Body" name="body" />
        <button type="submit">Add post</button>
      </form>
      {posts?.map((element, i) => {
        return (
          <div key={i}>
            <h2>{element.title}</h2>
            <h4>{element.body}</h4>
          </div>
        );
      })}
      <button onClick={() => setState((pred) => !pred)}>---</button>
    </div>
  );
};
