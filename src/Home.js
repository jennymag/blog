import Blogpost from "./Blogpost";

const data = [
  {
    title: "My first blog post",
    text: "Welcome to my blog! This is my first but not last post",
    category: "Life",
    id: 1,
    time: "Onsdag, 1 januari 2021, 12:41",
    img:
      "https://images.unsplash.com/photo-1446419385500-203d54c0c460?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    title: "I love music",
    text: "But I don't. ",
    category: "Life",
    id: 2,
    time: "Onsdag, 1 januari 2021, 12:41",
    img:
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
  {
    title: "My first blog post",
    text: "Welcome to my blog! This is my first but not last post",
    category: "Life",
    id: 1,
    time: "Onsdag, 1 januari 2021, 12:41",
    img:
      "https://images.unsplash.com/photo-1497217968520-7d8d60b7bc25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
  {
    title: "I love music",
    text: "But I don't. ",
    category: "Life",
    id: 2,
    time: "Onsdag, 1 januari 2021, 12:41",
    img:
      "https://images.unsplash.com/photo-1551730708-87acf0563a4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80",
  },
];

function Home(props) {
  return (
    <>
      {data.map((post) => (
        <Blogpost {...post} />
      ))}
    </>
  );
}

export default Home;
